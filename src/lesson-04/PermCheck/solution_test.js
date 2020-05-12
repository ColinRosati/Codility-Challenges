import { expect } from "chai";

import { solution } from "./solution";

describe("PermCheck", () => {
	it("should return 1 in small array [4, 1, 3, 2]", () => {
		let results = solution([4, 1, 3, 2]);
		expect(results).to.equal(1);
	});

	it("should return 0 as no permutation in [4, 1, 3]", () => {
		let results = solution([4, 1, 3]);
		expect(results).to.equal(0);
	});

	it("should return 1 for single element  [1]", () => {
		let results = solution([1]);
		expect(results).to.equal(1);
	});

	it("should return 0 for single element  [2]", () => {
		let results = solution([2]);
		expect(results).to.equal(0);
	});

	it("should return 1 for two elements  [2, 1]", () => {
		let results = solution([2, 1]);
		expect(results).to.equal(1);
	});

	it("should return 0 in antiSum1 sum is true but not permutation [1,2,3,6]", () => {
		let results = solution([1, 2, 3, 6]);
		expect(results).to.equal(0);
	});
});
