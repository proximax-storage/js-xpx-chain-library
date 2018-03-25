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

import TransactionRoutesApi from '../src/api/TransactionRoutesApi';
import CosignatureTransaction from '../src/transactions/CosignatureTransaction';
import TransactionStatusListener from '../src/listeners/ConfirmedTransactionsListener';
import PartialTransactionsListener from '../src/listeners/PartialTransactionsListener';
import CONF from './conf/conf';


describe('CosignatureTransaction E2E', () => {
	const bobKeyPair = {
		publicKey: '5d58ec16f07bf00bde9b040e7451a37f9908c59e143a01438c04345d8e9ddf39'.toUpperCase(),
		privateKey: '0d943b240f13c4b1e19ca74976788677659151e725fdf57f955cc2c49b447d4e'.toUpperCase()
	};

	it('should announce the transaction to the network successfully', done => {
		const parentHash = '530EA5FC8F698FE0EA137C24A028E417E93B1BC8E9CC1810FA88FA3DE5390C25';
		const verifiableTransaction = new CosignatureTransaction(parentHash);

		const payload = verifiableTransaction.signCosignatoriesTransaction(bobKeyPair);
		console.log(payload);

		new TransactionStatusListener().given('SDVYOZBSP7JSHE63DMGADDAE4TVGT5MX2GP6I3Q3', res => {
			console.log(res);
		});

		new PartialTransactionsListener().removedFromAccount('SDVYOZBSP7JSHE63DMGADDAE4TVGT5MX2GP6I3Q3', res => {
			console.log(res);
		});

		new TransactionStatusListener().given('SBCPGZ3S2SCC3YHBBTYDCUZV4ZZEPHM2KGCP4QXX', res => {
			console.log(res);
		});

		new PartialTransactionsListener().removedFromAccount('SBCPGZ3S2SCC3YHBBTYDCUZV4ZZEPHM2KGCP4QXX', res => {
			console.log(res);
		});

		setTimeout(() => {
			const transactionRoutesAPI = new TransactionRoutesApi(CONF.URL);
			transactionRoutesAPI
				.announceCosignatureTransaction(payload)
				.then(x => {
					console.log('announce', x);
					done();
				})
				.catch(err => {
					console.log('error', err);
					done();
				});
		}, 1000);
	});
});
