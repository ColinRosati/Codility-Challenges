export const solution = function (A) {
	var missing = 1;
	if (A.length === 0) {
		return missing;
	}
	let ordinaryArray = A.length + 1;
	let ordinaryArraySum = (ordinaryArray * (1 + ordinaryArray)) / 2;
	let givenArraySum = A.reduce((acc, curr) => acc + curr);
	return ordinaryArraySum - givenArraySum;
};
