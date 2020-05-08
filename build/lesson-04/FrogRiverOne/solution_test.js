"use strict";

var _chai = require("chai");

var _solution = require("./solution");

describe("FrogRiverOne", function () {
  it("should return 6 as the shortest time a frog can jump to the other side of the river 5, [1, 3, 1, 4, 2, 3, 5, 4]", function () {
    var results = (0, _solution.solution)(5, [1, 3, 1, 4, 2, 3, 5, 4]);
    (0, _chai.expect)(results).to.equal(6);
  });
  it("should return -1 as not all leaves can lead to crossing the river 2, [2, 2, 2, 2, 2]", function () {
    var results = (0, _solution.solution)(2, [2, 2, 2, 2, 2]);
    (0, _chai.expect)(results).to.equal(-1);
  });
  it("should return 0 atime to jump across the river 1, [1]", function () {
    var results = (0, _solution.solution)(1, [1]);
    (0, _chai.expect)(results).to.equal(0);
  });
  it("should return 4 as the minimal difference in arr with 1 item[3]", function () {
    var results = (0, _solution.solution)(3, [1, 3, 1, 3, 2, 1, 3]);
    (0, _chai.expect)(results).to.equal(4);
  });
});