const { solution } = require("./solution");

const input = [
	[[3, 8, 9, 7, 6], 3],
	[[0, 0, 0], 1],
	[[1, 2, 3, 4], 4],
	[[], 1],
];

// console.log(solution());
// input.forEach((item) => solution(item));

solution(input[0][0], input[0][1]);
solution(input[1][0], input[1][1]);
solution(input[2][0], input[2][1]);
solution(input[3][0], input[3][1]);

// return solution();
