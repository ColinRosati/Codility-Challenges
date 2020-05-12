"use strict";

var _chai = require("chai");

var _solution = require("./solution");

describe("CountDiv", function () {
  it("should return 3 elements divisble by 2 inbetween 6 and 11", function () {
    var results = (0, _solution.solution)(6, 11, 2);
    (0, _chai.expect)(results).to.equal(3);
  });
  it("should return 20 for simple 11, 345, K = 17", function () {
    var results = (0, _solution.solution)(11, 345, 17);
    (0, _chai.expect)(results).to.equal(20);
  });
  it("should return 0 for minimal 1, 1, 11", function () {
    var results = (0, _solution.solution)(1, 1, 11);
    (0, _chai.expect)(results).to.equal(0);
  });
  it("should return 1 for minimal 0, 0, 11", function () {
    var results = (0, _solution.solution)(0, 0, 11);
    (0, _chai.expect)(results).to.equal(1);
  });
});