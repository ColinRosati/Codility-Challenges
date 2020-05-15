"use strict";

var _chai = require("chai");

var _solution = require("./solution");

describe('GenomicRangeQuery', function () {
  it("should return [2, 4, 1] minimal impact for simple 'CAGCCTA', [2, 5, 0], [4, 5, 6]", function () {
    var results = (0, _solution.solution)('CAGCCTA', [2, 5, 0], [4, 5, 6]);
    (0, _chai.expect)(results).to.eql([2, 4, 1]);
  });
  it("should return [2,2,2] for single character singular string 'C', [0,0,0],[0,0,0]", function () {
    var results = (0, _solution.solution)('C', [0, 0, 0], [0, 0, 0]);
    (0, _chai.expect)(results).to.eql([2, 2, 2]);
  });
  it("should return [3,3,3,3] for double character string 'GG', [1,0,1,1],[0,0,0,1]", function () {
    var results = (0, _solution.solution)('GG', [1, 0, 1, 1], [0, 0, 0, 1]);
    (0, _chai.expect)(results).to.eql([3, 3, 3, 3]);
  });
  it("should return [1,1,1] for repeating characters string 'AAAAAAA', [2,1,0],[3,2,4]", function () {
    var results = (0, _solution.solution)('AAAAAAA', [2, 1, 0], [3, 2, 4]);
    (0, _chai.expect)(results).to.eql([1, 1, 1]);
  });
  it('small_length_string return [4,3,4,2,2]', function () {
    var results = (0, _solution.solution)('TCGT', [0, 2, 0, 3, 1], [3, 0, 3, 1, 1]);
    (0, _chai.expect)(results).to.eql([4, 3, 4, 2, 2]);
  });
  it('small_length_string_2 return [4,3,4,2,2]', function () {
    var results = (0, _solution.solution)('TTCATGC', [0, 5, 0, 2, 6], [1, 1, 4, 2, 5]);
    (0, _chai.expect)(results).to.eql([4, 3, 4, 2, 2]);
  });
  xit("small random ~300 sequence 'ACTGGATC", function () {
    var P = Array(300).fill().map(function (item) {
      return Math.floor(Math.random() * Math.floor(4));
    });
    console.log('test P', P);
    var results = (0, _solution.solution)('ACTGGATC', 0, 11);
    (0, _chai.expect)(results).to.equal(1);
  });
});