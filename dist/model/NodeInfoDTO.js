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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The NodeInfoDTO model module.
* @module model/NodeInfoDTO
* @version 1.0.13
*/
var NodeInfoDTO = function () {
    /**
    * Constructs a new <code>NodeInfoDTO</code>.
    * @alias module:model/NodeInfoDTO
    * @class
    * @param publicKey {String} 
    * @param port {Number} 
    * @param networkIdentifier {Number} 
    * @param version {Number} 
    * @param roles {Number} 
    * @param host {String} 
    * @param friendlyName {String} 
    */

    function NodeInfoDTO(publicKey, port, networkIdentifier, version, roles, host, friendlyName) {
        _classCallCheck(this, NodeInfoDTO);

        this.publicKey = undefined;
        this.port = undefined;
        this.networkIdentifier = undefined;
        this.version = undefined;
        this.roles = undefined;
        this.host = undefined;
        this.friendlyName = undefined;


        this['publicKey'] = publicKey;this['port'] = port;this['networkIdentifier'] = networkIdentifier;this['version'] = version;this['roles'] = roles;this['host'] = host;this['friendlyName'] = friendlyName;
    }

    /**
    * Constructs a <code>NodeInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NodeInfoDTO} obj Optional instance to populate.
    * @return {module:model/NodeInfoDTO} The populated <code>NodeInfoDTO</code> instance.
    */


    _createClass(NodeInfoDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new NodeInfoDTO();

                if (data.hasOwnProperty('publicKey')) {
                    obj['publicKey'] = _ApiClient2.default.convertToType(data['publicKey'], 'String');
                }
                if (data.hasOwnProperty('port')) {
                    obj['port'] = _ApiClient2.default.convertToType(data['port'], 'Number');
                }
                if (data.hasOwnProperty('networkIdentifier')) {
                    obj['networkIdentifier'] = _ApiClient2.default.convertToType(data['networkIdentifier'], 'Number');
                }
                if (data.hasOwnProperty('version')) {
                    obj['version'] = _ApiClient2.default.convertToType(data['version'], 'Number');
                }
                if (data.hasOwnProperty('roles')) {
                    obj['roles'] = _ApiClient2.default.convertToType(data['roles'], 'Number');
                }
                if (data.hasOwnProperty('host')) {
                    obj['host'] = _ApiClient2.default.convertToType(data['host'], 'String');
                }
                if (data.hasOwnProperty('friendlyName')) {
                    obj['friendlyName'] = _ApiClient2.default.convertToType(data['friendlyName'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {String} publicKey
        */

        /**
        * @member {Number} port
        */

        /**
        * @member {Number} networkIdentifier
        */

        /**
        * @member {Number} version
        */

        /**
        * @member {Number} roles
        */

        /**
        * @member {String} host
        */

        /**
        * @member {String} friendlyName
        */

    }]);

    return NodeInfoDTO;
}();

exports.default = NodeInfoDTO;
//# sourceMappingURL=NodeInfoDTO.js.map