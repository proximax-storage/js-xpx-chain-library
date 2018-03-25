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

import deadline from '../../src/transactions/Deadline';
import TransferTransaction from '../../src/transactions/TransferTransaction';
import TransactionRoutesApi from '../../src/api/TransactionRoutesApi';
import AggregateTransaction from '../../src/transactions/AggregateTransaction';
import CONF from '../conf/conf';

export default class FakeTransaction {
	constructor() {
		this.keyPair = {
			publicKey: '846B4439154579A5903B1459C9CF69CB8153F6D0110A7A0ED61DE29AE4810BF2',
			privateKey: '239CCE2C5D2B83A70DC91AFEF0CE325FC9947FAA87C8B18473092CE6A745945A'
		};
		this.aliceKeyPair = {
			publicKey: '68b3fbb18729c1fde225c57f8ce080fa828f0067e451a3fd81fa628842b0b763',
			privateKey: 'b8afae6f4ad13a1b8aad047b488e0738a437c7389d4ff30c359ac068910c1d59'
		};

		this.multisigAccount = {
			publicKey: 'b694186ee4ab0558ca4afcfdd43b42114ae71094f5a1fc4a913fe9971cacd21d',
			privateKey: '5edebfdbeb32e9146d05ffd232c8af2cf9f396caf9954289daa0362d097fff3b'
		};
	}

	createAndAnnounce() {
		const verifiableTransaction = new TransferTransaction.Builder()
			.addDeadline(deadline())
			.addRecipient('SDUP5PLHDXKBX3UU5Q52LAY4WYEKGEWC6IB3VBFM')
			.addMessage({
				type: 0,
				payload: '00'
			})
			.addMosaics([{
				id: [3646934825, 3576016193],
				amount: [100, 0]
			}])
			.build();

		const payload = verifiableTransaction.signTransaction(this.keyPair);

		const transactionRoutesAPI = new TransactionRoutesApi(CONF.URL);
		transactionRoutesAPI
			.announceTransaction(payload)
			.then(x => {
				console.log('announce', x);
			})
			.catch(err => {
				console.log('error', err);
			});
	}

	createAndAnnounceWithInsufficientBalance() {
		const verifiableTransaction = new TransferTransaction.Builder()
			.addDeadline(deadline())
			.addRecipient('SDUP5PLHDXKBX3UU5Q52LAY4WYEKGEWC6IB3VBFM')
			.addMessage({
				type: 0,
				payload: '00'
			})
			.addMosaics([{
				id: [3646934825, 3576016193],
				amount: [100000, 9999999999]
			}])
			.build();

		const payload = verifiableTransaction.signTransaction(this.keyPair);

		const transactionRoutesAPI = new TransactionRoutesApi(CONF.URL);
		transactionRoutesAPI
			.announceTransaction(payload)
			.then(x => {
				console.log('announce', x);
			})
			.catch(err => {
				console.log('error', err);
			});
	}

	createPartialAndAnnounce() {
		const transfer = new TransferTransaction.Builder()
			.addDeadline(deadline())
			.addRecipient('SDUP5PLHDXKBX3UU5Q52LAY4WYEKGEWC6IB3VBFM')
			.addMessage({
				type: 0,
				payload: '00'
			})
			.addMosaics([{
				id: [3646934825, 3576016193],
				amount: [100, 0]
			}])
			.build()
			.toAggregateTransaction(this.multisigAccount.publicKey);

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

		const payload = verifiableTransaction.signTransaction(this.aliceKeyPair);

		const transactionRoutesAPI = new TransactionRoutesApi(CONF.URL);
		transactionRoutesAPI
			.announcePartialTransaction(payload)
			.then(x => {
				console.log('announce', x);
			})
			.catch(err => {
				console.log('error', err);
			});
	}
}
