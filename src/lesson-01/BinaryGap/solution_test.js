import { expect } from "chai";

import { solution } from "./solution";

describe("Binary Gap", () => {
	it("should return 5 as it is the missing element of 10000010001", () => {
		let results = solution(1041);
		expect(results).to.equal(5);
	});

	it("should return 1 if no binarygap 111", () => {
		let results = solution(15);
		expect(results).to.equal(0);
	});

	it("should return 0 if trailing 0's 10000", () => {
		let results = solution(32);
		expect(results).to.equal(0);
	});

	it("should return 0 extremes  1", () => {
		let results = solution(1);
		expect(results).to.equal(0);
	});

	it("should return 1 extremes  5", () => {
		let results = solution(5);
		expect(results).to.equal(1);
	});
});
