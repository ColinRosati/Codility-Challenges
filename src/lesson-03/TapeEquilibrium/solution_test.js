import { expect } from "chai";

import { solution } from "./solution";

describe("PermMissingElem", () => {
	it("should return 1 as the minimal difference that can be achieved between the absolute sum of two parts in [3, 1, 2, 4, 3]", () => {
		let results = solution([3, 1, 2, 4, 3]);
		expect(results).to.equal(1);
	});

	it("should return 1 as the minimal difference in arr with 3 items[3, 1, 1]", () => {
		let results = solution([3, 1, 1]);
		expect(results).to.equal(1);
	});
	it("should return 2 as the minimal difference in arr with 2 items[3, 1]", () => {
		let results = solution([3, 1]);
		expect(results).to.equal(2);
	});
	it("should return 3 as the minimal difference in arr with 1 item[3]", () => {
		let results = solution([3]);
		expect(results).to.equal(3);
	});

	it("should return correct with only one element in the two parts [5,4,3]", () => {
		let results = solution([5, 4, 3]);
		expect(results).to.equal(2);
	});
});
