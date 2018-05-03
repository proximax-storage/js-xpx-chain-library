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

const { TransactionRoutesApi } = require('../../src/index');

describe('TransactionRoutesApi', () => {
	let transactionRoutesApi;
	const transactionHash = 'DA498E35D88AD9A747886CC3957A34F3189E78C7BCD74C3F1418D8B409839A2C';
	const transactionIdsBody = {
		transactionIds: [
			'5A2156409CD1E8000157357E'
		]
	};

	const transactionHashes = {
		hashes: [
			'DA498E35D88AD9A747886CC3957A34F3189E78C7BCD74C3F1418D8B409839A2C'
		]
	};

	/* eslint-disable no-unused-expressions */
	const checkTransactionInfo = transactionInfo => {
		expect(transactionInfo.meta.height).to.not.be.undefined;
		expect(transactionInfo.meta.index).to.not.be.undefined;
		expect(transactionInfo.meta.hash).to.not.be.undefined;
		expect(transactionInfo.meta.merkleComponentHash).to.not.be.undefined;
		expect(transactionInfo.meta.id).to.not.be.undefined;

		expect(transactionInfo.transaction.signature).to.not.be.undefined;
		expect(transactionInfo.transaction.signer).to.not.be.undefined;
		expect(transactionInfo.transaction.version).to.not.be.undefined;
		expect(transactionInfo.transaction.type).to.not.be.undefined;
		expect(transactionInfo.transaction.fee).to.not.be.undefined;
		expect(transactionInfo.transaction.deadline).to.not.be.undefined;
	};

	const checkTransactionStatus = transactionStatus => {
		expect(transactionStatus.group).to.not.be.undefined;
		expect(transactionStatus.status).to.not.be.undefined;
		expect(transactionStatus.hash).to.not.be.undefined;
		expect(transactionStatus.deadline).to.not.be.undefined;
		expect(transactionStatus.height).to.not.be.undefined;
	};
	/* eslint-enable */

	beforeEach(() => {
		transactionRoutesApi = new TransactionRoutesApi(CONF.SERVER);
	});


	describe('getTransaction', () => {
		it('should call getTransaction successfully', done => {
			transactionRoutesApi.getTransaction(transactionHash).then(transaction => {
				expect(transaction.meta.hash).to.be.equal(transactionHash);

				checkTransactionInfo(transaction);
				done();
			});
		});
	});
	describe('getTransactionStatus', () => {
		it('should call getTransactionStatus successfully', done => {
			transactionRoutesApi.getTransactionStatus(transactionHash).then(transactionStatus => {
				expect(transactionStatus.hash).to.be.equal(transactionHash);
				expect(transactionStatus.group).to.be.equal('confirmed');
				expect(transactionStatus.status).to.be.equal('Success');
				checkTransactionStatus(transactionStatus);
				done();
			});
		});
	});
	describe('getTransactions', () => {
		it('should call getTransactions successfully', done => {
			transactionRoutesApi.getTransactions(transactionIdsBody).then(transactions => {
				transactions.map(transaction => checkTransactionInfo(transaction));
				done();
			});
		});
	});
	describe('getTransactionsStatuses', () => {
		it('should call getTransactionsStatuses successfully', done => {
			transactionRoutesApi.getTransactionsStatuses(transactionHashes).then(transactionsStatuses => {
				transactionsStatuses.map(transactionStatus => checkTransactionStatus(transactionStatus));
				done();
			});
		});
	});
});
