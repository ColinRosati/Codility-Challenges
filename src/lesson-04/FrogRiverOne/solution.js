export const solution = (X, A) => {
	let leafPositions = new Set();
	let count = 0;
	for (var [index, item] of A.entries()) {
		leafPositions.add(item);
		if (item !== undefined) {
			if (leafPositions.size === X) {
				return index;
			}
		}
	}
	return -1;
};
