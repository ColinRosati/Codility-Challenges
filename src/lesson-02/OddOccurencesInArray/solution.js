export function solution(A) {
	if (!A || A.length === 0) {
		return A;
	}

	let unique;
	const sortedObj = {};
	const sortedArr = A.sort((a, b) => a - b);
	sortedArr.forEach((item) => (sortedObj[item] = 1));

	sortedArr.forEach((item, index, arr) => {
		if (item == arr[index + 1]) {
			sortedObj[item] += 1;
		}
	});

	for (let [key, value] of Object.entries(sortedObj)) {
		if (value === 1) {
			unique = key;
			return +key;
		}
	}

	if (!unique) {
		return 0;
	}
}
