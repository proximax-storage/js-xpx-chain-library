'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _FieldDTO = require('./FieldDTO');

var _FieldDTO2 = _interopRequireDefault(_FieldDTO);

var _MetadataDTO = require('./MetadataDTO');

var _MetadataDTO2 = _interopRequireDefault(_MetadataDTO);

var _UInt64DTO = require('./UInt64DTO');

var _UInt64DTO2 = _interopRequireDefault(_UInt64DTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The NamespaceMetadataDTO model module.
* @module model/NamespaceMetadataDTO
* @version 1.0.13
*/
var NamespaceMetadataDTO = function () {
    /**
    * Constructs a new <code>NamespaceMetadataDTO</code>.
    * @alias module:model/NamespaceMetadataDTO
    * @class
    * @implements module:model/MetadataDTO
    * @param metadataType {Number} 
    * @param fields {Array.<module:model/FieldDTO>} 
    * @param metadataId {module:model/UInt64DTO} 
    */

    function NamespaceMetadataDTO(metadataType, fields, metadataId) {
        _classCallCheck(this, NamespaceMetadataDTO);

        this.metadataType = undefined;
        this.metadataId = undefined;
        this.metadataType = undefined;
        this.fields = undefined;


        _MetadataDTO2.default.call(this, metadataType, fields);

        this['metadataId'] = metadataId;
    }

    /**
    * Constructs a <code>NamespaceMetadataDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NamespaceMetadataDTO} obj Optional instance to populate.
    * @return {module:model/NamespaceMetadataDTO} The populated <code>NamespaceMetadataDTO</code> instance.
    */


    _createClass(NamespaceMetadataDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new NamespaceMetadataDTO();

                _MetadataDTO2.default.constructFromObject(data, obj);

                if (data.hasOwnProperty('metadataType')) {
                    obj['metadataType'] = _ApiClient2.default.convertToType(data['metadataType'], 'Number');
                }
                if (data.hasOwnProperty('metadataId')) {
                    obj['metadataId'] = _UInt64DTO2.default.constructFromObject(data['metadataId']);
                }
            }
            return obj;
        }

        /**
        * @member {Number} metadataType
        */

        /**
        * @member {module:model/UInt64DTO} metadataId
        */


        // Implement MetadataDTO interface:
        /**
        * @member {Number} metadataType
        */

        /**
            * @member {Array.<module:model/FieldDTO>} fields
            */

    }]);

    return NamespaceMetadataDTO;
}();

exports.default = NamespaceMetadataDTO;
//# sourceMappingURL=NamespaceMetadataDTO.js.map