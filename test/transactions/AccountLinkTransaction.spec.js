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

import expect from 'expect.js';
import AccountLinkTransaction from '../../src/transactions/AccountLinkTransaction';
import deadline from '../../src/transactions/Deadline';

describe('AccountLinkTransaction', () => {
	const keyPair = {
		publicKey: '9a49366406aca952b88badf5f1e9be6ce4968141035a60be503273ea65456b24',
		privateKey: '041e2ce90c31cd65620ed16ab7a5a485e5b335d7e61c75cd9b3a2fed3e091728'
	};

	it('should create transfer transaction', () => {
		const accountLinkTransaction = {
			deadline: deadline(),
			remoteAccountKey: 'SDUP5PLHDXKBX3UU5Q52LAY4WYEKGEWC6IB3VBFM',
			linkAction: 0
		};
		const verifiableTransaction = new AccountLinkTransaction.Builder()
			.addDeadline(accountLinkTransaction.deadline)
			.addRemoteAccountKey(accountLinkTransaction.remoteAccountKey)
			.addLinkAction(accountLinkTransaction.linkAction)
			.build();

		const transactionPayload = verifiableTransaction.signTransaction(keyPair);

		expect(transactionPayload.payload.substring(
			240,
			transactionPayload.payload.length
		)).to.be.equal('90E8FEBD671DD41BEE94EC3BA5831CB608A312C2F203BA84AC00');
	});
});
