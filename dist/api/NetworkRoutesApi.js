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

var _NetworkTypeDTO = require('../model/NetworkTypeDTO');

var _NetworkTypeDTO2 = _interopRequireDefault(_NetworkTypeDTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* NetworkRoutes service.
* @module api/NetworkRoutesApi
* @version 1.0.13
*/
var NetworkRoutesApi = function () {

  /**
  * Constructs a new NetworkRoutesApi. 
  * @alias module:api/NetworkRoutesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NetworkRoutesApi(apiClient) {
    _classCallCheck(this, NetworkRoutesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Get the current network type of the chain
   * Returns the current network type.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkTypeDTO} and HTTP response
   */


  _createClass(NetworkRoutesApi, [{
    key: 'getNetworkTypeWithHttpInfo',
    value: function getNetworkTypeWithHttpInfo() {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NetworkTypeDTO2.default;

      return this.apiClient.callApi('/network', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get the current network type of the chain
     * Returns the current network type.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkTypeDTO}
     */

  }, {
    key: 'getNetworkType',
    value: function getNetworkType() {
      return this.getNetworkTypeWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return NetworkRoutesApi;
}();

exports.default = NetworkRoutesApi;
//# sourceMappingURL=NetworkRoutesApi.js.map