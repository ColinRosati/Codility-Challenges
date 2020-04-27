"use strict";

var _chai = require("chai");

var _tempsolution = require("./tempsolution");

describe("PermMissingElem", function () {
  it("should return 1 as the minimal difference that can be achieved between the absolute sum of two parts in [3, 1, 2, 4, 3]", function () {
    var results = (0, _tempsolution.solution)([3, 1, 2, 4, 3]);
    (0, _chai.expect)(results).to.equal(1);
  });
  it("should return 1 as the minimal difference in arr with 3 items[3, 1, 1]", function () {
    var results = (0, _tempsolution.solution)([3, 1, 1]);
    (0, _chai.expect)(results).to.equal(1);
  });
  it("should return 2 as the minimal difference in arr with 2 items[3, 1]", function () {
    var results = (0, _tempsolution.solution)([3, 1]);
    (0, _chai.expect)(results).to.equal(2);
  });
  it("should return 3 as the minimal difference in arr with 1 item[3]", function () {
    var results = (0, _tempsolution.solution)([3]);
    (0, _chai.expect)(results).to.equal(3);
  });
  it("should return correct with only one element in the two parts [5,4,3]", function () {
    var results = (0, _tempsolution.solution)([5, 4, 3]);
    (0, _chai.expect)(results).to.equal(2);
  });
});