const { solution } = require("./solution");

const input = [[2, 3, 1, 5], [], [2], [1], [4, 7, 5], [6, 8, 9, 10]];

input.forEach((item, index) => solution(input[index]));
