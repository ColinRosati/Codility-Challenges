"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solution = void 0;

var solution = function solution(A) {
  A.sort(function (a, b) {
    return a - b;
  });
  return A.reduce(function (acc, curr) {
    return acc === curr ? ++acc : acc;
  }, 1);
};

exports.solution = solution;