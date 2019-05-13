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

var _AddressMetadataInfoDTO = require('../model/AddressMetadataInfoDTO');

var _AddressMetadataInfoDTO2 = _interopRequireDefault(_AddressMetadataInfoDTO);

var _MetadataIds = require('../model/MetadataIds');

var _MetadataIds2 = _interopRequireDefault(_MetadataIds);

var _MosaicMetadataInfoDTO = require('../model/MosaicMetadataInfoDTO');

var _MosaicMetadataInfoDTO2 = _interopRequireDefault(_MosaicMetadataInfoDTO);

var _NamespaceMetadataInfoDTO = require('../model/NamespaceMetadataInfoDTO');

var _NamespaceMetadataInfoDTO2 = _interopRequireDefault(_NamespaceMetadataInfoDTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* MetadataRoutes service.
* @module api/MetadataRoutesApi
* @version 1.0.13
*/
var MetadataRoutesApi = function () {

  /**
  * Constructs a new MetadataRoutesApi. 
  * @alias module:api/MetadataRoutesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MetadataRoutesApi(apiClient) {
    _classCallCheck(this, MetadataRoutesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Get metadata of account
   * Gets the metadata for a given accountId.
   * @param {String} accountId The account identifier.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddressMetadataInfoDTO} and HTTP response
   */


  _createClass(MetadataRoutesApi, [{
    key: 'getAccountMetadataWithHttpInfo',
    value: function getAccountMetadataWithHttpInfo(accountId) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountMetadata");
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
      var returnType = _AddressMetadataInfoDTO2.default;

      return this.apiClient.callApi('/account/{accountId}/metadata', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get metadata of account
     * Gets the metadata for a given accountId.
     * @param {String} accountId The account identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddressMetadataInfoDTO}
     */

  }, {
    key: 'getAccountMetadata',
    value: function getAccountMetadata(accountId) {
      return this.getAccountMetadataWithHttpInfo(accountId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get metadata of namespace/mosaic/account
     * Gets the metadata(AccountMetadataIndo, MosaicMetadataInfo or NamespaceMetadataInfo) for a given metadataId.
     * @param {String} metadataId The metadata identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NamespaceMetadataInfoDTO} and HTTP response
     */

  }, {
    key: 'getMetadataWithHttpInfo',
    value: function getMetadataWithHttpInfo(metadataId) {
      var postBody = null;

      // verify the required parameter 'metadataId' is set
      if (metadataId === undefined || metadataId === null) {
        throw new Error("Missing the required parameter 'metadataId' when calling getMetadata");
      }

      var pathParams = {
        'metadataId': metadataId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NamespaceMetadataInfoDTO2.default;

      return this.apiClient.callApi('/metadata/{metadataId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get metadata of namespace/mosaic/account
     * Gets the metadata(AccountMetadataIndo, MosaicMetadataInfo or NamespaceMetadataInfo) for a given metadataId.
     * @param {String} metadataId The metadata identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NamespaceMetadataInfoDTO}
     */

  }, {
    key: 'getMetadata',
    value: function getMetadata(metadataId) {
      return this.getMetadataWithHttpInfo(metadataId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get metadatas(namespace/mosaic/account) for an array of metadataids
     * Gets an array of metadata.
     * @param {module:model/MetadataIds} metadataIds An array of metadataIds.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AddressMetadataInfoDTO>} and HTTP response
     */

  }, {
    key: 'getMetadatasWithHttpInfo',
    value: function getMetadatasWithHttpInfo(metadataIds) {
      var postBody = metadataIds;

      // verify the required parameter 'metadataIds' is set
      if (metadataIds === undefined || metadataIds === null) {
        throw new Error("Missing the required parameter 'metadataIds' when calling getMetadatas");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_AddressMetadataInfoDTO2.default];

      return this.apiClient.callApi('/metadata', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get metadatas(namespace/mosaic/account) for an array of metadataids
     * Gets an array of metadata.
     * @param {module:model/MetadataIds} metadataIds An array of metadataIds.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AddressMetadataInfoDTO>}
     */

  }, {
    key: 'getMetadatas',
    value: function getMetadatas(metadataIds) {
      return this.getMetadatasWithHttpInfo(metadataIds).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get metadata of mosaic
     * Gets the metadata for a given mosaicId.
     * @param {String} mosaicId The mosaic identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MosaicMetadataInfoDTO} and HTTP response
     */

  }, {
    key: 'getMosaicMetadataWithHttpInfo',
    value: function getMosaicMetadataWithHttpInfo(mosaicId) {
      var postBody = null;

      // verify the required parameter 'mosaicId' is set
      if (mosaicId === undefined || mosaicId === null) {
        throw new Error("Missing the required parameter 'mosaicId' when calling getMosaicMetadata");
      }

      var pathParams = {
        'mosaicId': mosaicId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MosaicMetadataInfoDTO2.default;

      return this.apiClient.callApi('/mosaic/{mosaicId}/metadata', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get metadata of mosaic
     * Gets the metadata for a given mosaicId.
     * @param {String} mosaicId The mosaic identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MosaicMetadataInfoDTO}
     */

  }, {
    key: 'getMosaicMetadata',
    value: function getMosaicMetadata(mosaicId) {
      return this.getMosaicMetadataWithHttpInfo(mosaicId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get metadata of namespace
     * Gets the metadata for a given namespaceId.
     * @param {String} namespaceId The namespace identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NamespaceMetadataInfoDTO} and HTTP response
     */

  }, {
    key: 'getNamespaceMetadataWithHttpInfo',
    value: function getNamespaceMetadataWithHttpInfo(namespaceId) {
      var postBody = null;

      // verify the required parameter 'namespaceId' is set
      if (namespaceId === undefined || namespaceId === null) {
        throw new Error("Missing the required parameter 'namespaceId' when calling getNamespaceMetadata");
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
      var returnType = _NamespaceMetadataInfoDTO2.default;

      return this.apiClient.callApi('/namespace/{namespaceId}/metadata', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get metadata of namespace
     * Gets the metadata for a given namespaceId.
     * @param {String} namespaceId The namespace identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NamespaceMetadataInfoDTO}
     */

  }, {
    key: 'getNamespaceMetadata',
    value: function getNamespaceMetadata(namespaceId) {
      return this.getNamespaceMetadataWithHttpInfo(namespaceId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return MetadataRoutesApi;
}();

exports.default = MetadataRoutesApi;
//# sourceMappingURL=MetadataRoutesApi.js.map