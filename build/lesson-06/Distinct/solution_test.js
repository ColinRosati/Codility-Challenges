"use strict";

var _chai = require("chai");

var _solution = require("./solution");

describe('Distinct', function () {
  it('should return 3 distinct numbers in a simple array', function () {
    var results = (0, _solution.solution)([2, 1, 1, 2, 3, 1]);
    (0, _chai.expect)(results).to.equal(3);
  });
});