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
import FieldDTO from './FieldDTO';





/**
* The MetadataDTO model module.
* @module model/MetadataDTO
* @version 1.0.13
*/
export default class MetadataDTO {
    /**
    * Constructs a new <code>MetadataDTO</code>.
    * @alias module:model/MetadataDTO
    * @class
    * @param metadataType {Number} 
    * @param fields {Array.<module:model/FieldDTO>} 
    */

    constructor(metadataType, fields) {
        

        
        

        this['metadataType'] = metadataType;this['fields'] = fields;

        
    }

    /**
    * Constructs a <code>MetadataDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MetadataDTO} obj Optional instance to populate.
    * @return {module:model/MetadataDTO} The populated <code>MetadataDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MetadataDTO();

            
            
            

            if (data.hasOwnProperty('metadataType')) {
                obj['metadataType'] = ApiClient.convertToType(data['metadataType'], 'Number');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], [FieldDTO]);
            }
        }
        return obj;
    }

    /**
    * @member {Number} metadataType
    */
    metadataType = undefined;
    /**
    * @member {Array.<module:model/FieldDTO>} fields
    */
    fields = undefined;








}
