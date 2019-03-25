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

const { AccountRoutesApi } = require('../../src/index');

describe('AccountRoutesApi', () => {
	let accountRoutesApi;
	const accountAddress = 'SBILTA367K2LX2FEXG5TFWAS7GEFYAGY7QLFBYKC';
	const accountIdsBody = {
		accountIds: ['SBILTA367K2LX2FEXG5TFWAS7GEFYAGY7QLFBYKC']
	};
	const accountPublicKey = '1026d70e1954775749c6811084d6450a3184d977383f0e4282cd47118af37755';
	const multisigAddress = 'SBCPGZ3S2SCC3YHBBTYDCUZV4ZZEPHM2KGCP4QXX';
	const multisig = 'B694186EE4AB0558CA4AFCFDD43B42114AE71094F5A1FC4A913FE9971CACD21D';
	const propertiesAddress =  'SBCPGZ3S2SCC3YHBBTYDCUZV4ZZEPHM2KGCP4QXX';
	const properties = 'B694186EE4AB0558CA4AFCFDD43B42114AE71094F5A1FC4A913FE9971CACD21D';
	const accountPropertiesIdsBody = {
		accountIds: ['SBCPGZ3S2SCC3YHBBTYDCUZV4ZZEPHM2KGCP4QXX']
	};
	beforeEach(() => {
		accountRoutesApi = new AccountRoutesApi(CONF.SERVER);
	});
	/* eslint-disable no-unused-expressions */
	const checkAccountInfo = accountInfo => {
		expect(accountInfo.meta).to.not.be.undefined;
		expect(accountInfo.account.address).to.not.be.undefined;
		expect(accountInfo.account.publicKey).to.not.be.undefined;
		expect(accountInfo.account.addressHeight[0]).to.not.be.undefined;
		expect(accountInfo.account.addressHeight[1]).to.not.be.undefined;
		expect(accountInfo.account.publicKeyHeight[0]).to.not.be.undefined;
		expect(accountInfo.account.publicKeyHeight[1]).to.not.be.undefined;
		expect(accountInfo.account.mosaics).to.not.be.undefined;
		expect(accountInfo.account.importanceHeight[0]).to.not.be.undefined;
		expect(accountInfo.account.importanceHeight[1]).to.not.be.undefined;
		expect(accountInfo.account.importance[0]).to.not.be.undefined;
		expect(accountInfo.account.importance[1]).to.not.be.undefined;
	};
	/* eslint-enable */

	describe('getAccountInfo', () => {
		it('should call getAccountInfo successfully', done => {
			accountRoutesApi.getAccountInfo(accountAddress).then(accountInfo => {
				expect(accountInfo.account.address).to.be.equal('9050B9837EFAB4BBE8A4B9BB32D812F9885C00D8FC1650E142');
				expect(accountInfo.account.publicKey).to.be.equal('846B4439154579A5903B1459C9CF69CB8153F6D0110A7A0ED61DE29AE4810BF2');
				checkAccountInfo(accountInfo);
				done();
			});
		});
	});
	describe('getAccountsInfo', () => {
		it('should call getAccountsInfo successfully', done => {
			return accountRoutesApi.getAccountsInfo(accountIdsBody).then(accountsInfo => {
				expect(accountsInfo.length).to.be.equal(1);
				checkAccountInfo(accountsInfo[0]);
				done();
			});
		});
	});

	describe('incomingTransactions', () => {
		it('should call incomingTransactions successfully', done => {
			return accountRoutesApi.incomingTransactions(accountPublicKey).then(incomingTransactions => {
				expect(incomingTransactions.length).to.be.greaterThan(0);
				done();
			});
		});
	});

	describe('outgoingTransactions', () => {
		it('should call outgoingTransactions successfully', done => {
			return accountRoutesApi.outgoingTransactions(accountPublicKey).then(outgoingTransactions => {
				expect(outgoingTransactions.length).to.be.greaterThan(0);
				done();
			});
		});
	});
	describe('partialTransactions', () => {
		it('should call partialTransactions successfully', done => {
			return accountRoutesApi.partialTransactions(accountPublicKey).then(partialTransactions => {
				expect(partialTransactions.length).to.be.equal(0);
				done();
			});
		});
	});
	describe('transactions', () => {
		it('should call transactions successfully', done => {
			return accountRoutesApi.transactions(accountPublicKey).then(transactions => {
				expect(transactions.length).to.be.greaterThan(0);
				done();
			});
		});
	});
	describe('unconfirmedTransactions', () => {
		it('should call unconfirmedTransactions successfully', done => {
			return accountRoutesApi.unconfirmedTransactions(accountPublicKey).then(unconfirmedTransactions => {
				expect(unconfirmedTransactions.length).to.be.equal(0);
				done();
			});
		});
	});

	describe('getAccountMultisig', () => {
		it('should call getAccountMultisig successfully', done => {
			return accountRoutesApi.getAccountMultisig(multisigAddress).then(multigAccountInfo => {
				expect(multigAccountInfo.multisig.account).to.be.equal(multisig);
				expect(multigAccountInfo.multisig.minApproval).to.be.equal(3);
				expect(multigAccountInfo.multisig.minRemoval).to.be.equal(3);
				/* eslint-disable no-unused-expressions */
				expect(multigAccountInfo.multisig.cosignatories).to.not.be.undefined;
				expect(multigAccountInfo.multisig.multisigAccounts).to.not.be.undefined;
				/* eslint-enable */
				done();
			});
		});
	});


	describe('getAccountMultisigGraph', () => {
		it('should call getAccountMultisigGraph successfully', done => accountRoutesApi
			.getAccountMultisigGraph(multisigAddress).then(multigGraphAccountInfo => {
				multigGraphAccountInfo.forEach(multisigAccountInfo => {
					/* eslint-disable no-unused-expressions */
					expect(multisigAccountInfo.level).to.not.be.undefined;
					multisigAccountInfo.multisigEntries.forEach(multisigEntry => {
						expect(multisigEntry.multisig.account).to.not.be.undefined;
						expect(multisigEntry.multisig.minApproval).to.not.be.undefined;
						expect(multisigEntry.multisig.minRemoval).to.not.be.undefined;
						expect(multisigEntry.multisig.cosignatories).to.not.be.undefined;
						expect(multisigEntry.multisig.multisigAccounts).to.not.be.undefined;
					});
					/* eslint-enable */
				});
				done();
			}));
	});
	describe('getAccountProperties', () => {
		it('should call getAccountProperties successfully', done => {
			return accountRoutesApi.getAccountProperties(propertiesAddress).then(accountPropertiesInfo => {
				expect(accountPropertiesInfo.account).to.be.equal(properties);
				done();
			});
		});
	});
	describe('getAccountPropertiesFromAccounts', () => {
		it('should call getAccountPropertiesFromAccounts successfully', done => {
			return accountRoutesApi.getAccountPropertiesFromAccounts(accountPropertiesIdsBody).then(accountPropertiesInfo => {
				expect(accountPropertiesInfo.length).to.be.equal(1);
				checkAccountInfo(accountPropertiesInfo);
				done();
			});
		});
	});
});

