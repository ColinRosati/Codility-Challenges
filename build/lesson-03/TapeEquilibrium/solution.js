"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solution = void 0;

var solution = function solution(A) {
  if (A.length === 1) {
    return A[0];
  }

  var sumA = A.reduce(function (a, b) {
    return a + b;
  }, 0);
  var sumB = 0;
  var diff = [];

  for (var i = 0; i < A.length - 1; i++) {
    sumB += A[i];
    sumA -= A[i];
    diff[i] = Math.abs(sumA - sumB);
  }

  var D = diff.sort(function (a, b) {
    return a - b;
  }, 0);
  return D[0];
};

exports.solution = solution;