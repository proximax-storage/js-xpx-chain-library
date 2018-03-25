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
import TransferTransaction from '../src/transactions/TransferTransaction';
import deadline from '../src/transactions/Deadline';
import CONF from './conf/conf';

describe('TransferTransaction E2E', () => {
	const keyPair = {
		publicKey: '846b4439154579a5903b1459c9cf69cb8153f6d0110a7a0ed61de29ae4810bf2',
		privateKey: '239cce2c5d2b83a70dc91afef0ce325fc9947faa87c8b18473092ce6a745945a'
	};

	it('should announce the transaction to the network successfully', done => {
		const transferTransaction = {
			deadline: deadline(),
			recipient: 'SBILTA367K2LX2FEXG5TFWAS7GEFYAGY7QLFBYKC',
			message: {
				type: 0,
				payload: 'test message'
			},
			mosaics: [{
				id: [3646934825, 3576016193],
				amount: [100, 0]
			}, {
				id: [4194316032, 148499725],
				amount: [100, 0]
			}, {
				id: [2154643268, 978584940],
				amount: [100, 0]
			}]
		};
		const verifiableTransaction = new TransferTransaction.Builder()
			.addDeadline(transferTransaction.deadline)
			.addRecipient(transferTransaction.recipient)
			.addMessage(transferTransaction.message)
			.addMosaics(transferTransaction.mosaics)
			.build();

		const payload = verifiableTransaction.signTransaction(keyPair);
		console.log('PAYLOAD', payload);
		const transactionRoutesAPI = new TransactionRoutesApi(CONF.URL);
		transactionRoutesAPI
			.announceTransaction(payload)
			.then(x => {
				console.log('announce', x);
				done();
			})
			.catch(err => {
				console.log('error', err);
			});
	});
});
