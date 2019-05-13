'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VerifiableTransaction = require('./VerifiableTransaction');

var _VerifiableTransaction2 = _interopRequireDefault(_VerifiableTransaction);

var _MosaicAliasTransactionSchema = require('../schema/MosaicAliasTransactionSchema');

var _MosaicAliasTransactionSchema2 = _interopRequireDefault(_MosaicAliasTransactionSchema);

var _MosaicAliasTransactionBuffer = require('../buffers/MosaicAliasTransactionBuffer');

var _MosaicAliasTransactionBuffer2 = _interopRequireDefault(_MosaicAliasTransactionBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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

var MosaicAliasTransactionBuffer = _MosaicAliasTransactionBuffer2.default.Buffers.MosaicAliasTransactionBuffer;

var _require = require('flatbuffers'),
    flatbuffers = _require.flatbuffers;

/**
 * @module transactions/MosaicAliasTransaction
 */


var MosaicAliasTransaction = function (_VerifiableTransactio) {
	_inherits(MosaicAliasTransaction, _VerifiableTransactio);

	function MosaicAliasTransaction() {
		_classCallCheck(this, MosaicAliasTransaction);

		return _possibleConstructorReturn(this, (MosaicAliasTransaction.__proto__ || Object.getPrototypeOf(MosaicAliasTransaction)).apply(this, arguments));
	}

	_createClass(MosaicAliasTransaction, null, [{
		key: 'Builder',
		get: function get() {
			var Builder = function () {
				function Builder() {
					_classCallCheck(this, Builder);

					this.fee = [0, 0];
					this.version = 36865;
					this.type = 0x434E;
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
					key: 'addActionType',
					value: function addActionType(actionType) {
						this.actionType = actionType;
						return this;
					}
				}, {
					key: 'addNamespaceId',
					value: function addNamespaceId(namespaceId) {
						this.namespaceId = namespaceId;
						return this;
					}
				}, {
					key: 'addMosaicId',
					value: function addMosaicId(mosaicId) {
						this.mosaicId = mosaicId;
						return this;
					}
				}, {
					key: 'build',
					value: function build() {
						var builder = new flatbuffers.Builder(1);

						// Create vectors
						var signatureVector = MosaicAliasTransactionBuffer.createSignatureVector(builder, Array.apply(undefined, _toConsumableArray(Array(64))).map(Number.prototype.valueOf, 0));
						var signerVector = MosaicAliasTransactionBuffer.createSignerVector(builder, Array.apply(undefined, _toConsumableArray(Array(32))).map(Number.prototype.valueOf, 0));
						var deadlineVector = MosaicAliasTransactionBuffer.createDeadlineVector(builder, this.deadline);
						var feeVector = MosaicAliasTransactionBuffer.createFeeVector(builder, this.fee);
						var namespaceIdVector = MosaicAliasTransactionBuffer.createNamespaceIdVector(builder, this.namespaceId);
						var mosaicIdVector = MosaicAliasTransactionBuffer.createMosaicIdVector(builder, this.mosaicId);

						MosaicAliasTransactionBuffer.startMosaicAliasTransactionBuffer(builder);
						MosaicAliasTransactionBuffer.addSize(builder, 137);
						MosaicAliasTransactionBuffer.addSignature(builder, signatureVector);
						MosaicAliasTransactionBuffer.addSigner(builder, signerVector);
						MosaicAliasTransactionBuffer.addVersion(builder, this.version);
						MosaicAliasTransactionBuffer.addType(builder, this.type);
						MosaicAliasTransactionBuffer.addFee(builder, feeVector);
						MosaicAliasTransactionBuffer.addDeadline(builder, deadlineVector);
						MosaicAliasTransactionBuffer.addActionType(builder, this.actionType);
						MosaicAliasTransactionBuffer.addNamespaceId(builder, namespaceIdVector);
						MosaicAliasTransactionBuffer.addMosaicId(builder, mosaicIdVector);

						// Calculate size
						var codedMosaicChangeSupply = MosaicAliasTransactionBuffer.endMosaicAliasTransactionBuffer(builder);
						builder.finish(codedMosaicChangeSupply);

						var bytes = builder.asUint8Array();

						return new MosaicAliasTransaction(bytes, _MosaicAliasTransactionSchema2.default);
					}
				}]);

				return Builder;
			}();

			return Builder;
		}
	}]);

	return MosaicAliasTransaction;
}(_VerifiableTransaction2.default);

exports.default = MosaicAliasTransaction;
//# sourceMappingURL=MosaicAliasTransaction.js.map