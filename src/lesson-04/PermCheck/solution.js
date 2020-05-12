export const solution = (A) => {
	let uniqueArray = new Set();
	for (var i of A) {
		if (uniqueArray.has(i) || i > A.length) {
			return 0;
		}
		uniqueArray.add(i);
	}
	return 1;
};
