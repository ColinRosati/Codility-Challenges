"use strict";

var _chai = require("chai");

var _solution = require("./solution");

describe('ProductOfThree', function () {
  it('should return 60 as the maximal sum of a triplet in a simple array', function () {
    var results = (0, _solution.solution)([-3, 1, 2, -2, 5, 6]);
    (0, _chai.expect)(results).to.equal(60);
  });
  it('one triple', function () {
    var results = (0, _solution.solution)([10, 10, 10]);
    (0, _chai.expect)(results).to.equal(1000);
  });
  it('simple 2', function () {
    var results = (0, _solution.solution)([-5, 5, -5, 4]);
    (0, _chai.expect)(results).to.equal(125);
  });
});