"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solution = void 0;

var solution = function solution(A) {
  A.sort(function (a, b) {
    return a - b;
  });
  var sum = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
  var doubleNegSum = A[A.length - 1] * A[0] * A[1];

  if (sum > doubleNegSum) {
    return sum;
  } else {
    return doubleNegSum;
  }
};

exports.solution = solution;