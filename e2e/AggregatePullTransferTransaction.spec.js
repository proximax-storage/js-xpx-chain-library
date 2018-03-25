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


describe('AggregatePullTransferTransaction E2E', () => {
	const aliceKeyPair = {
		publicKey: '846B4439154579A5903B1459C9CF69CB8153F6D0110A7A0ED61DE29AE4810BF2',
		privateKey: '239CCE2C5D2B83A70DC91AFEF0CE325FC9947FAA87C8B18473092CE6A745945A',
		address: 'SBILTA367K2LX2FEXG5TFWAS7GEFYAGY7QLFBYKC'
	};

	const bobKeyPair = {
		publicKey: '67026dfb3198637720443009452a7323d8763317c8cb3e772a51b61f7abc56c4',
		privateKey: 'c1f66846e9a7e42b81f0223a9ff3905b692ac0233e10d40840ee76dbeeda3b10',
		address: 'SAFKUHLV5W523JJKEJ6YQ6BEGNTF6SKTA27426FR'
	};

	const carolKeyPair = {
		publicKey: 'dd5a121bebd55757b6af9d764a92fb28517b682dd91b53eff46d3cdae178539a',
		privateKey: '76735258abd4324a576965fbf8b67d37e40be0966d8e4758ef1f2e318aed0617',
		address: 'SAPMDIG6RXMO62X7KO36XQZ57IVWGUIQ32U2T26J'
	};

	let transfer;
	let voidTransaction;

	before(() => {
		voidTransaction = new TransferTransaction.Builder()
			.addDeadline(deadline())
			.addRecipient(bobKeyPair.address)
			.addMessage({
				type: 0,
				payload: '00'
			})
			.addMosaics([{
				id: [3646934825, 3576016193],
				amount: [0, 0]
			}])
			.build()
			.toAggregateTransaction(aliceKeyPair.publicKey);

		transfer = new TransferTransaction.Builder()
			.addDeadline(deadline())
			.addRecipient(carolKeyPair.address)
			.addMessage({
				type: 0,
				payload: '0'
			})
			.addMosaics([{
				id: [3646934825, 3576016193],
				amount: [10, 0]
			}])
			.build()
			.toAggregateTransaction(bobKeyPair.publicKey);
	});

	it('should announce pull the transaction to the network successfully', done => {
		const aggregateTransaction = {
			deadline: deadline(),
			transactions: [
				voidTransaction,
				transfer
			]
		};
		const verifiableTransaction = new AggregateTransaction.Builder()
			.addDeadline(aggregateTransaction.deadline)
			.addTransactions(aggregateTransaction.transactions)
			.build();

		const payload = verifiableTransaction.signTransaction(aliceKeyPair);
		console.log('PAYLOAD', payload);


		new PartialTransactionsListener(CONF.URL).addedToAccount(carolKeyPair.address, res => {
			console.log(res);
			done();
		});

		setTimeout(() => {
			const transactionRoutesAPI = new TransactionRoutesApi(CONF.URL);
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
