"use strict";

var _chai = require("chai");

var _solution = require("./solution");

describe("Odd Occurences in Array", function () {
  it("should return the unique number in array [9, 3, 9, 3, 9, 7, 9] = 7", function () {
    var results = (0, _solution.solution)([9, 3, 9, 3, 9, 7, 9]);
    (0, _chai.expect)(results).to.equal(7);
  });
  it("tshould return the unique number in array [2, 2, 4, 3, 8, 4, 2, 4, 3, 3, 6]", function () {
    var results = (0, _solution.solution)([2, 2, 4, 3, 8, 4, 2, 4, 3, 6, 6]);
    (0, _chai.expect)(results).to.equal(8);
  });
  it("should return [] if empty array", function () {
    var results = (0, _solution.solution)([]);
    (0, _chai.expect)(results).to.be.an("array").that.is.empty;
  });
  it("should return array with single element", function () {
    var results = (0, _solution.solution)([1]);
    (0, _chai.expect)(results).to.equal(1);
  });
  it("should result in 0 if no unique", function () {
    var results = (0, _solution.solution)([1, 1]);
    (0, _chai.expect)(results).to.equal(0);
  });
});