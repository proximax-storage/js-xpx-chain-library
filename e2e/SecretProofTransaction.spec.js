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

import { sha3_512 } from 'js-sha3';
import TransactionRoutesApi from '../src/api/TransactionRoutesApi';
import deadline from '../src/transactions/Deadline';
import TransactionStatusListener from '../src/listeners/TransactionStatusListener';
import UnconfirmedTransactionsListener from '../src/listeners/UnconfirmedTransactionsListener';
import SecretProofTransaction from '../src/transactions/SecretProofTransaction';
import convert from '../src/coders/convert';
import nacl from '../src/crypto/nacl_catapult';
import SecretLockTransaction from '../src/transactions/SecretLockTransaction';
import uint64 from '../src/coders/uint64';
import ConfirmedTransactionsListener from '../src/listeners/ConfirmedTransactionsListener';
import CONF from './conf/conf';


describe('SecretProofTransaction E2E', () => {
	const account1 = {
		address: 'SBILTA367K2LX2FEXG5TFWAS7GEFYAGY7QLFBYKC',
		publicKey: '846b4439154579a5903b1459c9cf69cb8153f6d0110a7a0ed61de29ae4810bf2',
		privateKey: '239cce2c5d2b83a70dc91afef0ce325fc9947faa87c8b18473092ce6a745945a'
	};

	const account2 = {
		address: 'SDE3BGN25O3UHJGS3DJ3CUQPNXIKB2OWZHMWRQKV',
		publicKey: '74A6BD39F42535AA3608924A517A88E3B2C36B2DFC296CB379604A3FEE01C7B8',
		privateKey: 'D8A7F4C3D2BC7291D4C5FE3B1E75F915E013FD9D51555FF66FFF429C3BBE089A'
	};

	it('should announce the transaction to the network successfully', done => {
		new TransactionStatusListener(CONF.DOMAIN, 3000).given(account1.address, res => {
			console.log(res);
		});

		new TransactionStatusListener(CONF.DOMAIN, 3000).given(account2.address, res => {
			console.log(res);
		});
		const random = nacl.randomBytes(10);
		const hash = sha3_512.create();
		const seedSecret = convert.uint8ToHex(random);
		hash.update(random);
		const secret = hash.hex();
		const secretLockTransaction = new SecretLockTransaction.Builder()
			.addDeadline(deadline())
			.addMosaicId([3646934825, 3576016193])
			.addMosaicAmount(uint64.fromUint(10000000))
			.addDuration(uint64.fromUint(100))
			.addHashAlgorithm(0)
			.addSecret(secret)
			.addRecipient(account2.address)
			.build();

		const transactionRoutesAPI = new TransactionRoutesApi(CONF.URL);

		new ConfirmedTransactionsListener(CONF.DOMAIN, 3000).given(account1.address, res => {
			const secretProofTransaction = new SecretProofTransaction.Builder()
				.addDeadline(deadline())
				.addHashAlgorithm(0)
				.addSecret(secret)
				.addProof(seedSecret)
				.build();

			new UnconfirmedTransactionsListener(CONF.DOMAIN, 3000).addedToAccount(account2.address, res => {
				console.log(res);
				done();
			});

			setTimeout(() => {
				transactionRoutesAPI
					.announceTransaction(secretProofTransaction.signTransaction(account2))
					.then(x => {
						console.log('announce', x);
					})
					.catch(err => {
						console.log('error', err);
					});
			}, 1000);
		});
		console.log(secretLockTransaction.signTransaction(account1));

		setTimeout(() => {
			transactionRoutesAPI
				.announceTransaction(secretLockTransaction.signTransaction(account1))
				.then(x => {
					console.log('announce', x);
				})
				.catch(err => {
					console.log('error', err);
				});
		}, 1000);
	});
});
