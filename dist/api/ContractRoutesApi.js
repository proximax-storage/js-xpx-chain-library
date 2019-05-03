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

var _Addresses = require('../model/Addresses');

var _Addresses2 = _interopRequireDefault(_Addresses);

var _ContractInfoDTO = require('../model/ContractInfoDTO');

var _ContractInfoDTO2 = _interopRequireDefault(_ContractInfoDTO);

var _PublicKeys = require('../model/PublicKeys');

var _PublicKeys2 = _interopRequireDefault(_PublicKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* ContractRoutes service.
* @module api/ContractRoutesApi
* @version 1.0.13
*/
var ContractRoutesApi = function () {

  /**
  * Constructs a new ContractRoutesApi. 
  * @alias module:api/ContractRoutesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ContractRoutesApi(apiClient) {
    _classCallCheck(this, ContractRoutesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Get contract of account
   * Gets the contract for a given publicKey.
   * @param {String} publicKey The account identifier.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContractInfoDTO} and HTTP response
   */


  _createClass(ContractRoutesApi, [{
    key: 'getAccountContractWithHttpInfo',
    value: function getAccountContractWithHttpInfo(publicKey) {
      var postBody = null;

      // verify the required parameter 'publicKey' is set
      if (publicKey === undefined || publicKey === null) {
        throw new Error("Missing the required parameter 'publicKey' when calling getAccountContract");
      }

      var pathParams = {
        'publicKey': publicKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ContractInfoDTO2.default;

      return this.apiClient.callApi('/account/{publicKey}/contracts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get contract of account
     * Gets the contract for a given publicKey.
     * @param {String} publicKey The account identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContractInfoDTO}
     */

  }, {
    key: 'getAccountContract',
    value: function getAccountContract(publicKey) {
      return this.getAccountContractWithHttpInfo(publicKey).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get contracts for an array of publicKeys
     * Gets an array of contracts.
     * @param {module:model/PublicKeys} publicKeys An array of public keys.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ContractInfoDTO>} and HTTP response
     */

  }, {
    key: 'getAccountContractsWithHttpInfo',
    value: function getAccountContractsWithHttpInfo(publicKeys) {
      var postBody = publicKeys;

      // verify the required parameter 'publicKeys' is set
      if (publicKeys === undefined || publicKeys === null) {
        throw new Error("Missing the required parameter 'publicKeys' when calling getAccountContracts");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ContractInfoDTO2.default];

      return this.apiClient.callApi('/account/contracts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get contracts for an array of publicKeys
     * Gets an array of contracts.
     * @param {module:model/PublicKeys} publicKeys An array of public keys.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ContractInfoDTO>}
     */

  }, {
    key: 'getAccountContracts',
    value: function getAccountContracts(publicKeys) {
      return this.getAccountContractsWithHttpInfo(publicKeys).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get contract of account
     * Gets the contract for a given accountId.
     * @param {String} accountId The account identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContractInfoDTO} and HTTP response
     */

  }, {
    key: 'getContractWithHttpInfo',
    value: function getContractWithHttpInfo(accountId) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getContract");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ContractInfoDTO2.default;

      return this.apiClient.callApi('/contract/{accountId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get contract of account
     * Gets the contract for a given accountId.
     * @param {String} accountId The account identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContractInfoDTO}
     */

  }, {
    key: 'getContract',
    value: function getContract(accountId) {
      return this.getContractWithHttpInfo(accountId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get contracts for an array of publicKeys or addresses
     * Gets an array of contracts.
     * @param {module:model/Addresses} addresses An array of addresses.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ContractInfoDTO>} and HTTP response
     */

  }, {
    key: 'getContractsWithHttpInfo',
    value: function getContractsWithHttpInfo(addresses) {
      var postBody = addresses;

      // verify the required parameter 'addresses' is set
      if (addresses === undefined || addresses === null) {
        throw new Error("Missing the required parameter 'addresses' when calling getContracts");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ContractInfoDTO2.default];

      return this.apiClient.callApi('/contract', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get contracts for an array of publicKeys or addresses
     * Gets an array of contracts.
     * @param {module:model/Addresses} addresses An array of addresses.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ContractInfoDTO>}
     */

  }, {
    key: 'getContracts',
    value: function getContracts(addresses) {
      return this.getContractsWithHttpInfo(addresses).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ContractRoutesApi;
}();

exports.default = ContractRoutesApi;
//# sourceMappingURL=ContractRoutesApi.js.map