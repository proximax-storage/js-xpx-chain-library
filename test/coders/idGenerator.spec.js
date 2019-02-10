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

import { expect } from 'chai';
import { sha3_256 } from 'js-sha3';
import idGenerator from '../../src/coders/idGenerator';

const constants = {
	nem_id: [0x375FFA4B, 0x84B3552D],
	xem_id: [0xD95FCF29, 0xD525AD41],
	namespace_base_id: [0, 0]
};

const basicMosaicInfo = {
	nonce: [0x78, 0xE3, 0x6F, 0xB7],
	publicId: [
		0x4A, 0xFF, 0x7B, 0x4B, 0xA8, 0xC1, 0xC2, 0x6A, 0x79, 0x17, 0x57, 0x59, 0x93, 0x34, 0x66, 0x27,
		0xCB, 0x6C, 0x80, 0xDE, 0x62, 0xCD, 0x92, 0xF7, 0xF9, 0xAE, 0xDB, 0x70, 0x64, 0xA3, 0xDE, 0x62
	],
	id: [0xC0AFC518, 0x3AD842A8]
};

describe('id generator', () => {
	function generateNamespaceId(parentId, name) {
		const hash = sha3_256.create();
		hash.update(Uint32Array.from(parentId).buffer);
		hash.update(name);
		const result = new Uint32Array(hash.arrayBuffer());
		// right zero-filling required to keep unsigned number representation
		return [result[0], (result[1] | 0x80000000) >>> 0];
	}

	function addBasicTests(generator) {
		it('produces different results for different names', () => {
			// Assert:
			['bloodyrookie.alice', 'nem.mex', 'bloodyrookie.xem', 'bloody_rookie.xem'].forEach(name =>
				expect(generator(name), `nem.xem vs ${name}`).to.not.equal(generator('nem.xem')));
		});

		it('rejects names with uppercase characters', () => {
			// Assert:
			['NEM.xem', 'NEM.XEM', 'nem.XEM', 'nEm.XeM', 'NeM.xEm'].forEach(name =>
				expect(() => generator(name), `name ${name}`).to.throw('invalid part name'));
		});

		it('rejects improper qualified names', () => {
			// Assert:
			['.', '..', '...', '.a', 'b.', 'a..b', '.a.b', 'b.a.'].forEach(name =>
				expect(() => generator(name), `name ${name}`).to.throw('empty part'));
		});

		it('rejects improper part names', () => {
			// Assert:
			['alpha.bet@.zeta', 'a!pha.beta.zeta', 'alpha.beta.ze^a'].forEach(name =>
				expect(() => generator(name), `name ${name}`).to.throw('invalid part name'));
		});

		it('rejects empty string', () => {
			// Assert:
			expect(() => generator(''), 'empty string').to.throw('having zero length');
		});
	}

	describe('generate mosaic id', () => {
		it('generates correct well known id', () => {
			// Assert:
			expect(idGenerator.generateMosaicId(basicMosaicInfo.nonce, basicMosaicInfo.publicId))
				.to.deep.equal(basicMosaicInfo.id);
		});
	});

	describe('generate namespace paths', () => {
		it('generates correct well known root path', () => {
			// Act:
			const path = idGenerator.generateNamespacePath('nem');

			// Assert:
			expect(path.length).to.equal(1);
			expect(path[0]).to.deep.equal(constants.nem_id);
		});

		it('generates correct well known child path', () => {
			// Act:
			const path = idGenerator.generateNamespacePath('nem.xem');

			// Assert:
			expect(path.length).to.equal(2);
			expect(path[0]).to.deep.equal(constants.nem_id);
			expect(path[1]).to.deep.equal(constants.xem_id);
		});

		it('supports multi level namespaces', () => {
			// Arrange:
			const expected = [];
			expected.push(generateNamespaceId(constants.namespace_base_id, 'foo'));
			expected.push(generateNamespaceId(expected[0], 'bar'));
			expected.push(generateNamespaceId(expected[1], 'baz'));

			// Assert:
			expect(idGenerator.generateNamespacePath('foo.bar.baz')).to.deep.equal(expected);
		});

		it('rejects names with too many parts', () => {
			// Assert:
			['a.b.c.d', 'a.b.c.d.e'].forEach(name =>
				expect(() => idGenerator.generateNamespacePath(name), `name ${name}`).to.throw('too many parts'));
		});

		it('rejects improper qualified names', () => {
			// Assert:
			['a:b:c', 'a::b'].forEach(name =>
				expect(() => idGenerator.generateNamespacePath(name), `name ${name}`).to.throw('invalid part name'));
		});

		addBasicTests(idGenerator.generateNamespacePath);
	});
});

