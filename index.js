const { solution } = require("./solution");

const input = [
	[10, 85, 30],
	[0, 10, 1],
	[0, 10, 20],
	[10, 100, 10],
	[10, 10, 10],
	[9, 29, 10],
];

input.forEach((item, index) =>
	solution(input[index][0], input[index][1], input[index][2])
);
