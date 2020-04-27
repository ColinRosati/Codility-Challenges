"use strict";

var _chai = require("chai");

var _solution = require("./solution");

describe("Binary Gap", function () {
  it("should return 4 as it is the missing element of [2, 1, 3, 5]", function () {
    var results = (0, _solution.solution)(1041);
    (0, _chai.expect)(results).to.equal(4);
  });
  it("should return 1 if no binarygap 111", function () {
    var results = (0, _solution.solution)(15);
    (0, _chai.expect)(results).to.equal(0);
  });
  it("should return 1 if single element", function () {
    var results = (0, _solution.solution)([2]);
    (0, _chai.expect)(results).to.equal(1);
  });
});