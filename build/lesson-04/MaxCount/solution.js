"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solution = void 0;

var solution = function solution(N, A) {
  var counter = Array(N).fill(0);
  var maxCount = 0;
  A.forEach(function (item, index) {
    if (counter[item - 1] === undefined) {
      counter = Array(N).fill(maxCount);
    } else {
      counter[item - 1]++;

      if (counter[item - 1] > maxCount) {
        maxCount = counter[item - 1];
      }
    }
  });
  return counter;
};

exports.solution = solution;