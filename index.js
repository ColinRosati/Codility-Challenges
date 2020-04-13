const { solution } = require("./solution");

const input = [
	[9, 3, 9, 3, 9, 7, 9],
	[2, 2, 4, 3, 7, 4, 2, 4, 3, 3, 6],
	[
		0,
		1,
		2,
		23,
		23,
		44,
		44,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		2,
		2,
		2,
		2,
		2,
		2,
		4,
		3,
		7,
		4,
		2,
		4,
		3,
		3,
		19,
	],
	[],
	[1, 2],
];

input.forEach((item, index) => {
	solution(input[index]);
});
// solution(input[0]);
// solution(input[1]);
// solution(input[2]);
// solution(input[3]);
