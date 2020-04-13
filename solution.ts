export const solution = (A: number[]): number => {
	if (!A || A.length === 0) {
		console.log("no Array", A);
		return 0;
	}

	if (A.length % 2) {
		let unique = remover(A, findDouble(A));
		console.log("unique", unique);
		return unique;
	}

	return 0;
};

const remover = (A: number[], doubles: number[]): number => {
	let unique: number;
	let count = 0;
	A.forEach((item, index) => {
		if (count >= doubles.length) {
			count = 0;
		}
		if (item !== doubles[count]) {
			unique = item;
		}
		count++;
	});
	return unique;
};

const findDouble = (A: number[]): number[] => {
	let doubles = [];
	console.log(A, A.length);
	for (var i = 0; i < A.length; i++) {
		for (var j = i + 1; j < A.length; j++) {
			if (A[i] === A[j]) {
				if (A[i] === doubles[i]) {
					break;
				}
				doubles.push(A[i]);
				break;
			}
		}
	}
	return deleteRepeat(doubles);
};

const deleteRepeat = (doubles: number[]): number[] => {
	let noRepeats = doubles.filter((item, index) => {
		return doubles.indexOf(item) === index;
	});
	return noRepeats;
};
