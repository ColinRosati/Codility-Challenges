import { expect } from "chai";

import { solution } from "./solution";

describe("Odd Occurences in Array", () => {
	it("should return the unique number in array [9, 3, 9, 3, 9, 7, 9] = 7", () => {
		let results = solution([9, 3, 9, 3, 9, 7, 9]);
		expect(results).to.equal(7);
	});

	it("tshould return the unique number in array [2, 2, 4, 3, 8, 4, 2, 4, 3, 3, 6]", () => {
		let results = solution([2, 2, 4, 3, 8, 4, 2, 4, 3, 6, 6]);
		expect(results).to.equal(8);
	});

	it("should return [] if empty array", () => {
		let results = solution([]);
		expect(results).to.be.an("array").that.is.empty;
	});

	it("should return array with single element", () => {
		let results = solution([1]);
		expect(results).to.equal(1);
	});

	it("should result in 0 if no unique", () => {
		let results = solution([1, 1]);
		expect(results).to.equal(0);
	});
});
