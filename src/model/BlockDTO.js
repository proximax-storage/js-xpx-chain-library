/*
 * Copyright 2019 NEM
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
/**
 * Catapult REST API Reference
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.13
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import UInt64DTO from './UInt64DTO';





/**
* The BlockDTO model module.
* @module model/BlockDTO
* @version 1.0.13
*/
export default class BlockDTO {
    /**
    * Constructs a new <code>BlockDTO</code>.
    * @alias module:model/BlockDTO
    * @class
    * @param signature {String} 
    * @param signer {String} 
    * @param version {Number} 
    * @param type {Number} 
    * @param height {module:model/UInt64DTO} 
    * @param timestamp {module:model/UInt64DTO} 
    * @param difficulty {module:model/UInt64DTO} 
    * @param feeMultiplier {Number} 
    * @param previousBlockHash {String} 
    * @param blockTransactionsHash {String} 
    * @param blockReceiptsHash {String} 
    * @param stateHash {String} 
    * @param beneficiaryPublicKey {String} 
    */

    constructor(signature, signer, version, type, height, timestamp, difficulty, feeMultiplier, previousBlockHash, blockTransactionsHash, blockReceiptsHash, stateHash, beneficiaryPublicKey) {
        

        
        

        this['signature'] = signature;this['signer'] = signer;this['version'] = version;this['type'] = type;this['height'] = height;this['timestamp'] = timestamp;this['difficulty'] = difficulty;this['feeMultiplier'] = feeMultiplier;this['previousBlockHash'] = previousBlockHash;this['blockTransactionsHash'] = blockTransactionsHash;this['blockReceiptsHash'] = blockReceiptsHash;this['stateHash'] = stateHash;this['beneficiaryPublicKey'] = beneficiaryPublicKey;

        
    }

    /**
    * Constructs a <code>BlockDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BlockDTO} obj Optional instance to populate.
    * @return {module:model/BlockDTO} The populated <code>BlockDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockDTO();

            
            
            

            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
            if (data.hasOwnProperty('signer')) {
                obj['signer'] = ApiClient.convertToType(data['signer'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = UInt64DTO.constructFromObject(data['height']);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = UInt64DTO.constructFromObject(data['timestamp']);
            }
            if (data.hasOwnProperty('difficulty')) {
                obj['difficulty'] = UInt64DTO.constructFromObject(data['difficulty']);
            }
            if (data.hasOwnProperty('feeMultiplier')) {
                obj['feeMultiplier'] = ApiClient.convertToType(data['feeMultiplier'], 'Number');
            }
            if (data.hasOwnProperty('previousBlockHash')) {
                obj['previousBlockHash'] = ApiClient.convertToType(data['previousBlockHash'], 'String');
            }
            if (data.hasOwnProperty('blockTransactionsHash')) {
                obj['blockTransactionsHash'] = ApiClient.convertToType(data['blockTransactionsHash'], 'String');
            }
            if (data.hasOwnProperty('blockReceiptsHash')) {
                obj['blockReceiptsHash'] = ApiClient.convertToType(data['blockReceiptsHash'], 'String');
            }
            if (data.hasOwnProperty('stateHash')) {
                obj['stateHash'] = ApiClient.convertToType(data['stateHash'], 'String');
            }
            if (data.hasOwnProperty('beneficiaryPublicKey')) {
                obj['beneficiaryPublicKey'] = ApiClient.convertToType(data['beneficiaryPublicKey'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} signature
    */
    signature = undefined;
    /**
    * @member {String} signer
    */
    signer = undefined;
    /**
    * @member {Number} version
    */
    version = undefined;
    /**
    * @member {Number} type
    */
    type = undefined;
    /**
    * @member {module:model/UInt64DTO} height
    */
    height = undefined;
    /**
    * @member {module:model/UInt64DTO} timestamp
    */
    timestamp = undefined;
    /**
    * @member {module:model/UInt64DTO} difficulty
    */
    difficulty = undefined;
    /**
    * @member {Number} feeMultiplier
    */
    feeMultiplier = undefined;
    /**
    * @member {String} previousBlockHash
    */
    previousBlockHash = undefined;
    /**
    * @member {String} blockTransactionsHash
    */
    blockTransactionsHash = undefined;
    /**
    * @member {String} blockReceiptsHash
    */
    blockReceiptsHash = undefined;
    /**
    * @member {String} stateHash
    */
    stateHash = undefined;
    /**
    * @member {String} beneficiaryPublicKey
    */
    beneficiaryPublicKey = undefined;








}
