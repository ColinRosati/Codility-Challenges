"use strict";

var _chai = require("chai");

var _solution = require("./solution");

var input = [[[3, 8, 9, 7, 6], 3], [[0, 0, 0], 1], [[1, 2, 3, 4], 4], [[], 1]]; // console.log(solution());
// input.forEach((item) => solution(item));
// solution(input[0][0], input[0][1]);
// solution(input[1][0], input[1][1]);
// solution(input[2][0], input[2][1]);
// solution(input[3][0], input[3][1]);
// use eql for deaep equality

describe("Binary Gap", function () {
  it("should return array rotated by 3  input = [3, 8, 9, 7, 6], 3 output = [9, 7, 6, 3, 8]", function () {
    var results = (0, _solution.solution)([3, 8, 9, 7, 6], 3);
    (0, _chai.expect)(results).to.eql([9, 7, 6, 3, 8]);
  });
  it("should return array rotated by 3  input = [0,0,0], 3 output = [0,0,0]", function () {
    var results = (0, _solution.solution)([0, 0, 0], 1);
    (0, _chai.expect)(results).to.eql([0, 0, 0]);
  });
  it("should return 0 if empty array", function () {
    var results = (0, _solution.solution)([]);
    (0, _chai.expect)(results).to.eql([]);
  });
  it("should return array with single element", function () {
    var results = (0, _solution.solution)([1], 5);
    (0, _chai.expect)(results).to.eql([1]);
  });
});