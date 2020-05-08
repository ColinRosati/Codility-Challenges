"use strict";

var _chai = require("chai");

var _solution = require("./solution");

describe("MaxCount", function () {
  it("should return correct counter tally with input 5, [3, 4, 4, 6, 1, 4, 4]", function () {
    var results = (0, _solution.solution)(5, [3, 4, 4, 6, 1, 4, 4]);
    (0, _chai.expect)(results).to.eql([3, 2, 2, 4, 2]);
  });
  it("should correct with one value 1, [1,1,1]", function () {
    var results = (0, _solution.solution)(1, [1, 1, 1]);
    (0, _chai.expect)(results).to.eql([3]);
  });
  it("should return correct with 6 maxCounter operations 3, [1,1,2,1,2,3]", function () {
    var results = (0, _solution.solution)(3, [1, 1, 2, 1, 2, 3]);
    (0, _chai.expect)(results).to.eql([3, 2, 1]);
  });
  it("should return correct with 10 maxCounter operations 4,[2,6,2,1,4,2,2,3,7,3]", function () {
    var results = (0, _solution.solution)(4, [2, 6, 2, 1, 4, 2, 2, 3, 7, 3]);
    (0, _chai.expect)(results).to.eql([4, 4, 5, 4]);
  });
  xit("should return correct with only one element in the two parts [5,4,3]", function () {
    var results = (0, _solution.solution)([5, 4, 3]);
    (0, _chai.expect)(results).to.equal(2);
  });
});