import { expect } from "chai";

import { solution } from "./solution";

describe("CountDiv", () => {
	it("should return 3 elements divisble by 2 inbetween 6 and 11", () => {
		let results = solution(6, 11, 2);
		expect(results).to.equal(3);
	});

	it("should return 20 for simple 11, 345, K = 17", () => {
		let results = solution(11, 345, 17);
		expect(results).to.equal(20);
	});

	it("should return 0 for minimal 1, 1, 11", () => {
		let results = solution(1, 1, 11);
		expect(results).to.equal(0);
	});

	it("should return 1 for minimal 0, 0, 11", () => {
		let results = solution(0, 0, 11);
		expect(results).to.equal(1);
	});
});
