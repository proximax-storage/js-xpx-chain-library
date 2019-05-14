'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VerifiableTransaction = require('./VerifiableTransaction');

var _VerifiableTransaction2 = _interopRequireDefault(_VerifiableTransaction);

var _ModifyMetadataTransactionSchema = require('../schema/ModifyMetadataTransactionSchema');

var _ModifyMetadataTransactionSchema2 = _interopRequireDefault(_ModifyMetadataTransactionSchema);

var _ModifyMetadataTransactionBuffer = require('../buffers/ModifyMetadataTransactionBuffer');

var _ModifyMetadataTransactionBuffer2 = _interopRequireDefault(_ModifyMetadataTransactionBuffer);

var _convert = require('../coders/convert');

var _convert2 = _interopRequireDefault(_convert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file

/**
 * @module transactions/ModifyMetadataTransaction
 */


var _ModifyMetadataTransa = _ModifyMetadataTransactionBuffer2.default.Buffers,
    ModifyMetadataTransactionBuffer = _ModifyMetadataTransa.ModifyMetadataTransactionBuffer,
    MetadataModificationBuffer = _ModifyMetadataTransa.MetadataModificationBuffer;

var _require = require('flatbuffers'),
    flatbuffers = _require.flatbuffers;

var address = require('../coders/address').default;

var ModifyMetadataTransaction = function (_VerifiableTransactio) {
	_inherits(ModifyMetadataTransaction, _VerifiableTransactio);

	function ModifyMetadataTransaction() {
		_classCallCheck(this, ModifyMetadataTransaction);

		return _possibleConstructorReturn(this, (ModifyMetadataTransaction.__proto__ || Object.getPrototypeOf(ModifyMetadataTransaction)).apply(this, arguments));
	}

	_createClass(ModifyMetadataTransaction, null, [{
		key: 'Builder',
		get: function get() {
			var Builder = function () {
				function Builder() {
					_classCallCheck(this, Builder);

					this.fee = [0, 0];
					this.version = 1;
				}

				_createClass(Builder, [{
					key: 'addFee',
					value: function addFee(fee) {
						this.fee = fee;
						return this;
					}
				}, {
					key: 'addVersion',
					value: function addVersion(version) {
						this.version = version;
						return this;
					}
				}, {
					key: 'addType',
					value: function addType(type) {
						this.type = type;
						return this;
					}
				}, {
					key: 'addDeadline',
					value: function addDeadline(deadline) {
						this.deadline = deadline;
						return this;
					}
				}, {
					key: 'addMetadataType',
					value: function addMetadataType(metadataType) {
						this.metadataType = metadataType;
						return this;
					}
				}, {
					key: 'addMetadataId',
					value: function addMetadataId(metadataId) {
						this.metadataId = metadataId;
						return this;
					}
				}, {
					key: 'addModifications',
					value: function addModifications(modifications) {
						this.modifications = modifications;
						return this;
					}
				}, {
					key: 'build',
					value: function build() {
						var builder = new flatbuffers.Builder(1);
						// Constants

						// Create modifications
						var modifications = [];
						var modificationsSumSize = 0;
						this.modifications.forEach(function (modification) {
							var modificationKey = modification.key ? _convert2.default.hexToUint8(_convert2.default.utf8ToHex(modification.key)) : [];
							var modificationValue = modification.value ? _convert2.default.hexToUint8(_convert2.default.utf8ToHex(modification.value)) : [];
							// check zero value size here (see go for details)
							var valueSizeOffset = MetadataModificationBuffer.createValueSizeVector(builder, [modificationValue.length & 0xff, modificationValue.length & 0xff00]);
							var keyOffset = MetadataModificationBuffer.createKeyVector(builder, modificationKey);
							var valueOffset = MetadataModificationBuffer.createValueVector(builder, modificationValue);
							var size = 4 + 1 + 1 + 2 + modificationKey.length + modificationValue.length;
							modificationsSumSize = modificationsSumSize + size;
							MetadataModificationBuffer.startMetadataModificationBuffer(builder);
							MetadataModificationBuffer.addSize(builder, size);
							MetadataModificationBuffer.addModificationType(builder, modification.type);
							MetadataModificationBuffer.addKeySize(builder, modificationKey.length);
							MetadataModificationBuffer.addValueSize(builder, valueSizeOffset);
							MetadataModificationBuffer.addKey(builder, keyOffset);
							MetadataModificationBuffer.addValue(builder, valueOffset);
							modifications.push(MetadataModificationBuffer.endMetadataModificationBuffer(builder));
						});

						// Create vectors
						var signatureVector = ModifyMetadataTransactionBuffer.createSignatureVector(builder, Array.apply(undefined, _toConsumableArray(Array(64))).map(Number.prototype.valueOf, 0));
						var signerVector = ModifyMetadataTransactionBuffer.createSignerVector(builder, Array.apply(undefined, _toConsumableArray(Array(32))).map(Number.prototype.valueOf, 0));
						var deadlineVector = ModifyMetadataTransactionBuffer.createDeadlineVector(builder, this.deadline);
						var feeVector = ModifyMetadataTransactionBuffer.createMaxFeeVector(builder, this.fee);
						var modificationsVector = ModifyMetadataTransactionBuffer.createModificationsVector(builder, modifications);
						var metadataIdDecoded = void 0;
						if (this.metadataType === 1) {
							metadataIdDecoded = address.stringToAddress(this.metadataId);
						} else if (this.metadataType === 2 || this.metadataType === 3) {
							metadataIdDecoded = _convert2.default.hexToUint8(this.metadataId);
							metadataIdDecoded.reverse();
						} else {
							throw new Error("Unhandled metadataType during ModifyMetadataTransaction serialization");
						}

						// TODO: different types/lengths
						var metadataIdVector = ModifyMetadataTransactionBuffer.createMetadataIdVector(builder, metadataIdDecoded);
						var size = 120 + 1 + metadataIdDecoded.length + modificationsSumSize;

						ModifyMetadataTransactionBuffer.startModifyMetadataTransactionBuffer(builder);
						ModifyMetadataTransactionBuffer.addSize(builder, size);
						ModifyMetadataTransactionBuffer.addSignature(builder, signatureVector);
						ModifyMetadataTransactionBuffer.addSigner(builder, signerVector);
						ModifyMetadataTransactionBuffer.addVersion(builder, this.version);
						ModifyMetadataTransactionBuffer.addType(builder, this.type);
						ModifyMetadataTransactionBuffer.addMaxFee(builder, feeVector);
						ModifyMetadataTransactionBuffer.addDeadline(builder, deadlineVector);
						ModifyMetadataTransactionBuffer.addMetadataType(builder, this.metadataType);
						ModifyMetadataTransactionBuffer.addMetadataId(builder, metadataIdVector);
						ModifyMetadataTransactionBuffer.addModifications(builder, modificationsVector);

						// Calculate size

						var codedTransfer = ModifyMetadataTransactionBuffer.endModifyMetadataTransactionBuffer(builder);
						builder.finish(codedTransfer);

						var bytes = builder.asUint8Array();
						if (bytes.length !== size) {
							//throw new Error("Declared size differs from actual bytes.length during ModifyMetadataTransaction serialization")
						}
						return new ModifyMetadataTransaction(bytes, _ModifyMetadataTransactionSchema2.default);
					}
				}]);

				return Builder;
			}();

			return Builder;
		}
	}]);

	return ModifyMetadataTransaction;
}(_VerifiableTransaction2.default);

exports.default = ModifyMetadataTransaction;
//# sourceMappingURL=ModifyMetadataTransaction.js.map