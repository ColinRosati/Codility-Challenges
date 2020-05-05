import { expect } from "chai";

import { solution } from "./solution";

describe("PermMissingElem", () => {
	it("should return 6 as the shortest time a frog can jump to the other side of the river 5, [1, 3, 1, 4, 2, 3, 5, 4]", () => {
		let results = solution(5, [1, 3, 1, 4, 2, 3, 5, 4]);
		expect(results).to.equal(6);
	});

	it("should return -1 as not all leaves can lead to crossing the river 2, [2, 2, 2, 2, 2]", () => {
		let results = solution(2, [2, 2, 2, 2, 2]);
		expect(results).to.equal(-1);
	});

	it("should return 0 atime to jump across the river 1, [1]", () => {
		let results = solution(1, [1]);
		expect(results).to.equal(0);
	});

	it("should return 4 as the minimal difference in arr with 1 item[3]", () => {
		let results = solution(3, [1, 3, 1, 3, 2, 1, 3]);
		expect(results).to.equal(4);
	});

	xit("should return correct with only one element in the two parts [5,4,3]", () => {
		let results = solution([5, 4, 3]);
		expect(results).to.equal(2);
	});
});
