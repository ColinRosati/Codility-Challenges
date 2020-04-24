import { expect } from "chai";

import { solution } from "./solution";

// use eql for deaep equality
describe("Cyclic Rotation", () => {
	it("should return array rotated by 3  input = [3, 8, 9, 7, 6], 3 output = [9, 7, 6, 3, 8]", () => {
		let results = solution([3, 8, 9, 7, 6], 3);
		expect(results).to.eql([9, 7, 6, 3, 8]);
	});

	it("should return array rotated by 3  input = [0,0,0], 3 output = [0,0,0]", () => {
		let results = solution([0, 0, 0], 1);
		expect(results).to.eql([0, 0, 0]);
	});

	it("should return 0 if empty array", () => {
		let results = solution([]);
		expect(results).to.eql([]);
	});

	it("should return array with single element", () => {
		let results = solution([1], 5);
		expect(results).to.eql([1]);
	});
});
