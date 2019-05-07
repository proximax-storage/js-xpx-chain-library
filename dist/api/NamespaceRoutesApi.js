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

var _NamespaceIds = require('../model/NamespaceIds');

var _NamespaceIds2 = _interopRequireDefault(_NamespaceIds);

var _NamespaceInfoDTO = require('../model/NamespaceInfoDTO');

var _NamespaceInfoDTO2 = _interopRequireDefault(_NamespaceInfoDTO);

var _NamespaceNameDTO = require('../model/NamespaceNameDTO');

var _NamespaceNameDTO2 = _interopRequireDefault(_NamespaceNameDTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* NamespaceRoutes service.
* @module api/NamespaceRoutesApi
* @version 1.0.13
*/
var NamespaceRoutesApi = function () {

  /**
  * Constructs a new NamespaceRoutesApi. 
  * @alias module:api/NamespaceRoutesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NamespaceRoutesApi(apiClient) {
    _classCallCheck(this, NamespaceRoutesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Get namespace information
   * Gets the namespace for a given namespaceId.
   * @param {String} namespaceId The namespace identifier.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NamespaceInfoDTO} and HTTP response
   */


  _createClass(NamespaceRoutesApi, [{
    key: 'getNamespaceWithHttpInfo',
    value: function getNamespaceWithHttpInfo(namespaceId) {
      var postBody = null;

      // verify the required parameter 'namespaceId' is set
      if (namespaceId === undefined || namespaceId === null) {
        throw new Error("Missing the required parameter 'namespaceId' when calling getNamespace");
      }

      var pathParams = {
        'namespaceId': namespaceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NamespaceInfoDTO2.default;

      return this.apiClient.callApi('/namespace/{namespaceId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get namespace information
     * Gets the namespace for a given namespaceId.
     * @param {String} namespaceId The namespace identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NamespaceInfoDTO}
     */

  }, {
    key: 'getNamespace',
    value: function getNamespace(namespaceId) {
      return this.getNamespaceWithHttpInfo(namespaceId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get namespaces owned by an account
     * Gets an array of namespaces for a given account address.
     * @param {String} accountId The address or public key of the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of namespaces to return.
     * @param {String} opts.id The namespace id up to which namespace objects are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/NamespaceInfoDTO>} and HTTP response
     */

  }, {
    key: 'getNamespacesFromAccountWithHttpInfo',
    value: function getNamespacesFromAccountWithHttpInfo(accountId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getNamespacesFromAccount");
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'id': opts['id']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_NamespaceInfoDTO2.default];

      return this.apiClient.callApi('/account/{accountId}/namespaces', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get namespaces owned by an account
     * Gets an array of namespaces for a given account address.
     * @param {String} accountId The address or public key of the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of namespaces to return.
     * @param {String} opts.id The namespace id up to which namespace objects are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/NamespaceInfoDTO>}
     */

  }, {
    key: 'getNamespacesFromAccount',
    value: function getNamespacesFromAccount(accountId, opts) {
      return this.getNamespacesFromAccountWithHttpInfo(accountId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get namespaces for given array of addresses
     * Gets namespaces for a given array of addresses.
     * @param {module:model/Addresses} addresses An array of addresses.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of namespaces to return.
     * @param {String} opts.id The namespace id up to which namespace objects are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/NamespaceInfoDTO>} and HTTP response
     */

  }, {
    key: 'getNamespacesFromAccountsWithHttpInfo',
    value: function getNamespacesFromAccountsWithHttpInfo(addresses, opts) {
      opts = opts || {};
      var postBody = addresses;

      // verify the required parameter 'addresses' is set
      if (addresses === undefined || addresses === null) {
        throw new Error("Missing the required parameter 'addresses' when calling getNamespacesFromAccounts");
      }

      var pathParams = {};
      var queryParams = {
        'pageSize': opts['pageSize'],
        'id': opts['id']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_NamespaceInfoDTO2.default];

      return this.apiClient.callApi('/account/namespaces', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get namespaces for given array of addresses
     * Gets namespaces for a given array of addresses.
     * @param {module:model/Addresses} addresses An array of addresses.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of namespaces to return.
     * @param {String} opts.id The namespace id up to which namespace objects are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/NamespaceInfoDTO>}
     */

  }, {
    key: 'getNamespacesFromAccounts',
    value: function getNamespacesFromAccounts(addresses, opts) {
      return this.getNamespacesFromAccountsWithHttpInfo(addresses, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get readable names for a set of namespaces
     * Returns friendly names for mosaics.
     * @param {module:model/NamespaceIds} namespaceIds An array of namespaceIds.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/NamespaceNameDTO>} and HTTP response
     */

  }, {
    key: 'getNamespacesNamesWithHttpInfo',
    value: function getNamespacesNamesWithHttpInfo(namespaceIds) {
      var postBody = namespaceIds;

      // verify the required parameter 'namespaceIds' is set
      if (namespaceIds === undefined || namespaceIds === null) {
        throw new Error("Missing the required parameter 'namespaceIds' when calling getNamespacesNames");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_NamespaceNameDTO2.default];

      return this.apiClient.callApi('/namespace/names', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get readable names for a set of namespaces
     * Returns friendly names for mosaics.
     * @param {module:model/NamespaceIds} namespaceIds An array of namespaceIds.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/NamespaceNameDTO>}
     */

  }, {
    key: 'getNamespacesNames',
    value: function getNamespacesNames(namespaceIds) {
      return this.getNamespacesNamesWithHttpInfo(namespaceIds).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return NamespaceRoutesApi;
}();

exports.default = NamespaceRoutesApi;
//# sourceMappingURL=NamespaceRoutesApi.js.map