"use strict";

var _chai = require("chai");

var _solution = require("./solution");

describe('PassingCars', function () {
  it('return 5 as the pairs of passing cars simple array', function () {
    var results = (0, _solution.solution)([0, 1, 0, 1, 1]);
    (0, _chai.expect)(results).to.equal(5);
  });
  it('single element', function () {
    var results = (0, _solution.solution)([0]);
    (0, _chai.expect)(results).to.equal(0);
  });
  it('double element', function () {
    var results = (0, _solution.solution)([0, 1]);
    (0, _chai.expect)(results).to.equal(1);
  });
});