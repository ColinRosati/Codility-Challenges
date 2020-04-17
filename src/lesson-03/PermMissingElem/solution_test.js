import { expect } from "chai";

import { solution } from "./solution";

describe("PermMissingElem", () => {
	it("should return 4 as it is the missing element of [2, 1, 3, 5]", () => {
		let results = solution([2, 1, 3, 5]);
		expect(results).to.equal(4);
	});

	it("should return 1 if missing element", () => {
		let results = solution([]);
		expect(results).to.equal(1);
	});

	it("should return 1 if single element", () => {
		let results = solution([2]);
		expect(results).to.equal(1);
	});
});
