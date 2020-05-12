"use strict";

var _chai = require("chai");

var _solution = require("./solution");

describe("PermCheck", function () {
  it("should return 1 in small array [4, 1, 3, 2]", function () {
    var results = (0, _solution.solution)([4, 1, 3, 2]);
    (0, _chai.expect)(results).to.equal(1);
  });
  it("should return 0 as no permutation in [4, 1, 3]", function () {
    var results = (0, _solution.solution)([4, 1, 3]);
    (0, _chai.expect)(results).to.equal(0);
  });
  it("should return 1 for single element  [1]", function () {
    var results = (0, _solution.solution)([1]);
    (0, _chai.expect)(results).to.equal(1);
  });
  it("should return 0 for single element  [2]", function () {
    var results = (0, _solution.solution)([2]);
    (0, _chai.expect)(results).to.equal(0);
  });
  it("should return 1 for two elements  [2, 1]", function () {
    var results = (0, _solution.solution)([2, 1]);
    (0, _chai.expect)(results).to.equal(1);
  });
  it("should return 0 in antiSum1 sum is true but not permutation [1,2,3,6]", function () {
    var results = (0, _solution.solution)([1, 2, 3, 6]);
    (0, _chai.expect)(results).to.equal(0);
  });
});