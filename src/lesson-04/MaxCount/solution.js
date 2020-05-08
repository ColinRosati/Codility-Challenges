export const solution = (N, A) => {
	let counter = Array(N).fill(0);
	let maxCount = 0;

	A.forEach((item, index) => {
		if (counter[item - 1] === undefined) {
			counter = Array(N).fill(maxCount);
		} else {
			counter[item - 1]++;
			if (counter[item - 1] > maxCount) {
				maxCount = counter[item - 1];
			}
		}
	});

	return counter;
};
