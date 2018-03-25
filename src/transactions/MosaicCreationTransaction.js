/*
 * Copyright 2018 NEM
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
 * @module transactions/MosaicCreationTransaction
 */
import VerifiableTransaction from './VerifiableTransaction';
import MosaicCreationTransactionSchema from '../schema/MosaicCreationTransactionSchema';
import convert from '../coders/convert';
import MosaicCreationTransactionBufferPackage from '../buffers/MosaicCreationTransactionBuffer';

const { flatbuffers } = require('flatbuffers');

const { MosaicCreationTransactionBuffer } = MosaicCreationTransactionBufferPackage.Buffers;

export default class MosaicCreationTransaction extends VerifiableTransaction {
	static get Builder() {
		class Builder {
			constructor() {
				this.flags = 0;
				this.fee = [0, 0];
				this.version = 36867;
				this.type = 0x414d;
			}

			addFee(fee) {
				this.fee = fee;
				return this;
			}

			addVersion(version) {
				this.version = version;
				return this;
			}

			addType(type) {
				this.type = type;
				return this;
			}

			addDeadline(deadline) {
				this.deadline = deadline;
				return this;
			}

			addDuration(duration) {
				this.duration = duration;
				return this;
			}

			addDivisibility(divisibility) {
				this.divisibility = divisibility;
				return this;
			}

			addSupplyMutable() {
				this.flags += 1;
				return this;
			}

			addTransferability() {
				this.flags += 2;
				return this;
			}

			addLevyMutable() {
				this.flags += 4;
				return this;
			}

			addParentId(parentId) {
				this.parentId = parentId;
				return this;
			}

			addMosaicId(mosaicId) {
				this.mosaicId = mosaicId;
				return this;
			}

			addMosaicName(mosaicName) {
				this.mosaicName = mosaicName;
				return this;
			}

			build() {
				const builder = new flatbuffers.Builder(1);

				const mosaicNameLength = convert.utf8ToHex(this.mosaicName).length / 2;

				// Create vectors
				const signatureVector = MosaicCreationTransactionBuffer
					.createSignatureVector(builder, Array(...Array(64)).map(Number.prototype.valueOf, 0));
				const signerVector = MosaicCreationTransactionBuffer
					.createSignerVector(builder, Array(...Array(32)).map(Number.prototype.valueOf, 0));
				const deadlineVector = MosaicCreationTransactionBuffer
					.createDeadlineVector(builder, this.deadline);
				const feeVector = MosaicCreationTransactionBuffer
					.createFeeVector(builder, this.fee);
				const parentIdVector = MosaicCreationTransactionBuffer
					.createParentIdVector(builder, this.parentId);
				const mosaicIdVector = MosaicCreationTransactionBuffer
					.createMosaicIdVector(builder, this.mosaicId);

				const mosaicName = builder.createString(this.mosaicName);

				const durationVector = MosaicCreationTransactionBuffer
					.createDurationVector(builder, this.duration);

				MosaicCreationTransactionBuffer.startMosaicCreationTransactionBuffer(builder);
				MosaicCreationTransactionBuffer.addSize(builder, 149 + mosaicNameLength);
				MosaicCreationTransactionBuffer.addSignature(builder, signatureVector);
				MosaicCreationTransactionBuffer.addSigner(builder, signerVector);
				MosaicCreationTransactionBuffer.addVersion(builder, this.version);
				MosaicCreationTransactionBuffer.addType(builder, this.type);
				MosaicCreationTransactionBuffer.addFee(builder, feeVector);
				MosaicCreationTransactionBuffer.addDeadline(builder, deadlineVector);
				MosaicCreationTransactionBuffer.addMosaicId(builder, mosaicIdVector);
				MosaicCreationTransactionBuffer.addParentId(builder, parentIdVector);
				MosaicCreationTransactionBuffer.addMosaicNameLength(builder, mosaicNameLength);
				MosaicCreationTransactionBuffer.addNumOptionalProperties(builder, 1);
				MosaicCreationTransactionBuffer.addFlags(builder, this.flags);

				MosaicCreationTransactionBuffer.addDivisibility(builder, this.divisibility);

				MosaicCreationTransactionBuffer.addMosaicName(builder, mosaicName);
				MosaicCreationTransactionBuffer.addIndicateDuration(builder, 2);
				MosaicCreationTransactionBuffer.addDuration(builder, durationVector);


				// Calculate size

				const codedMosaicCreation = MosaicCreationTransactionBuffer.endMosaicCreationTransactionBuffer(builder);
				builder.finish(codedMosaicCreation);

				const bytes = builder.asUint8Array();
				return new MosaicCreationTransaction(bytes, MosaicCreationTransactionSchema);
			}
		}

		return Builder;
	}
}
