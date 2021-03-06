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
import sha3Hasher from '../crypto/sha3Hasher';

const KeyPair = require('../crypto/keyPair');

/**
 * VerifiableTransaction
 * @module transactions/VerifiableTransaction
 * @version 1.0.0
 */
export default class VerifiableTransaction {
	/**
	 * @constructor
	 * @param {Uint8Array} bytes Uint8Array after flatbuffers.build.asUint8Array()
	 * @param {module:schema/Schema} schema Schema definition corresponding to flatbuffer Schema
	 */
	constructor(bytes, schema) {
		this.bytes = bytes;
		this.schema = schema;
	}

	/**
	 * @param {string} transactionPayload HexString Payload
	 * @returns {*|string} Returns Transaction Payload hash
	 */
	static createTransactionHash(transactionPayload) {
		const byteBuffer = Array.from(convert.hexToUint8(transactionPayload));
		const signingBytes = byteBuffer
			.slice(4, 36)
			.concat(byteBuffer
				.slice(4 + 64, 4 + 64 + 32))
			.concat(byteBuffer
				.splice(4 + 64 + 32, byteBuffer.length));

		const hash = new Uint8Array(32);

		sha3Hasher.func(hash, signingBytes, 32);

		return convert.uint8ToHex(hash);
	}

	/**
	 * @param {KeyPair } keyPair KeyPair instance
	 * @returns {module:model/TransactionPayload} - Signed Transaction Payload
	 */
	signTransaction(keyPair) {
		const byteBuffer = this.serialize();
		const signingBytes = byteBuffer.slice(4 + 64 + 32);
		const keyPairEncoded = KeyPair.createKeyPairFromPrivateKeyString(keyPair.privateKey);
		const signature = Array.from(KeyPair.sign(keyPair, new Uint8Array(signingBytes)));
		const signedTransactionBuffer = byteBuffer
			.splice(0, 4)
			.concat(signature)
			.concat(Array.from(keyPairEncoded.publicKey))
			.concat(byteBuffer
				.splice(64 + 32, byteBuffer.length));
		const payload = convert.uint8ToHex(signedTransactionBuffer);
		return {
			payload,
			hash: VerifiableTransaction.createTransactionHash(payload)
		};
	}

	serialize() {
		return this.schema.serialize(Array.from(this.bytes));
	}

	/**
	 * @returns {string} - Serialized Transaction Payload
	 */
	serializeUnsignedTransaction() {
		return convert.uint8ToHex(this.serialize());
	}

	/**
	 * @param {KeyPair} keyPair KeyPair instance
	 * @returns {module:model/TransactionPayload} Returns TransactionPayload instance
	 */
	signCosignatoriesTransaction(keyPair) {
		const signature = KeyPair.sign(keyPair, new Uint8Array(this.bytes));
		return {
			parentHash: convert.uint8ToHex(this.bytes),
			signature: convert.uint8ToHex(signature),
			signer: keyPair.publicKey
		};
	}

	/**
	 * Converts the transaction into AggregateTransaction compatible
	 * @param {string} [_signer] Signer public key
	 * @returns {Array.<*>} AggregateTransaction bytes
	 */
	toAggregateTransaction(_signer) {
		const signer = convert.hexToUint8(_signer);
		let resultBytes = this.schema.serialize(Array.from(this.bytes));
		resultBytes.splice(0, 4 + 64 + 32);
		resultBytes = Array.from(signer).concat(resultBytes);
		resultBytes.splice(32 + 2 + 2, 16);
		return Array.from((new Uint8Array([
			(resultBytes.length + 4 & 0x000000ff),
			(resultBytes.length + 4 & 0x0000ff00) >> 8,
			(resultBytes.length + 4 & 0x00ff0000) >> 16,
			(resultBytes.length + 4 & 0xff000000) >> 24
		]))).concat(resultBytes);
	}
}
