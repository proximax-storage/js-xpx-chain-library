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

var _MosaicDTO = require('./MosaicDTO');

var _MosaicDTO2 = _interopRequireDefault(_MosaicDTO);

var _UInt64DTO = require('./UInt64DTO');

var _UInt64DTO2 = _interopRequireDefault(_UInt64DTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The AccountDTO model module.
* @module model/AccountDTO
* @version 1.0.13
*/
var AccountDTO = function () {
    /**
    * Constructs a new <code>AccountDTO</code>.
    * @alias module:model/AccountDTO
    * @class
    * @param address {String} 
    * @param addressHeight {module:model/UInt64DTO} 
    * @param publicKey {String} 
    * @param publicKeyHeight {module:model/UInt64DTO} 
    * @param mosaics {Array.<module:model/MosaicDTO>} 
    * @param importance {module:model/UInt64DTO} 
    * @param importanceHeight {module:model/UInt64DTO} 
    */

    function AccountDTO(address, addressHeight, publicKey, publicKeyHeight, mosaics, importance, importanceHeight) {
        _classCallCheck(this, AccountDTO);

        this.address = undefined;
        this.addressHeight = undefined;
        this.publicKey = undefined;
        this.publicKeyHeight = undefined;
        this.mosaics = undefined;
        this.importance = undefined;
        this.importanceHeight = undefined;


        this['address'] = address;this['addressHeight'] = addressHeight;this['publicKey'] = publicKey;this['publicKeyHeight'] = publicKeyHeight;this['mosaics'] = mosaics;this['importance'] = importance;this['importanceHeight'] = importanceHeight;
    }

    /**
    * Constructs a <code>AccountDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AccountDTO} obj Optional instance to populate.
    * @return {module:model/AccountDTO} The populated <code>AccountDTO</code> instance.
    */


    _createClass(AccountDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new AccountDTO();

                if (data.hasOwnProperty('address')) {
                    obj['address'] = _ApiClient2.default.convertToType(data['address'], 'String');
                }
                if (data.hasOwnProperty('addressHeight')) {
                    obj['addressHeight'] = _UInt64DTO2.default.constructFromObject(data['addressHeight']);
                }
                if (data.hasOwnProperty('publicKey')) {
                    obj['publicKey'] = _ApiClient2.default.convertToType(data['publicKey'], 'String');
                }
                if (data.hasOwnProperty('publicKeyHeight')) {
                    obj['publicKeyHeight'] = _UInt64DTO2.default.constructFromObject(data['publicKeyHeight']);
                }
                if (data.hasOwnProperty('mosaics')) {
                    obj['mosaics'] = _ApiClient2.default.convertToType(data['mosaics'], [_MosaicDTO2.default]);
                }
                if (data.hasOwnProperty('importance')) {
                    obj['importance'] = _UInt64DTO2.default.constructFromObject(data['importance']);
                }
                if (data.hasOwnProperty('importanceHeight')) {
                    obj['importanceHeight'] = _UInt64DTO2.default.constructFromObject(data['importanceHeight']);
                }
            }
            return obj;
        }

        /**
        * @member {String} address
        */

        /**
        * @member {module:model/UInt64DTO} addressHeight
        */

        /**
        * @member {String} publicKey
        */

        /**
        * @member {module:model/UInt64DTO} publicKeyHeight
        */

        /**
        * @member {Array.<module:model/MosaicDTO>} mosaics
        */

        /**
        * @member {module:model/UInt64DTO} importance
        */

        /**
        * @member {module:model/UInt64DTO} importanceHeight
        */

    }]);

    return AccountDTO;
}();

exports.default = AccountDTO;
//# sourceMappingURL=AccountDTO.js.map