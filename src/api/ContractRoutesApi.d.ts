// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file

export declare class ContractRoutesApi {
  constructor(apiClient: any);

  getAccountContract(publicKey: string): Promise<any>;

  getAccountContractWithHttpInfo(publicKey: string): Promise<any>;

  getAccountContracts(publicKeys: any): Promise<any>;

  getAccountContractsWithHttpInfo(publicKeys: any): Promise<any>;

  getContract(accountId: any): Promise<any>;

  getContractWithHttpInfo(accountId: any): Promise<any>;

  getContracts(addresses: any): Promise<any>;

  getContractsWithHttpInfo(addresses: any): Promise<any>;

}
