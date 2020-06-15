"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solution = void 0;

var solution = function solution(A) {
  var totalZeros = 0;
  var totalPairs = 0;

  for (var i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      totalZeros++;
    } else {
      totalPairs += totalZeros;
    }

    if (totalPairs > 1000000000) return -1;
  }

  return totalPairs;
};

exports.solution = solution;