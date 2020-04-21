"use strict";

var _chai = require("chai");

var _solution = require("./solution");

describe("Binary Gap", function () {
  it("should return 5 as it is the missing element of 10000010001", function () {
    var results = (0, _solution.solution)(1041);
    (0, _chai.expect)(results).to.equal(5);
  });
  xit("should return 1 if no binarygap 111", function () {
    var results = (0, _solution.solution)(15);
    (0, _chai.expect)(results).to.equal(0);
  });
  xit("should return 0 if trailing 0's 10000", function () {
    var results = (0, _solution.solution)(32);
    (0, _chai.expect)(results).to.equal(0);
  });
  it("should return 0 extremes  1", function () {
    var results = (0, _solution.solution)(1);
    (0, _chai.expect)(results).to.equal(0);
  });
  it("should return 1 extremes  5", function () {
    var results = (0, _solution.solution)(5);
    (0, _chai.expect)(results).to.equal(1);
  });
});