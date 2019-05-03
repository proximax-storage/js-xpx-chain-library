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

var _MosaicPropertiesDTO = require('./MosaicPropertiesDTO');

var _MosaicPropertiesDTO2 = _interopRequireDefault(_MosaicPropertiesDTO);

var _UInt64DTO = require('./UInt64DTO');

var _UInt64DTO2 = _interopRequireDefault(_UInt64DTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The MosaicDefinitionDTO model module.
* @module model/MosaicDefinitionDTO
* @version 1.0.13
*/
var MosaicDefinitionDTO = function () {
    /**
    * Constructs a new <code>MosaicDefinitionDTO</code>.
    * @alias module:model/MosaicDefinitionDTO
    * @class
    * @param mosaicId {module:model/UInt64DTO} 
    * @param supply {module:model/UInt64DTO} 
    * @param height {module:model/UInt64DTO} 
    * @param owner {String} 
    * @param revision {Number} 
    * @param properties {module:model/MosaicPropertiesDTO} 
    * @param levy {Object} 
    */

    function MosaicDefinitionDTO(mosaicId, supply, height, owner, revision, properties, levy) {
        _classCallCheck(this, MosaicDefinitionDTO);

        this.mosaicId = undefined;
        this.supply = undefined;
        this.height = undefined;
        this.owner = undefined;
        this.revision = undefined;
        this.properties = undefined;
        this.levy = undefined;


        this['mosaicId'] = mosaicId;this['supply'] = supply;this['height'] = height;this['owner'] = owner;this['revision'] = revision;this['properties'] = properties;this['levy'] = levy;
    }

    /**
    * Constructs a <code>MosaicDefinitionDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MosaicDefinitionDTO} obj Optional instance to populate.
    * @return {module:model/MosaicDefinitionDTO} The populated <code>MosaicDefinitionDTO</code> instance.
    */


    _createClass(MosaicDefinitionDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new MosaicDefinitionDTO();

                if (data.hasOwnProperty('mosaicId')) {
                    obj['mosaicId'] = _UInt64DTO2.default.constructFromObject(data['mosaicId']);
                }
                if (data.hasOwnProperty('supply')) {
                    obj['supply'] = _UInt64DTO2.default.constructFromObject(data['supply']);
                }
                if (data.hasOwnProperty('height')) {
                    obj['height'] = _UInt64DTO2.default.constructFromObject(data['height']);
                }
                if (data.hasOwnProperty('owner')) {
                    obj['owner'] = _ApiClient2.default.convertToType(data['owner'], 'String');
                }
                if (data.hasOwnProperty('revision')) {
                    obj['revision'] = _ApiClient2.default.convertToType(data['revision'], 'Number');
                }
                if (data.hasOwnProperty('properties')) {
                    obj['properties'] = _MosaicPropertiesDTO2.default.constructFromObject(data['properties']);
                }
                if (data.hasOwnProperty('levy')) {
                    obj['levy'] = _ApiClient2.default.convertToType(data['levy'], Object);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/UInt64DTO} mosaicId
        */

        /**
        * @member {module:model/UInt64DTO} supply
        */

        /**
        * @member {module:model/UInt64DTO} height
        */

        /**
        * @member {String} owner
        */

        /**
        * @member {Number} revision
        */

        /**
        * @member {module:model/MosaicPropertiesDTO} properties
        */

        /**
        * @member {Object} levy
        */

    }]);

    return MosaicDefinitionDTO;
}();

exports.default = MosaicDefinitionDTO;
//# sourceMappingURL=MosaicDefinitionDTO.js.map