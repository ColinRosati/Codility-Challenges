"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solution = void 0;

var solution = function solution(A) {
  if (A.length === 1) {
    return A[0];
  }

  if (A.length === 2) {
    return Math.abs(A[0] - A[1]);
  } else {
    var diffs = A.map(function (item, index, arr) {
      var part1 = index + 1;
      var part2 = Math.abs(part1 - A.length);

      if (part1 && part2 > 0) {
        return Math.abs(A.slice(0, part1).reduce(function (acc, curr) {
          return acc + curr;
        }) - A.slice(part1, A.length).reduce(function (acc, curr) {
          return acc + curr;
        }));
      }
    }).filter(function (item, index, arr) {
      if (index + 1 < arr.length) {
        return item < arr[index + 1];
      }
    });
    return diffs[0];
  }
};

exports.solution = solution;