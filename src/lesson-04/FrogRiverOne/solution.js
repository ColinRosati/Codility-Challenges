export const solution = (X, A) => {
	console.log(X, A);
	linearArray(X);
	let pathSteps = linearArray(X);
	let positionPath = [];
	let solution = -1;

	const matches = (item) => positionPath.includes(item);

	for (var i = 0; i < A.length; i++) {
		positionPath.push(A[i]);
		if (pathSteps.every(matches)) {
			console.log("result", i);
			solution = i;
			return i;
		}
	}
	return solution;
};

const linearArray = (max) => {
	let _newArr = [];
	for (var x = 1; x <= max; x++) {
		_newArr.push(x);
	}
	return _newArr;
};
