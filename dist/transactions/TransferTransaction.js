'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VerifiableTransaction = require('./VerifiableTransaction');

var _VerifiableTransaction2 = _interopRequireDefault(_VerifiableTransaction);

var _TransferTransactionBuffer = require('../buffers/TransferTransactionBuffer');

var TransferTransactionBufferPackage = _interopRequireWildcard(_TransferTransactionBuffer);

var _convert = require('../coders/convert');

var _convert2 = _interopRequireDefault(_convert);

var _TransferTransactionSchema = require('../schema/TransferTransactionSchema');

var _TransferTransactionSchema2 = _interopRequireDefault(_TransferTransactionSchema);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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
 * @module transactions/TransferTransaction
 */


var _require = require('flatbuffers'),
    flatbuffers = _require.flatbuffers;

var address = require('../coders/address').default;

var _TransferTransactionB = TransferTransactionBufferPackage.default.Buffers,
    TransferTransactionBuffer = _TransferTransactionB.TransferTransactionBuffer,
    MessageBuffer = _TransferTransactionB.MessageBuffer,
    MosaicBuffer = _TransferTransactionB.MosaicBuffer;

var TransferTransaction = function (_VerifiableTransactio) {
	_inherits(TransferTransaction, _VerifiableTransactio);

	function TransferTransaction() {
		_classCallCheck(this, TransferTransaction);

		return _possibleConstructorReturn(this, (TransferTransaction.__proto__ || Object.getPrototypeOf(TransferTransaction)).apply(this, arguments));
	}

	_createClass(TransferTransaction, null, [{
		key: 'Builder',
		get: function get() {
			var Builder = function () {
				function Builder() {
					_classCallCheck(this, Builder);

					this.fee = [0, 0];
					this.version = 36867;
					this.type = 0x4154;
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
					key: 'addRecipient',
					value: function addRecipient(recipient) {
						if (/^[0-9a-fA-F]{16}$/.test(recipient)) {
							// received hexadecimal notation of namespaceId (alias)
							this.recipient = address.aliasToRecipient(_convert2.default.hexToUint8(recipient));
						} else {
							// received recipient address
							this.recipient = address.stringToAddress(recipient);
						}
						return this;
					}
				}, {
					key: 'addMessage',
					value: function addMessage(message) {
						this.message = message;
						return this;
					}
				}, {
					key: 'addMosaics',
					value: function addMosaics(mosaics) {
						this.mosaics = mosaics.sort(function (a, b) {
							if (Number(a.id[1]) > b.id[1]) return 1;else if (a.id[1] < b.id[1]) return -1;
							return 0;
						});
						return this;
					}
				}, {
					key: 'build',
					value: function build() {
						var builder = new flatbuffers.Builder(1);
						// Constants

						// Create message
						var bytePayload = _convert2.default.hexToUint8(this.message.hexEncodedPayload || _convert2.default.utf8ToHex(this.message.payload));
						var payload = MessageBuffer.createPayloadVector(builder, bytePayload);
						MessageBuffer.startMessageBuffer(builder);
						MessageBuffer.addType(builder, this.message.type);
						MessageBuffer.addPayload(builder, payload);
						var message = MessageBuffer.endMessageBuffer(builder);

						// Create mosaics
						var mosaics = [];
						this.mosaics.forEach(function (mosaic) {
							var id = MosaicBuffer.createIdVector(builder, mosaic.id);
							var amount = MosaicBuffer.createAmountVector(builder, mosaic.amount);
							MosaicBuffer.startMosaicBuffer(builder);
							MosaicBuffer.addId(builder, id);
							MosaicBuffer.addAmount(builder, amount);
							mosaics.push(MosaicBuffer.endMosaicBuffer(builder));
						});

						// Create vectors
						var signatureVector = TransferTransactionBuffer.createSignatureVector(builder, Array.apply(undefined, _toConsumableArray(Array(64))).map(Number.prototype.valueOf, 0));
						var signerVector = TransferTransactionBuffer.createSignerVector(builder, Array.apply(undefined, _toConsumableArray(Array(32))).map(Number.prototype.valueOf, 0));
						var deadlineVector = TransferTransactionBuffer.createDeadlineVector(builder, this.deadline);
						var feeVector = TransferTransactionBuffer.createFeeVector(builder, this.fee);
						var recipientVector = TransferTransactionBuffer.createRecipientVector(builder, this.recipient);
						var mosaicsVector = TransferTransactionBuffer.createMosaicsVector(builder, mosaics);

						TransferTransactionBuffer.startTransferTransactionBuffer(builder);
						TransferTransactionBuffer.addSize(builder, 149 + 16 * this.mosaics.length + bytePayload.length);
						TransferTransactionBuffer.addSignature(builder, signatureVector);
						TransferTransactionBuffer.addSigner(builder, signerVector);
						TransferTransactionBuffer.addVersion(builder, this.version);
						TransferTransactionBuffer.addType(builder, this.type);
						TransferTransactionBuffer.addFee(builder, feeVector);
						TransferTransactionBuffer.addDeadline(builder, deadlineVector);
						TransferTransactionBuffer.addRecipient(builder, recipientVector);
						TransferTransactionBuffer.addNumMosaics(builder, this.mosaics.length);
						TransferTransactionBuffer.addMessageSize(builder, bytePayload.length + 1);
						TransferTransactionBuffer.addMessage(builder, message);
						TransferTransactionBuffer.addMosaics(builder, mosaicsVector);

						// Calculate size

						var codedTransfer = TransferTransactionBuffer.endTransferTransactionBuffer(builder);
						builder.finish(codedTransfer);

						var bytes = builder.asUint8Array();
						return new TransferTransaction(bytes, _TransferTransactionSchema2.default);
					}
				}]);

				return Builder;
			}();

			return Builder;
		}
	}]);

	return TransferTransaction;
}(_VerifiableTransaction2.default);

exports.default = TransferTransaction;
//# sourceMappingURL=TransferTransaction.js.map