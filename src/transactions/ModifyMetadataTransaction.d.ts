// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file

import {VerifiableTransaction} from "./VerifiableTransaction";

export declare class ModifyMetadataTransaction extends VerifiableTransaction {
}

export declare module ModifyMetadataTransaction {
    class Builder {

        addFee(fee): Builder;

        addVersion(version): Builder;

        addType(type): Builder;

        addDeadline(deadline): Builder;

        addMetadataType(metadataType): Builder;

        addMetadataId(metadataId): Builder;

        addModifications(modifications): Builder;

        build(): ModifyMetadataTransaction;

    }
}
