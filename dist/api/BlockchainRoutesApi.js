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

var _BlockInfoDTO = require('../model/BlockInfoDTO');

var _BlockInfoDTO2 = _interopRequireDefault(_BlockInfoDTO);

var _BlockchainScoreDTO = require('../model/BlockchainScoreDTO');

var _BlockchainScoreDTO2 = _interopRequireDefault(_BlockchainScoreDTO);

var _BlockchainStorageInfoDTO = require('../model/BlockchainStorageInfoDTO');

var _BlockchainStorageInfoDTO2 = _interopRequireDefault(_BlockchainStorageInfoDTO);

var _HeightDTO = require('../model/HeightDTO');

var _HeightDTO2 = _interopRequireDefault(_HeightDTO);

var _MerkleProofInfoDTO = require('../model/MerkleProofInfoDTO');

var _MerkleProofInfoDTO2 = _interopRequireDefault(_MerkleProofInfoDTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* BlockchainRoutes service.
* @module api/BlockchainRoutesApi
* @version 1.0.13
*/
var BlockchainRoutesApi = function () {

  /**
  * Constructs a new BlockchainRoutesApi. 
  * @alias module:api/BlockchainRoutesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BlockchainRoutesApi(apiClient) {
    _classCallCheck(this, BlockchainRoutesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Get block information
   * Gets a block from the chain that has the given height.
   * @param {Number} height The height of the block.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlockInfoDTO} and HTTP response
   */


  _createClass(BlockchainRoutesApi, [{
    key: 'getBlockByHeightWithHttpInfo',
    value: function getBlockByHeightWithHttpInfo(height) {
      var postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlockByHeight");
      }

      var pathParams = {
        'height': height
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BlockInfoDTO2.default;

      return this.apiClient.callApi('/block/{height}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get block information
     * Gets a block from the chain that has the given height.
     * @param {Number} height The height of the block.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlockInfoDTO}
     */

  }, {
    key: 'getBlockByHeight',
    value: function getBlockByHeight(height) {
      return this.getBlockByHeightWithHttpInfo(height).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get receipts from a block
     * Returns the [receipts](https://nemtech.github.io/concepts/receipt.html) linked to a block.
     * @param {Number} height The height of the block.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */

  }, {
    key: 'getBlockReceiptsWithHttpInfo',
    value: function getBlockReceiptsWithHttpInfo(height) {
      var postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlockReceipts");
      }

      var pathParams = {
        'height': height
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Object];

      return this.apiClient.callApi('/block/{height}/receipts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get receipts from a block
     * Returns the [receipts](https://nemtech.github.io/concepts/receipt.html) linked to a block.
     * @param {Number} height The height of the block.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */

  }, {
    key: 'getBlockReceipts',
    value: function getBlockReceipts(height) {
      return this.getBlockReceiptsWithHttpInfo(height).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get transactions from a block
     * Returns an array of [transactions](https://nemtech.github.io/concepts/transaction.html) included in a block for a given block height.
     * @param {Number} height The height of the block.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of transactions to return for each request. (default to 10)
     * @param {String} opts.id The transaction id up to which transactions are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */

  }, {
    key: 'getBlockTransactionsWithHttpInfo',
    value: function getBlockTransactionsWithHttpInfo(height, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlockTransactions");
      }

      var pathParams = {
        'height': height
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
      var returnType = [Object];

      return this.apiClient.callApi('/block/{height}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get transactions from a block
     * Returns an array of [transactions](https://nemtech.github.io/concepts/transaction.html) included in a block for a given block height.
     * @param {Number} height The height of the block.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of transactions to return for each request. (default to 10)
     * @param {String} opts.id The transaction id up to which transactions are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */

  }, {
    key: 'getBlockTransactions',
    value: function getBlockTransactions(height, opts) {
      return this.getBlockTransactionsWithHttpInfo(height, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get the current height of the chain
     * Returns the current height of the blockchain.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HeightDTO} and HTTP response
     */

  }, {
    key: 'getBlockchainHeightWithHttpInfo',
    value: function getBlockchainHeightWithHttpInfo() {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _HeightDTO2.default;

      return this.apiClient.callApi('/chain/height', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get the current height of the chain
     * Returns the current height of the blockchain.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HeightDTO}
     */

  }, {
    key: 'getBlockchainHeight',
    value: function getBlockchainHeight() {
      return this.getBlockchainHeightWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get the current score of the chain
     * Gets the current score of the blockchain. The higher the score, the better the chain. During synchronization, nodes try to get the best blockchain in the network.  The score for a block is derived from its difficulty and the time (in seconds) that has elapsed since the last block:      block score &#x3D; difficulty − time elasped since last block 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlockchainScoreDTO} and HTTP response
     */

  }, {
    key: 'getBlockchainScoreWithHttpInfo',
    value: function getBlockchainScoreWithHttpInfo() {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BlockchainScoreDTO2.default;

      return this.apiClient.callApi('/chain/score', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get the current score of the chain
     * Gets the current score of the blockchain. The higher the score, the better the chain. During synchronization, nodes try to get the best blockchain in the network.  The score for a block is derived from its difficulty and the time (in seconds) that has elapsed since the last block:      block score &#x3D; difficulty − time elasped since last block 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlockchainScoreDTO}
     */

  }, {
    key: 'getBlockchainScore',
    value: function getBlockchainScore() {
      return this.getBlockchainScoreWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get blocks information
     * Gets up to limit number of blocks after given block height.
     * @param {Number} height The height of the block. If height -1 is not a multiple of the limit provided, the inferior closest multiple + 1 is used instead.
     * @param {Number} limit The number of blocks to be returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BlockInfoDTO>} and HTTP response
     */

  }, {
    key: 'getBlocksByHeightWithLimitWithHttpInfo',
    value: function getBlocksByHeightWithLimitWithHttpInfo(height, limit) {
      var postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlocksByHeightWithLimit");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getBlocksByHeightWithLimit");
      }

      var pathParams = {
        'height': height,
        'limit': limit
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_BlockInfoDTO2.default];

      return this.apiClient.callApi('/blocks/{height}/limit/{limit}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get blocks information
     * Gets up to limit number of blocks after given block height.
     * @param {Number} height The height of the block. If height -1 is not a multiple of the limit provided, the inferior closest multiple + 1 is used instead.
     * @param {Number} limit The number of blocks to be returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BlockInfoDTO>}
     */

  }, {
    key: 'getBlocksByHeightWithLimit',
    value: function getBlocksByHeightWithLimit(height, limit) {
      return this.getBlocksByHeightWithLimitWithHttpInfo(height, limit).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get the storage information
     * Returns statistical information about the blockchain.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlockchainStorageInfoDTO} and HTTP response
     */

  }, {
    key: 'getDiagnosticStorageWithHttpInfo',
    value: function getDiagnosticStorageWithHttpInfo() {
      var postBody = null;

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BlockchainStorageInfoDTO2.default;

      return this.apiClient.callApi('/diagnostic/storage', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get the storage information
     * Returns statistical information about the blockchain.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlockchainStorageInfoDTO}
     */

  }, {
    key: 'getDiagnosticStorage',
    value: function getDiagnosticStorage() {
      return this.getDiagnosticStorageWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get the merkle path for a given a receipt statement hash and block
     * Returns the merkle path for a [receipt statement or resolution](https://nemtech.github.io/concepts/receipt.html) linked to a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the receipt was linked with the block.
     * @param {Number} height The height of the block.
     * @param {String} hash The hash of the receipt statement or resolution.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MerkleProofInfoDTO} and HTTP response
     */

  }, {
    key: 'getMerkleReceiptsWithHttpInfo',
    value: function getMerkleReceiptsWithHttpInfo(height, hash) {
      var postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getMerkleReceipts");
      }

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getMerkleReceipts");
      }

      var pathParams = {
        'height': height,
        'hash': hash
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MerkleProofInfoDTO2.default;

      return this.apiClient.callApi('/block/{height}/receipt/{hash}/merkle', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get the merkle path for a given a receipt statement hash and block
     * Returns the merkle path for a [receipt statement or resolution](https://nemtech.github.io/concepts/receipt.html) linked to a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the receipt was linked with the block.
     * @param {Number} height The height of the block.
     * @param {String} hash The hash of the receipt statement or resolution.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MerkleProofInfoDTO}
     */

  }, {
    key: 'getMerkleReceipts',
    value: function getMerkleReceipts(height, hash) {
      return this.getMerkleReceiptsWithHttpInfo(height, hash).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get the merkle path for a given a transaction and block
     * Returns the merkle path for a [transaction](https://nemtech.github.io/concepts/transaction.html) included in a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the transaction was included in the block.
     * @param {Number} height The height of the block.
     * @param {String} hash The hash of the transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MerkleProofInfoDTO} and HTTP response
     */

  }, {
    key: 'getMerkleTransactionWithHttpInfo',
    value: function getMerkleTransactionWithHttpInfo(height, hash) {
      var postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getMerkleTransaction");
      }

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getMerkleTransaction");
      }

      var pathParams = {
        'height': height,
        'hash': hash
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MerkleProofInfoDTO2.default;

      return this.apiClient.callApi('/block/{height}/transaction/{hash}/merkle', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get the merkle path for a given a transaction and block
     * Returns the merkle path for a [transaction](https://nemtech.github.io/concepts/transaction.html) included in a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the transaction was included in the block.
     * @param {Number} height The height of the block.
     * @param {String} hash The hash of the transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MerkleProofInfoDTO}
     */

  }, {
    key: 'getMerkleTransaction',
    value: function getMerkleTransaction(height, hash) {
      return this.getMerkleTransactionWithHttpInfo(height, hash).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return BlockchainRoutesApi;
}();

exports.default = BlockchainRoutesApi;
//# sourceMappingURL=BlockchainRoutesApi.js.map