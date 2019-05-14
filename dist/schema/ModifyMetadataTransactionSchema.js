'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Schema = require('./Schema');

/**
 * @module schema/ModifyMetadataTransactionSchema
 */

/**
 * Modify metadata transaction schema
 * @const {module:schema/Schema}
 */
var schema = new _Schema.Schema([(0, _Schema.uint)('size'), (0, _Schema.array)('signature'), (0, _Schema.array)('signer'), (0, _Schema.ushort)('version'), (0, _Schema.ushort)('type'), (0, _Schema.array)('fee', _Schema.TypeSize.INT), (0, _Schema.array)('deadline', _Schema.TypeSize.INT), (0, _Schema.ubyte)('metadataType'), (0, _Schema.array)('metadataId'), (0, _Schema.tableArray)('modifications', [(0, _Schema.uint)('size'), (0, _Schema.ubyte)('modificationType'), (0, _Schema.ubyte)('keySize'), (0, _Schema.array)('valueSize'), (0, _Schema.array)('key'), (0, _Schema.array)('value')])]); // Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file

exports.default = schema;
//# sourceMappingURL=ModifyMetadataTransactionSchema.js.map