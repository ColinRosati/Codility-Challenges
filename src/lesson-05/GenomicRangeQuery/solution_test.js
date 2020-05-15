import { expect } from 'chai';

import { solution } from './solution';

describe('GenomicRangeQuery', () => {
	it("should return [2, 4, 1] minimal impact for simple 'CAGCCTA', [2, 5, 0], [4, 5, 6]", () => {
		let results = solution('CAGCCTA', [2, 5, 0], [4, 5, 6]);
		expect(results).to.eql([2, 4, 1]);
	});

	it("should return [2,2,2] for single character singular string 'C', [0,0,0],[0,0,0]", () => {
		let results = solution('C', [0, 0, 0], [0, 0, 0]);
		expect(results).to.eql([2, 2, 2]);
	});

	it("should return [3,3,3,3] for double character string 'GG', [1,0,1,1],[0,0,0,1]", () => {
		let results = solution('GG', [1, 0, 1, 1], [0, 0, 0, 1]);
		expect(results).to.eql([3, 3, 3, 3]);
	});

	it("should return [1,1,1] for repeating characters string 'AAAAAAA', [2,1,0],[3,2,4]", () => {
		let results = solution('AAAAAAA', [2, 1, 0], [3, 2, 4]);
		expect(results).to.eql([1, 1, 1]);
	});

	it('small_length_string return [4,3,4,2,2]', () => {
		let results = solution('TCGT', [0, 2, 0, 3, 1], [3, 0, 3, 1, 1]);
		expect(results).to.eql([4, 3, 4, 2, 2]);
	});

	it('small_length_string_2 return [4,3,4,2,2]', () => {
		let results = solution('TTCATGC', [0, 5, 0, 2, 6], [1, 1, 4, 2, 5]);
		expect(results).to.eql([4, 3, 4, 2, 2]);
	});
});
