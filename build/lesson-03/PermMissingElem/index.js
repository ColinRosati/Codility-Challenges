"use strict";

var _require = require("./solution"),
    solution = _require.solution;

var input = [[2, 3, 1, 5], [], [2], [1], [4, 7, 5], [6, 8, 9, 10]];
input.forEach(function (item, index) {
  return solution(input[index]);
});