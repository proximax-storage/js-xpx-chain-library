/*
 * Copyright 2018 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import convert from '../coders/convert';
import nacl from './nacl_catapult';
import CryptoJS from 'crypto-js';
import sha3Hasher from './sha3Hasher';
import { createKeyPairFromPrivateKeyString, deriveSharedKey } from './keyPair';

/**
 * Encrypt a private key for mobile apps (AES_PBKF2)
 *
 * @param {string} password - A wallet password
 * @param {string} privateKey - An account private key
 *
 * @return {object} - The encrypted data
 */
let toMobileKey = function (password, privateKey) {
    // Errors
    if (!password || !privateKey) throw new Error('Missing argument !');
    //if (!Helpers.isPrivateKeyValid(privateKey)) throw new Error('Private key is not valid !');
    // Processing
    let salt = CryptoJS.lib.WordArray.random(256 / 8);
    let key = CryptoJS.PBKDF2(password, salt, {
        keySize: 256 / 32,
        iterations: 2000
    });
    let iv = nacl.randomBytes(16)
    let encIv = {
        iv: ua2words(iv, 16)
    };
    let encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Hex.parse(privateKey), key, encIv);
    // Result
    return {
        encrypted: convert.uint8ToHex(iv) + encrypted.ciphertext,
        salt: salt.toString()
    }
};

/**
 * Derive a private key from a password using count iterations of SHA3-256
 *
 * @param {string} password - A wallet password
 * @param {number} count - A number of iterations above 0
 *
 * @return {object} - The derived private key
 */
let derivePassSha = function (password, count) {
    // Errors
    if (!password) throw new Error('Missing argument !');
    if (!count || count <= 0) throw new Error('Please provide a count number above 0');
    // Processing
    let data = password;
    console.time('sha3^n generation time');
    for (let i = 0; i < count; ++i) {
        data = CryptoJS.SHA3(data, {
            outputLength: 256
        });
    }
    console.timeEnd('sha3^n generation time');
    // Result
    return {
        'priv': CryptoJS.enc.Hex.stringify(data)
    };
};

/**
 * Reveal the private key of an account or derive it from the wallet password
 *
 * @param {object} common- An object containing password and privateKey field
 * @param {object} walletAccount - A wallet account object
 * @param {string} algo - A wallet algorithm
 *
 * @return {object|boolean} - The account private key in and object or false
 */
let passwordToPrivatekey = function (common, walletAccount, algo) {
    // Errors
    if (!common || !common.password || !walletAccount || !algo) throw new Error('Missing argument !');
    // Processing
    let r = undefined;
    if (algo === "pass:6k") { // Brain wallets
        if (!walletAccount.encrypted && !walletAccount.iv) {
            // Account private key is generated simply using a passphrase so it has no encrypted and iv
            r = derivePassSha(common.password, 6000);
        } else if (!walletAccount.encrypted || !walletAccount.iv) {
            // Else if one is missing there is a problem
            //console.log("Account might be compromised, missing encrypted or iv");
            return false;
        } else {
            // Else child accounts have encrypted and iv so we decrypt
            let pass = derivePassSha(common.password, 20);
            let obj = {
                ciphertext: CryptoJS.enc.Hex.parse(walletAccount.encrypted),
                iv: convert.hexToUint8(walletAccount.iv),
                key: convert.hexToUint8(pass.priv)
            };
            let d = decrypt(obj);
            r = { 'priv': d };
        }
    } else if (algo === "pass:bip32") { // Wallets from PRNG
        let pass = derivePassSha(common.password, 20);
        let obj = {
            ciphertext: CryptoJS.enc.Hex.parse(walletAccount.encrypted),
            iv: convert.hexToUint8(walletAccount.iv),
            key: convert.hexToUint8(pass.priv)
        };
        let d = decrypt(obj);
        r = { 'priv': d };
    } else if (algo === "pass:enc") { // Private Key wallets
        let pass = derivePassSha(common.password, 20);
        let obj = {
            ciphertext: CryptoJS.enc.Hex.parse(walletAccount.encrypted),
            iv: convert.hexToUint8(walletAccount.iv),
            key: convert.hexToUint8(pass.priv)
        };
        let d = decrypt(obj);
        r = { 'priv': d };
    } else if (algo === "trezor") { // HW wallet
        r = { 'priv': '' };
        common.isHW = true;
    } else {
        //console.log("Unknown wallet encryption method");
        return false;
    }
    // Result
    common.privateKey = r.priv;
    return true;
}


function hashfunc(dest, data, dataLength) {
    // OLD sha3 that uses keccak algo
    // let convertedData = ua2words(data, dataLength);
    // let hash = CryptoJS.SHA3(convertedData, {
    //     outputLength: 512
    // });
    // words2ua(dest, hash);

    const sha3_512 = sha3Hasher.createHasher(64);
    sha3_512.reset();
    sha3_512.update(data);
    sha3_512.finalize(dest);
}

function key_derive(shared, salt, sk, pk) {
    nacl.lowlevel.crypto_shared_key_hash(shared, pk, sk, hashfunc);
    for (let i = 0; i < salt.length; i++) {
        shared[i] ^= salt[i];
    }

    // OLD sha3 that uses keccak algo
    // let hash = CryptoJS.SHA3(ua2words(shared, 32), {
    //     outputLength: 256
    // });
    // return hash;

    const hash = new Uint8Array(32);
    const sha3_256 = sha3Hasher.createHasher(32);
    sha3_256.reset();
    sha3_256.update(shared);
    sha3_256.finalize(hash);
    return ua2words(hash, 32);
}

/**
 * Generate a random key
 *
 * @return {Uint8Array} - A random key
 */
let randomKey = function () {
    let rkey = nacl.randomBytes(32)
    return rkey;
};

/**
 * Encrypt hex data using a key
 *
 * @param {string} data - An hex string
 * @param {Uint8Array} key - An Uint8Array key
 *
 * @return {object} - The encrypted data
 */
let encrypt = function (data, key) {
    // Errors
    if (!data || !key) throw new Error('Missing argument !');
    // Processing
    let iv = nacl.randomBytes(16)
    let encKey = ua2words(key, 32);
    let encIv = {
        iv: ua2words(iv, 16)
    };
    let encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Hex.parse(data), encKey, encIv);
    // Result
    return {
        ciphertext: encrypted.ciphertext,
        iv: iv,
        key: key
    };
};

/**
 * Decrypt data
 *
 * @param {object} data - An encrypted data object
 *
 * @return {string} - The decrypted hex string
 */
let decrypt = function (data) {
    // Errors
    if (!data) throw new Error('Missing argument !');
    // Processing
    let encKey = ua2words(data.key, 32);
    let encIv = {
        iv: ua2words(data.iv, 16)
    };
    // Result
    return CryptoJS.enc.Hex.stringify(CryptoJS.AES.decrypt(data, encKey, encIv));
};

/**
 * Encode a private key using a password
 *
 * @param {string} privateKey - An hex private key
 * @param {string} password - A password
 *
 * @return {object} - The encoded data
 */
let encodePrivKey = function (privateKey, password) {
    // Errors
    if (!privateKey || !password) throw new Error('Missing argument !');
    //if (!Helpers.isPrivateKeyValid(privateKey)) throw new Error('Private key is not valid !');
    // Processing
    let pass = derivePassSha(password, 20);
    let r = encrypt(privateKey, convert.hexToUint8(pass.priv));
    // Result
    return {
        ciphertext: CryptoJS.enc.Hex.stringify(r.ciphertext),
        iv: convert.uint8ToHex(r.iv)
    };
};

/***
 * Encode a message, separated from encode() to help testing
 *
 * @param {string} senderPriv - A sender private key
 * @param {string} recipientPub - A recipient public key
 * @param {string} msg - A text message
 * @param {Uint8Array} iv - An initialization vector
 * @param {Uint8Array} salt - A salt
 *
 * @return {string} - The encoded message
 */
let _encode = function (senderPriv, recipientPub, msg, iv, salt) {
    // Errors
    if (!senderPriv || !recipientPub || !msg || !iv || !salt) throw new Error('Missing argument !');
    // Processing
    let keyPair = createKeyPairFromPrivateKeyString(senderPriv);
    let pk = convert.hexToUint8(recipientPub);
    let encKey = deriveSharedKey(keyPair, pk, salt);
    let encIv = {
        iv: ua2words(iv, 16)
    };
    let encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Hex.parse(convert.utf8ToHex(msg)), encKey, encIv);
    // Result
    let result = convert.uint8ToHex(salt) + convert.uint8ToHex(iv) + CryptoJS.enc.Hex.stringify(encrypted.ciphertext);
    return result;
};

/**
 *
 * @param {string} senderPriv
 * @param {string} recipientPub
 * @param {Uint8Array} bytes
 * @param {Uint8Array} iv
 * @param {Uint8Array} salt
 */
let _nemencode = function (senderPriv, recipientPub, bytes, iv, salt) {
    if (!senderPriv || !recipientPub || !bytes || !iv || !salt) throw new Error('Missing argument !');

    let sk = convert.hexToUint8Reverse(senderPriv);
    let pk = convert.hexToUint8(recipientPub);
    let shared = new Uint8Array(32);
    let r = key_derive(shared, salt, sk, pk);
    /* console.log('key ' + r);
     console.log('salt ' + salt);
     console.log('iv ' + iv);
     console.log('payload ' + bytes)*/
    let encKey = r;
    let encIv = {
        iv: ua2words(iv, 16)
    };

    let data = ua2words(bytes, bytes.length);
    //let data = convertUint8ArrayToWordArray(bytes);
    //console.log("Converted input bytes to wordArray ");
    //console.log(data);

    let encrypted = CryptoJS.AES.encrypt(data, encKey, encIv);
    //console.log(encrypted.ciphertext.sigBytes);

    // convert to Uint8Array
    let encryptedData = words2ua(new Uint8Array(encrypted.ciphertext.sigBytes), encrypted.ciphertext);

    // merge salt , iv and encrypted data in Uint8Array
    let result = mergeArray(salt, iv, encryptedData);
    //console.log("Merged salt iv and ciphertext");
    //console.log(result);
    return result;
}

/**
 * Encrypt data using nem keys
 * @param {string} senderPriv A sender private key
 * @param {string} recipientPub A recipient public key
 * @param {Uint8Array} bytes the array of bytes in Uint8Array
 */
let nemencrypt = function (senderPriv, recipientPub, bytes) {
    // Errors
    if (!senderPriv || !recipientPub || !bytes) throw new Error('Missing argument !');

    // Processing
    let iv = nacl.randomBytes(16);
    let salt = nacl.randomBytes(32);

    // OLD - no need to reverse private key
    // let sk = convert.hexToUint8Reverse(senderPriv);
    let sk = convert.hexToUint8(senderPriv);
    let pk = convert.hexToUint8(recipientPub);
    let shared = new Uint8Array(32);
    let r = key_derive(shared, salt, sk, pk);
    let encKey = r;
    let encIv = {
        iv: ua2words(iv, 16)
    };

    let payload = ua2words(bytes, bytes.length);
    let encrypted = CryptoJS.AES.encrypt(payload, encKey, encIv);
    let encryptedData = words2ua(new Uint8Array(encrypted.ciphertext.sigBytes), encrypted.ciphertext);
    let result = mergeArray(salt, iv, encryptedData);

    // Result
    return result;
};

/**
 *
 * @param {string} recipientPrivate the recipient private key
 * @param {string} senderPublic the recipient public key
 * @param {Uint8Array} bytes the array of bytes in Uint8Array
 */
let nemdecrypt = function (recipientPrivate, senderPublic, bytes) {
    // Errorsp
    if (!recipientPrivate || !senderPublic || !bytes) throw new Error('Missing argument !');

    // Processing
    let salt = bytes.slice(0, 32);
    let iv = bytes.slice(32, 48);
    let payload = bytes.slice(48, bytes.length);

    // OLD - no need to reverse private key
    // let sk = convert.hexToUint8Reverse(recipientPrivate);
    let sk = convert.hexToUint8(recipientPrivate);
    let pk = convert.hexToUint8(senderPublic);
    let shared = new Uint8Array(32);
    let r = key_derive(shared, salt, sk, pk);

    let encKey = r;
    let encIv = {
        iv: ua2words(iv, 16)
    };

    let encrypted = {
        'ciphertext': ua2words(payload, payload.length)
    };

    let plain = CryptoJS.AES.decrypt(encrypted, encKey, encIv);

    let result = words2ua(new Uint8Array(plain.sigBytes), plain);

    // Result
    return result;

};

/**
 * Encode a message
 *
 * @param {string} senderPriv - A sender private key
 * @param {string} recipientPub - A recipient public key
 * @param {string} msg - A text message
 *
 * @return {string} - The encoded message
 */
let encode = function (senderPriv, recipientPub, msg) {
    // Errors
    if (!senderPriv || !recipientPub || !msg) throw new Error('Missing argument !');
    //if (!Helpers.isPrivateKeyValid(senderPriv)) throw new Error('Private key is not valid !');
    //if (!Helpers.isPublicKeyValid(recipientPub)) throw new Error('Public key is not valid !');
    // Processing
    let iv = nacl.randomBytes(16)
    //console.log("IV:", convert.uint8ToHex(iv));
    let salt = nacl.randomBytes(32)
    let encoded = _encode(senderPriv, recipientPub, msg, iv, salt);
    // Result
    return encoded;
};

/**
 * Decode an encrypted message payload
 *
 * @param {string} recipientPrivate - A recipient private key
 * @param {string} senderPublic - A sender public key
 * @param {string} _payload - An encrypted message payload
 *
 * @return {string} - The decoded payload as hex
 */
let decode = function (recipientPrivate, senderPublic, _payload) {
    // Errorsp
    if(!recipientPrivate || !senderPublic || !_payload) throw new Error('Missing argument !');
    // Processing
    let binPayload = convert.hexToUint8(_payload);
    let salt = new Uint8Array(binPayload.buffer, 0, 32);
    let iv = new Uint8Array(binPayload.buffer, 32, 16);
    let payload = new Uint8Array(binPayload.buffer, 48);

    let keyPair = createKeyPairFromPrivateKeyString(recipientPrivate);
    let pk = convert.hexToUint8(senderPublic);
    let encKey = deriveSharedKey(keyPair, pk, salt);
    let encIv = {
        iv: ua2words(iv, 16)
    };
    let encrypted = {
        'ciphertext': ua2words(payload, payload.length)
    };
    let plain = CryptoJS.AES.decrypt(encrypted, encKey, encIv);
    // Result
    let hexplain = CryptoJS.enc.Hex.stringify(plain);
    return hexplain;
};

/**
 * Convert an Uint8Array to WordArray
 *
 * @param {Uint8Array} ua - An Uint8Array
 * @param {number} uaLength - The Uint8Array length
 *
 * @return {WordArray}
 */
let ua2words = function (ua, uaLength) {
    let temp = [];
    for (let i = 0; i < uaLength; i += 4) {
        let x = ua[i] * 0x1000000 + (ua[i + 1] || 0) * 0x10000 + (ua[i + 2] || 0) * 0x100 + (ua[i + 3] || 0);
        temp.push((x > 0x7fffffff) ? x - 0x100000000 : x);
    }
    return CryptoJS.lib.WordArray.create(temp, uaLength);
}

/**
 * Convert a wordArray to Uint8Array
 *
 * @param {Uint8Array} destUa - A destination Uint8Array
 * @param {WordArray} cryptowords - A wordArray
 *
 * @return {Uint8Array}
 */
let words2ua = function (destUa, cryptowords) {
    for (let i = 0; i < destUa.length; i += 4) {
        let v = cryptowords.words[i / 4];
        if (v < 0) v += 0x100000000;
        destUa[i] = (v >>> 24);
        destUa[i + 1] = (v >>> 16) & 0xff;
        destUa[i + 2] = (v >>> 8) & 0xff;
        destUa[i + 3] = v & 0xff;
    }
    return destUa;
}

let mergeArray = function (...arrays) {
    let size = arrays.reduce((a, b) => a + b.byteLength, 0)
    // Allcolate a new buffer
    let result = new Uint8Array(size)

    // Build the new array
    let offset = 0
    for (let arr of arrays) {
        result.set(arr, offset)
        offset += arr.byteLength
    }

    return result
}

module.exports = {
    toMobileKey,
    derivePassSha,
    passwordToPrivatekey,
    randomKey,
    decrypt,
    encrypt,
    encodePrivKey,
    _encode,
    encode,
    decode,
    nemencrypt,
    nemdecrypt,
}
