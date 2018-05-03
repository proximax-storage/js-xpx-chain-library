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
import deadline from '../src/transactions/Deadline';
import PartialTransactionsListener from '../src/listeners/PartialTransactionsListener';
import CONF from './conf/conf';


describe('MultisigTransferTransaction E2E', () => {
	const aliceKeyPair = {
		address: 'SDHSRBVCG5YVGTZM56DASS2MJ66B4GOCQ2YR4W2F',
		publicKey: 'cf893ffcc47c33e7f68ab1db56365c156b0736824a0c1e273f9e00b8df8f01eb',
		privateKey: '2a2b1f5d366a5dd5dc56c3c757cf4fe6c66e2787087692cf329d7a49a594658b'
	};

	const multisigAccount = {
		address: 'SBCPGZ3S2SCC3YHBBTYDCUZV4ZZEPHM2KGCP4QXX',
		publicKey: 'b694186ee4ab0558ca4afcfdd43b42114ae71094f5a1fc4a913fe9971cacd21d',
		privateKey: '5edebfdbeb32e9146d05ffd232c8af2cf9f396caf9954289daa0362d097fff3b'
	};

	let transfer;

	before(() => {
		transfer = new TransferTransaction.Builder()
			.addDeadline(deadline())
			.addRecipient('SBILTA367K2LX2FEXG5TFWAS7GEFYAGY7QLFBYKC')
			.addMessage({
				type: 0,
				payload: 'test'
			})
			.addMosaics([{
				id: [3646934825, 3576016193],
				amount: [100, 0]
			}])
			.build()
			.toAggregateTransaction(multisigAccount.publicKey);
	});

	it('should announce the transaction to the network successfully', done => {
		const aggregateTransaction = {
			deadline: deadline(),
			transactions: [
				transfer
			]
		};
		const verifiableTransaction = new AggregateTransaction.Builder()
			.addDeadline(aggregateTransaction.deadline)
			.addTransactions(aggregateTransaction.transactions)
			.build();

		const payload = verifiableTransaction.signTransaction(aliceKeyPair);
		console.log('PAYLOAD', payload);

		new PartialTransactionsListener().addedToAccount(aliceKeyPair.address, res => {
			console.log(res);
			done();
		});

		setTimeout(() => {
			const transactionRoutesAPI = new TransactionRoutesApi(CONF.SERVER);
			transactionRoutesAPI
				.announcePartialTransaction(payload)
				.then(x => {
					console.log('announce', x);
				})
				.catch(err => {
					console.log('error', err);
				});
		}, 1000);
	});
});
