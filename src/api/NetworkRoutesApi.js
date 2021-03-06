/*
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


import ApiClient from "../ApiClient";
import NetworkTypeDTO from '../model/NetworkTypeDTO';

/**
* NetworkRoutes service.
* @module api/NetworkRoutesApi
* @version 1.0.13
*/
export default class NetworkRoutesApi {

    /**
    * Constructs a new NetworkRoutesApi. 
    * @alias module:api/NetworkRoutesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get the current network type of the chain
     * Returns the current network type.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NetworkTypeDTO} and HTTP response
     */
    getNetworkTypeWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NetworkTypeDTO;

      return this.apiClient.callApi(
        '/network', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the current network type of the chain
     * Returns the current network type.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NetworkTypeDTO}
     */
    getNetworkType() {
      return this.getNetworkTypeWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
