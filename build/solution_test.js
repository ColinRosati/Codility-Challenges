"use strict";

var _chai = require("chai");

var _solution = require("./solution");

describe("PermMissingElem", function () {
  it("should return 4 as it is the missing element of [2, 1, 3, 5]", function () {
    var results = (0, _solution.solution)([2, 1, 3, 5]);
    (0, _chai.expect)(results).to.equal(4);
  });
  it("should return 1 if missing element", function () {
    var results = (0, _solution.solution)([]);
    (0, _chai.expect)(results).to.equal(1);
  });
  it("should return 1 if single element", function () {
    var results = (0, _solution.solution)([2]);
    (0, _chai.expect)(results).to.equal(1);
  });
});