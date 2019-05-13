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

var _TransactionHashes = require('../model/TransactionHashes');

var _TransactionHashes2 = _interopRequireDefault(_TransactionHashes);

var _TransactionIds = require('../model/TransactionIds');

var _TransactionIds2 = _interopRequireDefault(_TransactionIds);

var _TransactionPayload = require('../model/TransactionPayload');

var _TransactionPayload2 = _interopRequireDefault(_TransactionPayload);

var _TransactionStatusDTO = require('../model/TransactionStatusDTO');

var _TransactionStatusDTO2 = _interopRequireDefault(_TransactionStatusDTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* TransactionRoutes service.
* @module api/TransactionRoutesApi
* @version 1.0.13
*/
var TransactionRoutesApi = function () {

  /**
  * Constructs a new TransactionRoutesApi. 
  * @alias module:api/TransactionRoutesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TransactionRoutesApi(apiClient) {
    _classCallCheck(this, TransactionRoutesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Announce a cosignature transaction
   * Announces a [cosignature transaction](https://nemtech.github.io/concepts/aggregate-transaction.html#cosignature-transaction) to the network.
   * @param {module:model/TransactionPayload} payload The transaction [payload](https://nemtech.github.io/api.html#serialization).
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */


  _createClass(TransactionRoutesApi, [{
    key: 'announceCosignatureTransactionWithHttpInfo',
    value: function announceCosignatureTransactionWithHttpInfo(payload) {
      var postBody = payload;

      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling announceCosignatureTransaction");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi('/transaction/cosignature', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Announce a cosignature transaction
     * Announces a [cosignature transaction](https://nemtech.github.io/concepts/aggregate-transaction.html#cosignature-transaction) to the network.
     * @param {module:model/TransactionPayload} payload The transaction [payload](https://nemtech.github.io/api.html#serialization).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'announceCosignatureTransaction',
    value: function announceCosignatureTransaction(payload) {
      return this.announceCosignatureTransactionWithHttpInfo(payload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Announce an aggregate bonded transaction
     * Announces an [aggregate bonded transaction](https://nemtech.github.io/concepts/aggregate-transaction.html#aggregate-bonded) to the network.
     * @param {module:model/TransactionPayload} payload The transaction [payload](https://nemtech.github.io/api.html#serialization).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: 'announcePartialTransactionWithHttpInfo',
    value: function announcePartialTransactionWithHttpInfo(payload) {
      var postBody = payload;

      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling announcePartialTransaction");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi('/transaction/partial', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Announce an aggregate bonded transaction
     * Announces an [aggregate bonded transaction](https://nemtech.github.io/concepts/aggregate-transaction.html#aggregate-bonded) to the network.
     * @param {module:model/TransactionPayload} payload The transaction [payload](https://nemtech.github.io/api.html#serialization).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'announcePartialTransaction',
    value: function announcePartialTransaction(payload) {
      return this.announcePartialTransactionWithHttpInfo(payload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Announce a new transaction
     * Announces a transaction to the network. It is recommended to use the NEM2-SDK to announce transactions as they should be [serialized](https://nemtech.github.io/api.html#serialization).
     * @param {module:model/TransactionPayload} payload The transaction [payload](https://nemtech.github.io/api.html#serialization).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: 'announceTransactionWithHttpInfo',
    value: function announceTransactionWithHttpInfo(payload) {
      var postBody = payload;

      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling announceTransaction");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi('/transaction', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Announce a new transaction
     * Announces a transaction to the network. It is recommended to use the NEM2-SDK to announce transactions as they should be [serialized](https://nemtech.github.io/api.html#serialization).
     * @param {module:model/TransactionPayload} payload The transaction [payload](https://nemtech.github.io/api.html#serialization).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'announceTransaction',
    value: function announceTransaction(payload) {
      return this.announceTransactionWithHttpInfo(payload).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get transaction information
     * Returns transaction information given a transactionId or hash.
     * @param {String} transactionId The transaction id or hash.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: 'getTransactionWithHttpInfo',
    value: function getTransactionWithHttpInfo(transactionId) {
      var postBody = null;

      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling getTransaction");
      }

      var pathParams = {
        'transactionId': transactionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi('/transaction/{transactionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get transaction information
     * Returns transaction information given a transactionId or hash.
     * @param {String} transactionId The transaction id or hash.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: 'getTransaction',
    value: function getTransaction(transactionId) {
      return this.getTransactionWithHttpInfo(transactionId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get transaction status
     * Returns the transaction status for a given hash.
     * @param {String} hash The transaction hash.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionStatusDTO} and HTTP response
     */

  }, {
    key: 'getTransactionStatusWithHttpInfo',
    value: function getTransactionStatusWithHttpInfo(hash) {
      var postBody = null;

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getTransactionStatus");
      }

      var pathParams = {
        'hash': hash
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TransactionStatusDTO2.default;

      return this.apiClient.callApi('/transaction/{hash}/status', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get transaction status
     * Returns the transaction status for a given hash.
     * @param {String} hash The transaction hash.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionStatusDTO}
     */

  }, {
    key: 'getTransactionStatus',
    value: function getTransactionStatus(hash) {
      return this.getTransactionStatusWithHttpInfo(hash).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get transactions information
     * Returns transactions information for a given array of transactionIds.
     * @param {module:model/TransactionIds} transactionIds An array of transaction ids or hashes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */

  }, {
    key: 'getTransactionsWithHttpInfo',
    value: function getTransactionsWithHttpInfo(transactionIds) {
      var postBody = transactionIds;

      // verify the required parameter 'transactionIds' is set
      if (transactionIds === undefined || transactionIds === null) {
        throw new Error("Missing the required parameter 'transactionIds' when calling getTransactions");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Object];

      return this.apiClient.callApi('/transaction', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get transactions information
     * Returns transactions information for a given array of transactionIds.
     * @param {module:model/TransactionIds} transactionIds An array of transaction ids or hashes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */

  }, {
    key: 'getTransactions',
    value: function getTransactions(transactionIds) {
      return this.getTransactionsWithHttpInfo(transactionIds).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get transactions status.
     * Returns an array of transaction statuses for a given array of transaction hashes.
     * @param {module:model/TransactionHashes} transactionHashes An array of transaction hashes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TransactionStatusDTO>} and HTTP response
     */

  }, {
    key: 'getTransactionsStatusesWithHttpInfo',
    value: function getTransactionsStatusesWithHttpInfo(transactionHashes) {
      var postBody = transactionHashes;

      // verify the required parameter 'transactionHashes' is set
      if (transactionHashes === undefined || transactionHashes === null) {
        throw new Error("Missing the required parameter 'transactionHashes' when calling getTransactionsStatuses");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_TransactionStatusDTO2.default];

      return this.apiClient.callApi('/transaction/statuses', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get transactions status.
     * Returns an array of transaction statuses for a given array of transaction hashes.
     * @param {module:model/TransactionHashes} transactionHashes An array of transaction hashes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TransactionStatusDTO>}
     */

  }, {
    key: 'getTransactionsStatuses',
    value: function getTransactionsStatuses(transactionHashes) {
      return this.getTransactionsStatusesWithHttpInfo(transactionHashes).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TransactionRoutesApi;
}();

exports.default = TransactionRoutesApi;
//# sourceMappingURL=TransactionRoutesApi.js.map