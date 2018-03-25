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

import { expect } from 'chai';

const { MosaicRoutesApi } = require('../../src/index');

describe('MosaicRoutesApi', () => {
	let mosaicRoutesApi;

	const mosaicId = 'd525ad41d95fcf29';
	const mosaicIdsBody = {
		mosaicIds: ['d525ad41d95fcf29']
	};

	const namespaceId = '84b3552d375ffa4b';

	beforeEach(() => {
		mosaicRoutesApi = new MosaicRoutesApi();
	});

	const checkMosaicInfo = mosaicInfo => {
		/* eslint-disable no-unused-expressions */
		expect(mosaicInfo.meta.active).to.not.be.undefined;
		expect(mosaicInfo.meta.index).to.not.be.undefined;
		expect(mosaicInfo.meta.id).to.not.be.undefined;

		expect(mosaicInfo.mosaic.namespaceId).to.not.be.undefined;
		expect(mosaicInfo.mosaic.mosaicId).to.not.be.undefined;
		expect(mosaicInfo.mosaic.supply).to.not.be.undefined;
		expect(mosaicInfo.mosaic.height).to.not.be.undefined;
		expect(mosaicInfo.mosaic.owner).to.not.be.undefined;
		expect(mosaicInfo.mosaic.properties).to.not.be.undefined;
		expect(mosaicInfo.mosaic.properties.length).to.be.equal(3);
		expect(mosaicInfo.mosaic.levy).to.not.be.undefined;
		/* eslint-enable */
	};

	const checkMosaicNameInfo = mosaicNameInfo => {
		/* eslint-disable no-unused-expressions */
		expect(mosaicNameInfo.mosaicId).to.not.be.undefined;
		expect(mosaicNameInfo.name).to.not.be.undefined;
		expect(mosaicNameInfo.parentId).to.not.be.undefined;
		/* eslint-enable */
	};

	describe('getMosaic', () => {
		it('should call getMosaic successfully', done => {
			mosaicRoutesApi.getMosaic(mosaicId).then(mosaicInfo => {
				checkMosaicInfo(mosaicInfo);
				done();
			});
		});
	});

	describe('getMosaics', () => {
		it('should call getMosaics successfully', done => {
			mosaicRoutesApi.getMosaics(mosaicIdsBody).then(mosaicsInfo => {
				mosaicsInfo.map(mosaicInfo => checkMosaicInfo(mosaicInfo));
				done();
			});
		});
	});
	describe('getMosaicsFromNamespace', () => {
		it('should call getMosaicsFromNamespace successfully', done => {
			mosaicRoutesApi.getMosaicsFromNamespace(namespaceId).then(mosaicsInfo => {
				mosaicsInfo.map(mosaicInfo => checkMosaicInfo(mosaicInfo));
				done();
			});
		});
	});

	describe('getMosaicsName', () => {
		it('should call getMosaicsName successfully', done => {
			mosaicRoutesApi.getMosaicsName(mosaicIdsBody).then(mosaicNamesInfo => {
				mosaicNamesInfo.map(mosaicNameInfo => checkMosaicNameInfo(mosaicNameInfo));
				done();
			});
		});
	});
});
