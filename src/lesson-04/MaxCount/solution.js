export const solution = (N, A) => {
	console.log("enter", N, A);
	const counter = {};
	for (let [index, item] of Object.entries(Array(N).fill(0))) {
		counter[+index + 1] = item;
	}

	let maxCount;
	A.forEach((item, index) => {
		if (counter[item] === undefined) {
			maxCount = Object.values(counter).reduce((a, b) => (a > b ? a : b));
			Object.keys(counter).forEach((item) => (counter[item] = maxCount));
		} else {
			counter[item]++;
		}
	});

	return Object.values(counter);
};
