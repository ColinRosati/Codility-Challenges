"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solution = void 0;

var solution = function solution(A) {
  var missing = 1;

  if (A.length === 0) {
    return missing;
  }

  var ordinaryArray = A.length + 1;
  var ordinaryArraySum = ordinaryArray * (1 + ordinaryArray) / 2;
  var givenArraySum = A.reduce(function (acc, curr) {
    return acc + curr;
  });
  return ordinaryArraySum - givenArraySum;
};

exports.solution = solution;