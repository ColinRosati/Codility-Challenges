export function solution(A, K) {
	if (A.length === 0) {
		return A;
	}
	var rotatedArr = A;
	var count = 0;
	while (count < K) {
		var end = A.pop();
		rotatedArr.unshift(end);
		count++;
	}
	return rotatedArr;
}
