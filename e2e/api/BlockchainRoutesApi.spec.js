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
import CONF from '../conf/conf';

const { BlockchainRoutesApi } = require('../../src/index');

describe('BlockRoutesApi', () => {
	let blockchainRoutesApi;
	const checkBlockInfo = blockInfo => {
		/* eslint-disable no-unused-expressions */
		expect(blockInfo.meta.hash).to.not.be.undefined;
		expect(blockInfo.meta.generationHash).to.not.be.undefined;
		expect(blockInfo.meta.totalFee).to.not.be.undefined;
		expect(blockInfo.meta.numTransactions).to.not.be.undefined;

		expect(blockInfo.block.signature).to.not.be.undefined;
		expect(blockInfo.block.signer).to.not.be.undefined;
		expect(blockInfo.block.version).to.not.be.undefined;
		expect(blockInfo.block.type).to.not.be.undefined;
		expect(blockInfo.block.height).to.not.be.undefined;
		expect(blockInfo.block.timestamp).to.not.be.undefined;
		expect(blockInfo.block.difficulty).to.not.be.undefined;
		expect(blockInfo.block.previousBlockHash).to.not.be.undefined;
		expect(blockInfo.block.blockTransactionsHash).to.not.be.undefined;
		/* eslint-enable */
	};

	beforeEach(() => {
		blockchainRoutesApi = new BlockchainRoutesApi(CONF.SERVER);
	});

	describe('getBlockByHeight', () => {
		it('should call getBlockByHeight successfully', done => {
			blockchainRoutesApi.getBlockByHeight(2).then(blockInfo => {
				checkBlockInfo(blockInfo);
				done();
			});
		});
	});
	describe('getBlockTransactions', () => {
		it('should call getBlockTransactions successfully', done => {
			blockchainRoutesApi.getBlockTransactions(1).then(transactions => {
				expect(transactions.length).to.be.greaterThan(0);
				done();
			});
		});
	});
	describe('getBlocksByHeightWithLimit', () => {
		it('should call getBlocksByHeightWithLimit successfully', done => {
			blockchainRoutesApi.getBlocksByHeightWithLimit(1, 3).then(blocksInfo => {
				blocksInfo.map(blockInfo => checkBlockInfo(blockInfo));
				done();
			});
		});
	});

	describe('getBlockchainHeight', () => {
		it('should call getBlockchainHeight successfully', done => blockchainRoutesApi.getBlockchainHeight().then(height => {
			expect(height).to.not.be.equal(0);
			done();
		}));
	});
	describe('getBlockchainScore', () => {
		it('should call getBlockchainScore successfully', done => {
			blockchainRoutesApi.getBlockchainScore().then(score => {
				expect(score).to.not.be.equal(0);
				done();
			});
		});
	});
	describe('getDiagnosticStorage', () => {
		it('should call getDiagnosticStorage successfully', done => {
			blockchainRoutesApi.getDiagnosticStorage().then(storage => {
				expect(storage.numAccounts).to.be.greaterThan(0);
				expect(storage.numBlocks).to.be.greaterThan(0);
				expect(storage.numTransactions).to.be.greaterThan(0);
				done();
			});
		});
	});
});
