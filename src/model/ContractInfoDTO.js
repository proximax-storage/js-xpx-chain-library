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
import ContractDTO from './ContractDTO';





/**
* The ContractInfoDTO model module.
* @module model/ContractInfoDTO
* @version 1.0.13
*/
export default class ContractInfoDTO {
    /**
    * Constructs a new <code>ContractInfoDTO</code>.
    * @alias module:model/ContractInfoDTO
    * @class
    * @param contract {module:model/ContractDTO} 
    */

    constructor(contract) {
        

        
        

        this['contract'] = contract;

        
    }

    /**
    * Constructs a <code>ContractInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContractInfoDTO} obj Optional instance to populate.
    * @return {module:model/ContractInfoDTO} The populated <code>ContractInfoDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContractInfoDTO();

            
            
            

            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ContractDTO.constructFromObject(data['contract']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ContractDTO} contract
    */
    contract = undefined;








}