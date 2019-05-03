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

var _UInt64DTO = require('./UInt64DTO');

var _UInt64DTO2 = _interopRequireDefault(_UInt64DTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ContractDTO model module.
* @module model/ContractDTO
* @version 1.0.13
*/
var ContractDTO = function () {
    /**
    * Constructs a new <code>ContractDTO</code>.
    * @alias module:model/ContractDTO
    * @class
    * @param multisig {String} 
    * @param multisigAddress {String} 
    * @param start {module:model/UInt64DTO} 
    * @param duration {module:model/UInt64DTO} 
    * @param hash {String} 
    * @param customers {Array.<String>} 
    * @param executors {Array.<String>} 
    * @param verifiers {Array.<String>} 
    */

    function ContractDTO(multisig, multisigAddress, start, duration, hash, customers, executors, verifiers) {
        _classCallCheck(this, ContractDTO);

        this.multisig = undefined;
        this.multisigAddress = undefined;
        this.start = undefined;
        this.duration = undefined;
        this.hash = undefined;
        this.customers = undefined;
        this.executors = undefined;
        this.verifiers = undefined;


        this['multisig'] = multisig;this['multisigAddress'] = multisigAddress;this['start'] = start;this['duration'] = duration;this['hash'] = hash;this['customers'] = customers;this['executors'] = executors;this['verifiers'] = verifiers;
    }

    /**
    * Constructs a <code>ContractDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ContractDTO} obj Optional instance to populate.
    * @return {module:model/ContractDTO} The populated <code>ContractDTO</code> instance.
    */


    _createClass(ContractDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ContractDTO();

                if (data.hasOwnProperty('multisig')) {
                    obj['multisig'] = _ApiClient2.default.convertToType(data['multisig'], 'String');
                }
                if (data.hasOwnProperty('multisigAddress')) {
                    obj['multisigAddress'] = _ApiClient2.default.convertToType(data['multisigAddress'], 'String');
                }
                if (data.hasOwnProperty('start')) {
                    obj['start'] = _UInt64DTO2.default.constructFromObject(data['start']);
                }
                if (data.hasOwnProperty('duration')) {
                    obj['duration'] = _UInt64DTO2.default.constructFromObject(data['duration']);
                }
                if (data.hasOwnProperty('hash')) {
                    obj['hash'] = _ApiClient2.default.convertToType(data['hash'], 'String');
                }
                if (data.hasOwnProperty('customers')) {
                    obj['customers'] = _ApiClient2.default.convertToType(data['customers'], ['String']);
                }
                if (data.hasOwnProperty('executors')) {
                    obj['executors'] = _ApiClient2.default.convertToType(data['executors'], ['String']);
                }
                if (data.hasOwnProperty('verifiers')) {
                    obj['verifiers'] = _ApiClient2.default.convertToType(data['verifiers'], ['String']);
                }
            }
            return obj;
        }

        /**
        * @member {String} multisig
        */

        /**
        * @member {String} multisigAddress
        */

        /**
        * @member {module:model/UInt64DTO} start
        */

        /**
        * @member {module:model/UInt64DTO} duration
        */

        /**
        * @member {String} hash
        */

        /**
        * @member {Array.<String>} customers
        */

        /**
        * @member {Array.<String>} executors
        */

        /**
        * @member {Array.<String>} verifiers
        */

    }]);

    return ContractDTO;
}();

exports.default = ContractDTO;
//# sourceMappingURL=ContractDTO.js.map