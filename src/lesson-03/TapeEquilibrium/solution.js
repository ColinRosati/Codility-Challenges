export const solution = (A) => {
	if (A.length === 1) {
		return A[0];
	}
	let sumA = A.reduce((a, b) => a + b, 0);
	let sumB = 0;
	let diff = [];
	for (let i = 0; i < A.length - 1; i++) {
		sumB += A[i];
		sumA -= A[i];
		diff[i] = Math.abs(sumA - sumB);
	}
	let D = diff.sort((a, b) => a - b, 0);
	return D[0];
};
