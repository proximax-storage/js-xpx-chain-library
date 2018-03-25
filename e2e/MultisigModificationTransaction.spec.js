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
import MultisigModificationTransaction from '../src/transactions/MultisigModificationTransaction';
import deadline from '../src/transactions/Deadline';
import CONF from './conf/conf';


describe('MultisigModificationTransaction E2E', () => {
	const keyPair = {
		publicKey: 'b0dad4ef0d6b225f04200f4a57cbf178bdd751e36a02ca3a02eab0dd97d54764',
		privateKey: '37cfa9c9d65f27bbf189a92ef85fc0dcd93a6d255d4066da132ab1833223f63c'
	};

	it('should announce the transaction to the network successfully', done => {
		const multisigAggregateTransaction = {
			deadline: deadline(),
			minRemovalDelta: 1,
			minApprovalDelta: 1,
			modifications: [{
				type: 0,
				cosignatoryPublicKey: '7E81F9CD78895D963F2F67C3FBE59148780675454166DF940B388891156F1CFF'
			}]
		};
		const verifiableTransaction = new MultisigModificationTransaction.Builder()
			.addDeadline(multisigAggregateTransaction.deadline)
			.addMinRemovalDelta(multisigAggregateTransaction.minRemovalDelta)
			.addMinApprovalDelta(multisigAggregateTransaction.minApprovalDelta)
			.addModifications(multisigAggregateTransaction.modifications)
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
