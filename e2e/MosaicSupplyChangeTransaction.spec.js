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
import MosaicSupplyChangeTransaction from '../src/transactions/MosaicSupplyChangeTransaction';
import deadline from '../src/transactions/Deadline';
import CONF from './conf/conf';


describe('MosaicSupplyChangeTransaction E2E', () => {
	const keyPair = {
		publicKey: '846B4439154579A5903B1459C9CF69CB8153F6D0110A7A0ED61DE29AE4810BF2',
		privateKey: '239CCE2C5D2B83A70DC91AFEF0CE325FC9947FAA87C8B18473092CE6A745945A'
	};

	it('should announce the transaction to the network successfully', done => {
		const mosaicSupplyChangeTransaction = {
			deadline: deadline(),
			namespaceName: 'newnamespace',
			mosaicName: 'mosaics',
			direction: 1, // direction 1 add direction 0 delete
			delta: 100000
		};

		const transaction = new MosaicSupplyChangeTransaction.Builder()
			.addDeadline(mosaicSupplyChangeTransaction.deadline)
			.addMosaicName(mosaicSupplyChangeTransaction.mosaicName)
			.addNamespaceName(mosaicSupplyChangeTransaction.namespaceName)
			.addDirection(mosaicSupplyChangeTransaction.direction)
			.addDelta(mosaicSupplyChangeTransaction.delta)
			.build();

		const payload = transaction.signTransaction(keyPair);
		console.log('PAYLOAD', payload);
		const transactionRoutesAPI = new TransactionRoutesApi(CONF.SERVER);
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
