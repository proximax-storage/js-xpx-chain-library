'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Schema = require('./Schema');

/**
 * @module schema/AggregateTransactionSchema
 */

/**
 * Aggregate transaction schema
 * @const {module:schema/Schema}
 */
var schema = new _Schema.Schema([(0, _Schema.uint)('size'), (0, _Schema.array)('signature'), (0, _Schema.array)('signer'), (0, _Schema.ushort)('version'), (0, _Schema.ushort)('type'), (0, _Schema.array)('fee', _Schema.TypeSize.INT), (0, _Schema.array)('deadline', _Schema.TypeSize.INT), (0, _Schema.uint)('transactionsSize'), (0, _Schema.array)('transactions')]); /*
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

exports.default = schema;
//# sourceMappingURL=AggregateTransactionSchema.js.map