// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file

import AddressMetadataDTO from "../model/AddressMetadataDTO";
import MosaicMetadataDTO from "../model/MosaicMetadataDTO";
import NamespaceMetadataDTO from "../model/NamespaceMetadataDTO";
import MetadataDTO from "../model/MetadataDTO";
import AddressMetadataInfoDTO from "../model/AddressMetadataInfoDTO";
import MosaicMetadataInfoDTO from "../model/MosaicMetadataInfoDTO";
import NamespaceMetadataInfoDTO from "../model/NamespaceMetadataInfoDTO";

export declare class MetadataRoutesApi {
  constructor(apiClient: any);

  getAccountMetadata(accountId: any): Promise<AddressMetadataDTO>;

  getAccountMetadataWithHttpInfo(accountId: any): Promise<AddressMetadataInfoDTO>;

  getMetadata(metadataId: any): Promise<MetadataDTO>;

  getMetadataWithHttpInfo(metadataId: any): Promise<MetadataDTO>;

  getMetadatas(metadataIds: any): Promise<MetadataDTO[]>;

  getMetadatasWithHttpInfo(metadataIds: any): Promise<MetadataDTO[]>;

  getMosaicMetadata(mosaicId: any): Promise<MosaicMetadataDTO>;

  getMosaicMetadataWithHttpInfo(mosaicId: any): Promise<MosaicMetadataInfoDTO>;

  getNamespaceMetadata(namespaceId: any): Promise<NamespaceMetadataDTO>;

  getNamespaceMetadataWithHttpInfo(namespaceId: any): Promise<NamespaceMetadataInfoDTO>;

}
