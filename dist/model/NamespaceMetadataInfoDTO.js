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

var _NamespaceMetadataDTO = require('./NamespaceMetadataDTO');

var _NamespaceMetadataDTO2 = _interopRequireDefault(_NamespaceMetadataDTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The NamespaceMetadataInfoDTO model module.
* @module model/NamespaceMetadataInfoDTO
* @version 1.0.13
*/
var NamespaceMetadataInfoDTO = function () {
    /**
    * Constructs a new <code>NamespaceMetadataInfoDTO</code>.
    * @alias module:model/NamespaceMetadataInfoDTO
    * @class
    * @param metadata {module:model/NamespaceMetadataDTO} 
    */

    function NamespaceMetadataInfoDTO(metadata) {
        _classCallCheck(this, NamespaceMetadataInfoDTO);

        this.metadata = undefined;


        this['metadata'] = metadata;
    }

    /**
    * Constructs a <code>NamespaceMetadataInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NamespaceMetadataInfoDTO} obj Optional instance to populate.
    * @return {module:model/NamespaceMetadataInfoDTO} The populated <code>NamespaceMetadataInfoDTO</code> instance.
    */


    _createClass(NamespaceMetadataInfoDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new NamespaceMetadataInfoDTO();

                if (data.hasOwnProperty('metadata')) {
                    obj['metadata'] = _NamespaceMetadataDTO2.default.constructFromObject(data['metadata']);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/NamespaceMetadataDTO} metadata
        */

    }]);

    return NamespaceMetadataInfoDTO;
}();

exports.default = NamespaceMetadataInfoDTO;
//# sourceMappingURL=NamespaceMetadataInfoDTO.js.map