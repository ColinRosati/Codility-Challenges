import { expect } from "chai";

import { solution } from "./solution";

describe("FrogJmp", () => {
	it("should return 3 as it is the minimal jump distance 10, 85, 30", () => {
		let results = solution(10, 85, 30);
		expect(results).to.equal(3);
	});

	it("should return 1 if extreme jump no jump needed", () => {
		let results = solution(10, 101, 500);
		expect(results).to.equal(1);
	});

	it("should return 1 if small extreme jump no jump needed", () => {
		let results = solution(10, 11, 1);
		expect(results).to.equal(1);
	});
});
