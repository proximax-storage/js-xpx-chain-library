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

const { NamespaceRoutesApi } = require('../../src/index');

describe('NamespaceRoutesApi', () => {
	let namespaceRoutesApi;

	const namespaceId = '84b3552d375ffa4b';
	const namespaceIds = {
		namespaceIds: ['84b3552d375ffa4b']
	};
	const accountAddress = 'SDRDGFTDLLCB67D4HPGIMIHPNSRYRJRT7DOBGWZY';
	const accountAddresses = {
		addresses: ['SDRDGFTDLLCB67D4HPGIMIHPNSRYRJRT7DOBGWZY']
	};

	beforeEach(() => {
		namespaceRoutesApi = new NamespaceRoutesApi();
	});

	/* eslint-disable no-unused-expressions */
	const checkNamespaceInfo = namespaceInfo => {
		expect(namespaceInfo.meta.active).to.not.be.undefined;
		expect(namespaceInfo.meta.index).to.not.be.undefined;
		expect(namespaceInfo.meta.id).to.not.be.undefined;

		expect(namespaceInfo.namespace).to.not.be.undefined;
		expect(namespaceInfo.namespace.type).to.not.be.undefined;
		expect(namespaceInfo.namespace.depth).to.not.be.undefined;
		expect(namespaceInfo.namespace.level0).to.not.be.undefined;
		expect(namespaceInfo.namespace.owner).to.not.be.undefined;
		expect(namespaceInfo.namespace.parentId).to.not.be.undefined;
		expect(namespaceInfo.namespace.owner).to.not.be.undefined;
		expect(namespaceInfo.namespace.startHeight).to.not.be.undefined;
		expect(namespaceInfo.namespace.endHeight).to.not.be.undefined;
	};
	/* eslint-enable */

	describe('getNamespace', () => {
		it('should call getNamespace successfully', done => namespaceRoutesApi.getNamespace(namespaceId)
			.then(namespaceInfo => {
				checkNamespaceInfo(namespaceInfo);
				done();
			}));
	});
	describe('getNamespacesFromAccount', () => {
		it('should call getNamespacesFromAccount successfully', done => {
			namespaceRoutesApi.getNamespacesFromAccount(accountAddress).then(namespacesInfo => {
				namespacesInfo.map(namespaceInfo => checkNamespaceInfo(namespaceInfo));
				done();
			});
		});
	});
	describe('getNamespacesFromAccounts', () => {
		it('should call getNamespacesFromAccounts successfully', done => {
			namespaceRoutesApi.getNamespacesFromAccounts(accountAddresses).then(namespacesInfo => {
				namespacesInfo.forEach(namespaceInfo => checkNamespaceInfo(namespaceInfo));
				done();
			});
		});
	});
	describe('getNamespacesNames', () => {
		it('should call getNamespacesNames successfully', done => namespaceRoutesApi.getNamespacesNames(namespaceIds).then(namespaces => {
			namespaces.forEach(namespace => {
				expect(namespace.name).to.be.equal('nem');
				expect(namespace.namespaceId[0]).to.be.equal(929036875);
				expect(namespace.namespaceId[1]).to.be.equal(2226345261);
			});
			done();
		}));
	});
});

