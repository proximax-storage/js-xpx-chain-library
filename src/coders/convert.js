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

import charMapping from './charMapping';

const Char_To_Nibble_Map = (function () {
	const builder = charMapping.createBuilder();
	builder.addRange('0', '9', 0);
	builder.addRange('a', 'f', 10);
	builder.addRange('A', 'F', 10);
	return builder.map;
})();

const Char_To_Digit_Map = (function () {
	const builder = charMapping.createBuilder();
	builder.addRange('0', '9', 0);
	return builder.map;
})();

const Nibble_To_Char_Map = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function tryParseByte(char1, char2) {
	const nibble1 = Char_To_Nibble_Map[char1];
	const nibble2 = Char_To_Nibble_Map[char2];
	return undefined === nibble1 || undefined === nibble2
		? undefined
		: (nibble1 << 4) | nibble2;
}

/** @exports coders/convert */
const convert = {
	/**
	 * Decodes two hex characters into a byte.
	 * @param {string} char1 The first hex digit.
	 * @param {string} char2 The second hex digit.
	 * @returns {number} The decoded byte.
	 */
	toByte: (char1, char2) => {
		const byte = tryParseByte(char1, char2);
		if (undefined === byte)
			throw Error(`unrecognized hex char '${char1}${char2}'`);

		return byte;
	},

	/**
	 * Determines whether or not a string is a hex string.
	 * @param {string} input The string to test.
	 * @returns {boolean} true if the input is a hex string, false otherwise.
	 */
	isHexString: input => {
		if (0 !== input.length % 2)
			return false;

		for (let i = 0; i < input.length; i += 2) {
			if (undefined === tryParseByte(input[i], input[i + 1]))
				return false;
		}

		return true;
	},

	/**
	 * Converts a hex string to a uint8 array.
	 * @param {string} input A hex encoded string.
	 * @returns {Uint8Array} A uint8 array corresponding to the input.
	 */
	hexToUint8: input => {
		if (0 !== input.length % 2)
			throw Error(`hex string has unexpected size '${input.length}'`);

		const output = new Uint8Array(input.length / 2);
		for (let i = 0; i < input.length; i += 2)
			output[i / 2] = convert.toByte(input[i], input[i + 1]);

		return output;
	},

	/**
	 * Reversed convertion hex string to a uint8 array.
	 * @param {string} input A hex encoded string.
	 * @returns {Uint8Array} A uint8 array corresponding to the input.
	 */
	hexToUint8Reverse: input => {
		if (0 !== input.length % 2)
			throw Error(`hex string has unexpected size '${input.length}'`);

		const output = new Uint8Array(input.length / 2);
		for (let i = 0; i < input.length; i += 2)
			output[output.length - 1 - (i / 2)] = convert.toByte(input[i], input[i + 1]);

		return output;
	},

	/**
	 * Converts a uint8 array to a hex string.
	 * @param {Uint8Array} input A uint8 array.
	 * @returns {string} A hex encoded string corresponding to the input.
	 */
	uint8ToHex: input => {
		let s = '';
		for (const byte of input) {
			s += Nibble_To_Char_Map[byte >> 4];
			s += Nibble_To_Char_Map[byte & 0x0F];
		}

		return s;
	},

	/**
	 * Tries to parse a string representing an unsigned integer.
	 * @param {string} str The string to parse.
	 * @returns {number} The number represented by the input or undefined.
	 */
	tryParseUint: str => {
		if ('0' === str)
			return 0;

		let value = 0;
		for (const char of str) {
			const digit = Char_To_Digit_Map[char];
			if (undefined === digit || (0 === value && 0 === digit))
				return undefined;

			value *= 10;
			value += digit;

			if (value > Number.MAX_SAFE_INTEGER)
				return undefined;
		}

		return value;
	},

	/**
	 * Converts a uint8 array to a uint32 array.
	 * @param {Uint8Array} input A uint8 array.
	 * @returns {Uint32Array} A uint32 array created from the input.
	 */
	uint8ToUint32: input => new Uint32Array(input.buffer),

	/**
	 * Converts a uint32 array to a uint8 array.
	 * @param {Uint32Array} input A uint32 array.
	 * @returns {Uint8Array} A uint8 array created from the input.
	 */
	uint32ToUint8: input => new Uint8Array(input.buffer),

	/** Converts an unsigned byte to a signed byte with the same binary representation.
	 * @param {number} input An unsigned byte.
	 * @returns {number} A signed byte with the same binary representation as the input.
	 * */
	uint8ToInt8: input => {
		if (0xFF < input)
			throw Error(`input '${input}' is out of range`);

		return input << 24 >> 24;
	},

	/** Converts a signed byte to an unsigned byte with the same binary representation.
	 * @param {number} input A signed byte.
	 * @returns {number} An unsigned byte with the same binary representation as the input.
	 * */
	int8ToUint8: input => {
		if (127 < input || -128 > input)
			throw Error(`input '${input}' is out of range`);

		return input & 0xFF;
	},

	/**
	 * Convert UTF-8 to hex
	 * @param {string} str - An UTF-8 string
	 * @return {string}
	 */
	utf8ToHex: str => {
		const rawString = convert.rstr2utf8(str);
		let result = '';
		for (let i = 0; i < rawString.length; i++)
			result += ('0' + rawString.charCodeAt(i).toString(16)).slice(-2);


		return result;
	},

	/**
	 * Converts a raw javascript string into a string of single byte characters using utf8 encoding.
	 * This makes it easier to perform other encoding operations on the string.
	 *
	 * @param {string} input - A raw string
	 *
	 * @return {string} - UTF-8 string
	 */
	rstr2utf8: input => {
		let output = '';

		for (let n = 0; n < input.length; n++) {
			const c = input.charCodeAt(n);

			if (128 > c) {
				output += String.fromCharCode(c);
			} else if ((127 < c) && (2048 > c)) {
				output += String.fromCharCode((c >> 6) | 192);
				output += String.fromCharCode((c & 63) | 128);
			} else {
				output += String.fromCharCode((c >> 12) | 224);
				output += String.fromCharCode(((c >> 6) & 63) | 128);
				output += String.fromCharCode((c & 63) | 128);
			}
		}

		return output;
	},

	// http://www.onicos.com/staff/iz/amuse/javascript/expert/utf.txt

	/* utf.js - UTF-8 <=> UTF-16 convertion
	*
	* Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
	* Version: 1.0
	* LastModified: Dec 25 1999
	* This library is free.  You can redistribute it and/or modify it.
	*/

	Utf8ArrayToStr: array => {
		var out, i, len, c;
		var char2, char3;

		out = "";
		len = array.length;
		i = 0;
		while (i < len) {
		c = array[i++];
		switch (c >> 4)
			{
				case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
				// 0xxxxxxx
				out += String.fromCharCode(c);
				break;
				case 12: case 13:
				// 110x xxxx   10xx xxxx
				char2 = array[i++];
				out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
				break;
				case 14:
				// 1110 xxxx  10xx xxxx  10xx xxxx
				char2 = array[i++];
				char3 = array[i++];
				out += String.fromCharCode(((c & 0x0F) << 12) |
											((char2 & 0x3F) << 6) |
											((char3 & 0x3F) << 0));
				break;
			}
		}
		return out;
	}
};

export default convert;
