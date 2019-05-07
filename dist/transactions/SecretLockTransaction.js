'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VerifiableTransaction = require('./VerifiableTransaction');

var _VerifiableTransaction2 = _interopRequireDefault(_VerifiableTransaction);

var _SecretLockTransactionBuffer = require('../buffers/SecretLockTransactionBuffer');

var SecretLockTransactionBufferPackage = _interopRequireWildcard(_SecretLockTransactionBuffer);

var _SecretLockTransactionSchema = require('../schema/SecretLockTransactionSchema');

var _SecretLockTransactionSchema2 = _interopRequireDefault(_SecretLockTransactionSchema);

var _address = require('../coders/address');

var _address2 = _interopRequireDefault(_address);

var _convert = require('../coders/convert');

var _convert2 = _interopRequireDefault(_convert);

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
 * @module transactions/SecretLockTransaction
 */


var _require = require('flatbuffers'),
    flatbuffers = _require.flatbuffers;

var SecretLockTransactionBuffer = SecretLockTransactionBufferPackage.default.Buffers.SecretLockTransactionBuffer;

var SecretLockTransaction = function (_VerifiableTransactio) {
	_inherits(SecretLockTransaction, _VerifiableTransactio);

	function SecretLockTransaction() {
		_classCallCheck(this, SecretLockTransaction);

		return _possibleConstructorReturn(this, (SecretLockTransaction.__proto__ || Object.getPrototypeOf(SecretLockTransaction)).apply(this, arguments));
	}

	_createClass(SecretLockTransaction, null, [{
		key: 'Builder',
		get: function get() {
			var Builder = function () {
				function Builder() {
					_classCallCheck(this, Builder);

					this.fee = [0, 0];
					this.version = 36865;
					this.type = 0x424C;
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
					key: 'addMosaicId',
					value: function addMosaicId(mosaicId) {
						this.mosaicId = mosaicId;
						return this;
					}
				}, {
					key: 'addMosaicAmount',
					value: function addMosaicAmount(mosaicAmount) {
						this.mosaicAmount = mosaicAmount;
						return this;
					}
				}, {
					key: 'addDuration',
					value: function addDuration(duration) {
						this.duration = duration;
						return this;
					}
				}, {
					key: 'addHashAlgorithm',
					value: function addHashAlgorithm(hashAlgorithm) {
						this.hashAlgorithm = hashAlgorithm;
						return this;
					}
				}, {
					key: 'addSecret',
					value: function addSecret(secret) {
						this.secret = secret;
						return this;
					}
				}, {
					key: 'addRecipient',
					value: function addRecipient(recipient) {
						this.recipient = _address2.default.stringToAddress(recipient);
						return this;
					}
				}, {
					key: 'build',
					value: function build() {
						var builder = new flatbuffers.Builder(1);

						// Create vectors
						var signatureVector = SecretLockTransactionBuffer.createSignatureVector(builder, Array.apply(undefined, _toConsumableArray(Array(64))).map(Number.prototype.valueOf, 0));
						var signerVector = SecretLockTransactionBuffer.createSignerVector(builder, Array.apply(undefined, _toConsumableArray(Array(32))).map(Number.prototype.valueOf, 0));
						var deadlineVector = SecretLockTransactionBuffer.createDeadlineVector(builder, this.deadline);
						var feeVector = SecretLockTransactionBuffer.createFeeVector(builder, this.fee);
						var mosaicIdVector = SecretLockTransactionBuffer.createMosaicIdVector(builder, this.mosaicId);
						var mosaicAmountVector = SecretLockTransactionBuffer.createMosaicAmountVector(builder, this.mosaicAmount);
						var durationVector = SecretLockTransactionBuffer.createDurationVector(builder, this.duration);
						var byteSecret = _convert2.default.hexToUint8(this.secret.length < 64 ? this.secret + '0'.repeat(64 - this.secret.length) : this.secret.substring(0, 64)); // pad to 64 hex chars
						var secretVector = SecretLockTransactionBuffer.createSecretVector(builder, byteSecret);
						var recipientVector = SecretLockTransactionBuffer.createRecipientVector(builder, this.recipient);

						SecretLockTransactionBuffer.startSecretLockTransactionBuffer(builder);
						SecretLockTransactionBuffer.addSize(builder, 202);
						SecretLockTransactionBuffer.addSignature(builder, signatureVector);
						SecretLockTransactionBuffer.addSigner(builder, signerVector);
						SecretLockTransactionBuffer.addVersion(builder, this.version);
						SecretLockTransactionBuffer.addType(builder, this.type);
						SecretLockTransactionBuffer.addFee(builder, feeVector);
						SecretLockTransactionBuffer.addDeadline(builder, deadlineVector);
						SecretLockTransactionBuffer.addMosaicId(builder, mosaicIdVector);
						SecretLockTransactionBuffer.addMosaicAmount(builder, mosaicAmountVector);
						SecretLockTransactionBuffer.addDuration(builder, durationVector);
						SecretLockTransactionBuffer.addHashAlgorithm(builder, this.hashAlgorithm);
						SecretLockTransactionBuffer.addSecret(builder, secretVector);
						SecretLockTransactionBuffer.addRecipient(builder, recipientVector);

						var codedSecretLock = SecretLockTransactionBuffer.endSecretLockTransactionBuffer(builder);
						builder.finish(codedSecretLock);

						var bytes = builder.asUint8Array();
						return new SecretLockTransaction(bytes, _SecretLockTransactionSchema2.default);
					}
				}]);

				return Builder;
			}();

			return Builder;
		}
	}]);

	return SecretLockTransaction;
}(_VerifiableTransaction2.default);

exports.default = SecretLockTransaction;
//# sourceMappingURL=SecretLockTransaction.js.map