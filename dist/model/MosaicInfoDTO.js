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

var _MosaicDefinitionDTO = require('./MosaicDefinitionDTO');

var _MosaicDefinitionDTO2 = _interopRequireDefault(_MosaicDefinitionDTO);

var _MosaicMetaDTO = require('./MosaicMetaDTO');

var _MosaicMetaDTO2 = _interopRequireDefault(_MosaicMetaDTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The MosaicInfoDTO model module.
* @module model/MosaicInfoDTO
* @version 1.0.13
*/
var MosaicInfoDTO = function () {
    /**
    * Constructs a new <code>MosaicInfoDTO</code>.
    * @alias module:model/MosaicInfoDTO
    * @class
    * @param meta {module:model/MosaicMetaDTO} 
    * @param mosaic {module:model/MosaicDefinitionDTO} 
    */

    function MosaicInfoDTO(meta, mosaic) {
        _classCallCheck(this, MosaicInfoDTO);

        this.meta = undefined;
        this.mosaic = undefined;


        this['meta'] = meta;this['mosaic'] = mosaic;
    }

    /**
    * Constructs a <code>MosaicInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MosaicInfoDTO} obj Optional instance to populate.
    * @return {module:model/MosaicInfoDTO} The populated <code>MosaicInfoDTO</code> instance.
    */


    _createClass(MosaicInfoDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new MosaicInfoDTO();

                if (data.hasOwnProperty('meta')) {
                    obj['meta'] = _MosaicMetaDTO2.default.constructFromObject(data['meta']);
                }
                if (data.hasOwnProperty('mosaic')) {
                    obj['mosaic'] = _MosaicDefinitionDTO2.default.constructFromObject(data['mosaic']);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/MosaicMetaDTO} meta
        */

        /**
        * @member {module:model/MosaicDefinitionDTO} mosaic
        */

    }]);

    return MosaicInfoDTO;
}();

exports.default = MosaicInfoDTO;
//# sourceMappingURL=MosaicInfoDTO.js.map