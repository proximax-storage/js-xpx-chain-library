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

import PartialTransactionsListener from '../../src/listeners/PartialTransactionsListener';
import FakeTransaction from './FakeTransaction.spec';
import CONF from '../conf/conf';

describe('PartialTransactionsListener', () => {
	it('should create partial transactions listener added to account', done => {
		const account = 'SBE6CS7LZKJXLDVTNAC3VZ3AUVZDTF3PACNFIXFN';

		new PartialTransactionsListener(CONF.DOMAIN, CONF.PORT).addedToAccount(account, res => {
			console.log(res);
			done();
		});

		setTimeout(() => {
			new FakeTransaction().createPartialAndAnnounce();
		}, 1000);
	});

	it('should create partial transactions listener removed to account', done => {
		const account = 'SBE6CS7LZKJXLDVTNAC3VZ3AUVZDTF3PACNFIXFN';

		new PartialTransactionsListener(CONF.DOMAIN, CONF.PORT).removedFromAccount(account, res => {
			console.log(res);
			done();
		});
	});
});

