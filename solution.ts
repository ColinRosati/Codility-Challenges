export const solution = (A: number[], K: number): number[] => {
	if (A.length === 0) {
		console.log("empty", A);
		return A;
	}
	return cycleArr(A, K);
};

const cycleArr = (A: number[], K: number): number[] => {
	let rotatedArr = A;
	let count = 0;
	while (count < K) {
		console.log("iter", A);
		let end = A.pop();
		rotatedArr.unshift(end);
		count++;
	}
	return rotatedArr;
};
