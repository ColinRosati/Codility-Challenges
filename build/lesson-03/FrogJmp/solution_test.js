"use strict";

var _chai = require("chai");

var _solution = require("./solution");

describe("FrogJmp", function () {
  it("should return 3 as it is the minimal jump distance 10, 85, 30", function () {
    var results = (0, _solution.solution)(10, 85, 30);
    (0, _chai.expect)(results).to.equal(3);
  });
  it("should return 1 if extreme jump no jump needed", function () {
    var results = (0, _solution.solution)(10, 101, 500);
    (0, _chai.expect)(results).to.equal(1);
  });
  it("should return 1 if small extreme jump no jump needed", function () {
    var results = (0, _solution.solution)(10, 11, 1);
    (0, _chai.expect)(results).to.equal(1);
  });
});