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
import AggregateTransaction from '../src/transactions/AggregateTransaction';
import TransferTransaction from '../src/transactions/TransferTransaction';
import NamespaceCreationTransaction from '../src/transactions/NamespaceCreationTransaction';
import MosaicCreationTransaction from '../src/transactions/MosaicCreationTransaction';
import IdGenerator from '../src/coders/idGenerator';
import MosaicSupplyChangeTransaction from '../src/transactions/MosaicSupplyChangeTransaction';
import deadline from '../src/transactions/Deadline';
import CONF from './conf/conf';


describe('AggregateTransaction E2E', () => {
	const keyPair = {
		publicKey: '846B4439154579A5903B1459C9CF69CB8153F6D0110A7A0ED61DE29AE4810BF2',
		privateKey: '239CCE2C5D2B83A70DC91AFEF0CE325FC9947FAA87C8B18473092CE6A745945A'
	};

	let transfer;
	let createNamespace;
	let createMosaic;
	let changeSupplyMosaic;
	let transferWithThatMosaic;

	before(() => {
		transfer = new TransferTransaction.Builder()
			.addDeadline(deadline())
			.addRecipient('SBILTA367K2LX2FEXG5TFWAS7GEFYAGY7QLFBYKC')
			.addMessage({
				type: 0,
				payload: '00'
			})
			.addMosaics([{
				id: [3646934825, 3576016193],
				amount: [10000000, 0]
			}])
			.build()
			.toAggregateTransaction(keyPair.publicKey);

		const namespaceName = 'super-2';
		createNamespace = new NamespaceCreationTransaction.Builder()
			.addDeadline(deadline())
			.addNamespaceType(0)
			.addDuration(10000)
			.addNamespaceName(namespaceName)
			.build()
			.toAggregateTransaction(keyPair.publicKey);

		const mosaicName = `mosaic-name-${Math.floor(Math.random() * 100 % 10)}`;
		createMosaic = new MosaicCreationTransaction.Builder()
			.addDeadline(deadline())
			.addSupplyMutable()
			.addDivisibility(4)
			.addDuration(10000)
			.addNamespaceName(namespaceName)
			.addMosaicName(mosaicName)
			.build()
			.toAggregateTransaction(keyPair.publicKey);

		changeSupplyMosaic = new MosaicSupplyChangeTransaction.Builder()
			.addDeadline(deadline())
			.addMosaicName(mosaicName)
			.addNamespaceName(namespaceName)
			.addDirection(1)
			.addDelta(100000)
			.build();
		// .toAggregateTransaction(keyPair.publicKey);

		transferWithThatMosaic = new TransferTransaction.Builder()
			.addDeadline(deadline())
			.addRecipient('SBILTA367K2LX2FEXG5TFWAS7GEFYAGY7QLFBYKC')
			.addMessage({
				type: 0,
				payload: '00'
			})
			.addMosaics([{
				id: [0xC0AFC518, 0x3AD842A8],
				amount: [40000, 0]
			}])
			.build()
			.toAggregateTransaction(keyPair.publicKey);
	});

	it('should announce the transaction to the network successfully', done => {
		const aggregateTransaction = {
			deadline: deadline(),
			transactions: [
				transfer,
				createNamespace,
				createMosaic,
				changeSupplyMosaic,
				transferWithThatMosaic
			]
		};
		const verifiableTransaction = new AggregateTransaction.Builder()
			.addDeadline(aggregateTransaction.deadline)
			.addTransactions(aggregateTransaction.transactions)
			.build();

		const payload = verifiableTransaction.signTransaction(keyPair);
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
