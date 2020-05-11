"use strict";

var _chai = require("chai");

var _solution = require("./solution");

describe("MaxCount", function () {
  it("should return 5 in small positive signed array [ 1, 3, 6, 4, 1, 2 ]", function () {
    var results = (0, _solution.solution)([1, 3, 6, 4, 1, 2]);
    (0, _chai.expect)(results).to.equal(5);
  });
  it("should return 6 in small positive signed array [ 3, 5, 7, 4, 1, 2 ]", function () {
    var results = (0, _solution.solution)([3, 5, 7, 4, 1, 2]);
    (0, _chai.expect)(results).to.equal(6);
  });
  it("should return 1 as thelowest int not in array  [ 7,9,6 ]", function () {
    var results = (0, _solution.solution)([7, 9, 6]);
    (0, _chai.expect)(results).to.equal(1);
  });
  it("should return 1 as the lowest int not in array  [4, 5, 6, 2]", function () {
    var results = (0, _solution.solution)([4, 5, 6, 2]);
    (0, _chai.expect)(results).to.equal(1);
  });
  it("should return 4 as the lowest int not in array [1, 2, 3]", function () {
    var results = (0, _solution.solution)([1, 2, 3]);
    (0, _chai.expect)(results).to.equal(4);
  });
  it("should 1 with negative signed array, [-1, -3]", function () {
    var results = (0, _solution.solution)([-1, -3]);
    (0, _chai.expect)(results).to.equal(1);
  });
  it("should return as the lowest of a single element test [2]", function () {
    var results = (0, _solution.solution)([2]);
    (0, _chai.expect)(results).to.equal(1);
  });
  it("should return 2 as the lowest of a single element test [1]", function () {
    var results = (0, _solution.solution)([1]);
    (0, _chai.expect)(results).to.equal(2);
  });
  it("should return 1 as the lowest in extreme array [-1000000, 1000000]", function () {
    var results = (0, _solution.solution)([-1000000, 1000000]);
    (0, _chai.expect)(results).to.equal(1);
  });
});