import { expect } from "chai";

import { solution } from "./solution";

describe("MaxCount", () => {
	it("should return correct counter tally with input 5, [3, 4, 4, 6, 1, 4, 4]", () => {
		let results = solution(5, [3, 4, 4, 6, 1, 4, 4]);
		expect(results).to.eql([3, 2, 2, 4, 2]);
	});

	it("should correct with one value 1, [1,1,1]", () => {
		let results = solution(1, [1, 1, 1]);
		expect(results).to.eql([3]);
	});

	it("should return correct with 6 maxCounter operations 3, [1,1,2,1,2,3]", () => {
		let results = solution(3, [1, 1, 2, 1, 2, 3]);
		expect(results).to.eql([3, 2, 1]);
	});

	it("should return correct with 10 maxCounter operations 4,[2,6,2,1,4,2,2,3,7,3]", () => {
		let results = solution(4, [2, 6, 2, 1, 4, 2, 2, 3, 7, 3]);
		expect(results).to.eql([4, 4, 5, 4]);
	});
});
