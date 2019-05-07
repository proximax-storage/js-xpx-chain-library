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

var _AccountInfoDTO = require('../model/AccountInfoDTO');

var _AccountInfoDTO2 = _interopRequireDefault(_AccountInfoDTO);

var _AccountPropertiesInfoDTO = require('../model/AccountPropertiesInfoDTO');

var _AccountPropertiesInfoDTO2 = _interopRequireDefault(_AccountPropertiesInfoDTO);

var _Addresses = require('../model/Addresses');

var _Addresses2 = _interopRequireDefault(_Addresses);

var _MultisigAccountGraphInfoDTO = require('../model/MultisigAccountGraphInfoDTO');

var _MultisigAccountGraphInfoDTO2 = _interopRequireDefault(_MultisigAccountGraphInfoDTO);

var _MultisigAccountInfoDTO = require('../model/MultisigAccountInfoDTO');

var _MultisigAccountInfoDTO2 = _interopRequireDefault(_MultisigAccountInfoDTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* AccountRoutes service.
* @module api/AccountRoutesApi
* @version 1.0.13
*/
var AccountRoutesApi = function () {

  /**
  * Constructs a new AccountRoutesApi. 
  * @alias module:api/AccountRoutesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AccountRoutesApi(apiClient) {
    _classCallCheck(this, AccountRoutesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Get account information
   * Returns the account information.
   * @param {String} accountId The public key or address of the account.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountInfoDTO} and HTTP response
   */


  _createClass(AccountRoutesApi, [{
    key: 'getAccountInfoWithHttpInfo',
    value: function getAccountInfoWithHttpInfo(accountId) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountInfo");
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
      var returnType = _AccountInfoDTO2.default;

      return this.apiClient.callApi('/account/{accountId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get account information
     * Returns the account information.
     * @param {String} accountId The public key or address of the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountInfoDTO}
     */

  }, {
    key: 'getAccountInfo',
    value: function getAccountInfo(accountId) {
      return this.getAccountInfoWithHttpInfo(accountId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get multisig account information
     * Returns the [multisig account](https://nemtech.github.io/concepts/multisig-account.html) information.
     * @param {String} accountId The public key or address of the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MultisigAccountInfoDTO} and HTTP response
     */

  }, {
    key: 'getAccountMultisigWithHttpInfo',
    value: function getAccountMultisigWithHttpInfo(accountId) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountMultisig");
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
      var returnType = _MultisigAccountInfoDTO2.default;

      return this.apiClient.callApi('/account/{accountId}/multisig', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get multisig account information
     * Returns the [multisig account](https://nemtech.github.io/concepts/multisig-account.html) information.
     * @param {String} accountId The public key or address of the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MultisigAccountInfoDTO}
     */

  }, {
    key: 'getAccountMultisig',
    value: function getAccountMultisig(accountId) {
      return this.getAccountMultisigWithHttpInfo(accountId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get multisig account graph information
     * Returns the [multisig account](https://nemtech.github.io/concepts/multisig-account.html) graph.
     * @param {String} accountId The public key or address of the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/MultisigAccountGraphInfoDTO>} and HTTP response
     */

  }, {
    key: 'getAccountMultisigGraphWithHttpInfo',
    value: function getAccountMultisigGraphWithHttpInfo(accountId) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountMultisigGraph");
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
      var returnType = [_MultisigAccountGraphInfoDTO2.default];

      return this.apiClient.callApi('/account/{accountId}/multisig/graph', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get multisig account graph information
     * Returns the [multisig account](https://nemtech.github.io/concepts/multisig-account.html) graph.
     * @param {String} accountId The public key or address of the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/MultisigAccountGraphInfoDTO>}
     */

  }, {
    key: 'getAccountMultisigGraph',
    value: function getAccountMultisigGraph(accountId) {
      return this.getAccountMultisigGraphWithHttpInfo(accountId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get account configurable properties information
     * Returns the [configurable properties](https://nemtech.github.io/concepts/account-filter.html) for a given account. 
     * @param {String} accountId The public key or address of the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountPropertiesInfoDTO} and HTTP response
     */

  }, {
    key: 'getAccountPropertiesWithHttpInfo',
    value: function getAccountPropertiesWithHttpInfo(accountId) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAccountProperties");
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
      var returnType = _AccountPropertiesInfoDTO2.default;

      return this.apiClient.callApi('/account/{accountId}/properties', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get account configurable properties information
     * Returns the [configurable properties](https://nemtech.github.io/concepts/account-filter.html) for a given account. 
     * @param {String} accountId The public key or address of the account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountPropertiesInfoDTO}
     */

  }, {
    key: 'getAccountProperties',
    value: function getAccountProperties(accountId) {
      return this.getAccountPropertiesWithHttpInfo(accountId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get account properties for given array of addresses
     * Returns the [configurable properties](https://nemtech.github.io/concepts/account-filter.html) for a given array of addresses. 
     * @param {module:model/Addresses} addresses An array of addresses.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AccountPropertiesInfoDTO>} and HTTP response
     */

  }, {
    key: 'getAccountPropertiesFromAccountsWithHttpInfo',
    value: function getAccountPropertiesFromAccountsWithHttpInfo(addresses) {
      var postBody = addresses;

      // verify the required parameter 'addresses' is set
      if (addresses === undefined || addresses === null) {
        throw new Error("Missing the required parameter 'addresses' when calling getAccountPropertiesFromAccounts");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_AccountPropertiesInfoDTO2.default];

      return this.apiClient.callApi('/account/properties', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get account properties for given array of addresses
     * Returns the [configurable properties](https://nemtech.github.io/concepts/account-filter.html) for a given array of addresses. 
     * @param {module:model/Addresses} addresses An array of addresses.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AccountPropertiesInfoDTO>}
     */

  }, {
    key: 'getAccountPropertiesFromAccounts',
    value: function getAccountPropertiesFromAccounts(addresses) {
      return this.getAccountPropertiesFromAccountsWithHttpInfo({ addresses: addresses }).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get accounts information
     * Returns the account information for an array of accounts.
     * @param {module:model/Addresses} addresses An array of addresses.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AccountInfoDTO>} and HTTP response
     */

  }, {
    key: 'getAccountsInfoWithHttpInfo',
    value: function getAccountsInfoWithHttpInfo(addresses) {
      var postBody = addresses;

      // verify the required parameter 'addresses' is set
      if (addresses === undefined || addresses === null) {
        throw new Error("Missing the required parameter 'addresses' when calling getAccountsInfo");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_AccountInfoDTO2.default];

      return this.apiClient.callApi('/account', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get accounts information
     * Returns the account information for an array of accounts.
     * @param {module:model/Addresses} addresses An array of addresses.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AccountInfoDTO>}
     */

  }, {
    key: 'getAccountsInfo',
    value: function getAccountsInfo(addresses) {
      return this.getAccountsInfoWithHttpInfo(addresses).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get incoming transactions
     * Gets an array of incoming transactions. A transaction is said to be incoming with respect to an account if the account is the recipient of the transaction. 
     * @param {String} publicKey The public key of the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of transactions to return for each request. (default to 10)
     * @param {String} opts.id The transaction id up to which transactions are returned. 
     * @param {String} opts.ordering The ordering criteria. * -id: Descending order by id. * id: Ascending order by id.  (default to -id)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */

  }, {
    key: 'incomingTransactionsWithHttpInfo',
    value: function incomingTransactionsWithHttpInfo(publicKey, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'publicKey' is set
      if (publicKey === undefined || publicKey === null) {
        throw new Error("Missing the required parameter 'publicKey' when calling incomingTransactions");
      }

      var pathParams = {
        'publicKey': publicKey
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'id': opts['id'],
        'ordering': opts['ordering']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Object];

      return this.apiClient.callApi('/account/{publicKey}/transactions/incoming', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get incoming transactions
     * Gets an array of incoming transactions. A transaction is said to be incoming with respect to an account if the account is the recipient of the transaction. 
     * @param {String} publicKey The public key of the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of transactions to return for each request. (default to 10)
     * @param {String} opts.id The transaction id up to which transactions are returned. 
     * @param {String} opts.ordering The ordering criteria. * -id: Descending order by id. * id: Ascending order by id.  (default to -id)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */

  }, {
    key: 'incomingTransactions',
    value: function incomingTransactions(publicKey, opts) {
      return this.incomingTransactionsWithHttpInfo(publicKey, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get outgoing transactions
     * Gets an array of outgoing transactions. A transaction is said to be outgoing with respect to an account if the account is the sender of the transaction.
     * @param {String} publicKey The public key of the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of transactions to return for each request. (default to 10)
     * @param {String} opts.id The transaction id up to which transactions are returned. 
     * @param {String} opts.ordering The ordering criteria. * -id: Descending order by id. * id: Ascending order by id.  (default to -id)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */

  }, {
    key: 'outgoingTransactionsWithHttpInfo',
    value: function outgoingTransactionsWithHttpInfo(publicKey, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'publicKey' is set
      if (publicKey === undefined || publicKey === null) {
        throw new Error("Missing the required parameter 'publicKey' when calling outgoingTransactions");
      }

      var pathParams = {
        'publicKey': publicKey
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'id': opts['id'],
        'ordering': opts['ordering']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Object];

      return this.apiClient.callApi('/account/{publicKey}/transactions/outgoing', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get outgoing transactions
     * Gets an array of outgoing transactions. A transaction is said to be outgoing with respect to an account if the account is the sender of the transaction.
     * @param {String} publicKey The public key of the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of transactions to return for each request. (default to 10)
     * @param {String} opts.id The transaction id up to which transactions are returned. 
     * @param {String} opts.ordering The ordering criteria. * -id: Descending order by id. * id: Ascending order by id.  (default to -id)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */

  }, {
    key: 'outgoingTransactions',
    value: function outgoingTransactions(publicKey, opts) {
      return this.outgoingTransactionsWithHttpInfo(publicKey, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get aggregate bonded transactions information
     * Gets an array of [aggregate bonded transactions](https://nemtech.github.io/concepts/aggregate-transaction.html) where the account is the sender or requires to cosign the transaction. 
     * @param {String} publicKey The public key of the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of transactions to return for each request. (default to 10)
     * @param {String} opts.id The transaction id up to which transactions are returned. 
     * @param {String} opts.ordering The ordering criteria. * -id: Descending order by id. * id: Ascending order by id.  (default to -id)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */

  }, {
    key: 'partialTransactionsWithHttpInfo',
    value: function partialTransactionsWithHttpInfo(publicKey, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'publicKey' is set
      if (publicKey === undefined || publicKey === null) {
        throw new Error("Missing the required parameter 'publicKey' when calling partialTransactions");
      }

      var pathParams = {
        'publicKey': publicKey
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'id': opts['id'],
        'ordering': opts['ordering']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Object];

      return this.apiClient.callApi('/account/{publicKey}/transactions/partial', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get aggregate bonded transactions information
     * Gets an array of [aggregate bonded transactions](https://nemtech.github.io/concepts/aggregate-transaction.html) where the account is the sender or requires to cosign the transaction. 
     * @param {String} publicKey The public key of the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of transactions to return for each request. (default to 10)
     * @param {String} opts.id The transaction id up to which transactions are returned. 
     * @param {String} opts.ordering The ordering criteria. * -id: Descending order by id. * id: Ascending order by id.  (default to -id)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */

  }, {
    key: 'partialTransactions',
    value: function partialTransactions(publicKey, opts) {
      return this.partialTransactionsWithHttpInfo(publicKey, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get confirmed transactions
     * Gets an array of transactions for which an account is the sender or receiver.
     * @param {String} publicKey The public key of the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of transactions to return for each request. (default to 10)
     * @param {String} opts.id The transaction id up to which transactions are returned. 
     * @param {String} opts.ordering The ordering criteria. * -id: Descending order by id. * id: Ascending order by id.  (default to -id)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */

  }, {
    key: 'transactionsWithHttpInfo',
    value: function transactionsWithHttpInfo(publicKey, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'publicKey' is set
      if (publicKey === undefined || publicKey === null) {
        throw new Error("Missing the required parameter 'publicKey' when calling transactions");
      }

      var pathParams = {
        'publicKey': publicKey
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'id': opts['id'],
        'ordering': opts['ordering']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Object];

      return this.apiClient.callApi('/account/{publicKey}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get confirmed transactions
     * Gets an array of transactions for which an account is the sender or receiver.
     * @param {String} publicKey The public key of the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of transactions to return for each request. (default to 10)
     * @param {String} opts.id The transaction id up to which transactions are returned. 
     * @param {String} opts.ordering The ordering criteria. * -id: Descending order by id. * id: Ascending order by id.  (default to -id)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */

  }, {
    key: 'transactions',
    value: function transactions(publicKey, opts) {
      return this.transactionsWithHttpInfo(publicKey, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get unconfirmed transactions
     * Gets the array of transactions not included in a block where an account is the sender or receiver. 
     * @param {String} publicKey The public key of the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of transactions to return for each request. (default to 10)
     * @param {String} opts.id The transaction id up to which transactions are returned. 
     * @param {String} opts.ordering The ordering criteria. * -id: Descending order by id. * id: Ascending order by id.  (default to -id)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */

  }, {
    key: 'unconfirmedTransactionsWithHttpInfo',
    value: function unconfirmedTransactionsWithHttpInfo(publicKey, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'publicKey' is set
      if (publicKey === undefined || publicKey === null) {
        throw new Error("Missing the required parameter 'publicKey' when calling unconfirmedTransactions");
      }

      var pathParams = {
        'publicKey': publicKey
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'id': opts['id'],
        'ordering': opts['ordering']
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Object];

      return this.apiClient.callApi('/account/{publicKey}/transactions/unconfirmed', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get unconfirmed transactions
     * Gets the array of transactions not included in a block where an account is the sender or receiver. 
     * @param {String} publicKey The public key of the account.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of transactions to return for each request. (default to 10)
     * @param {String} opts.id The transaction id up to which transactions are returned. 
     * @param {String} opts.ordering The ordering criteria. * -id: Descending order by id. * id: Ascending order by id.  (default to -id)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */

  }, {
    key: 'unconfirmedTransactions',
    value: function unconfirmedTransactions(publicKey, opts) {
      return this.unconfirmedTransactionsWithHttpInfo(publicKey, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AccountRoutesApi;
}();

exports.default = AccountRoutesApi;
//# sourceMappingURL=AccountRoutesApi.js.map