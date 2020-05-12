"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solution = void 0;

var solution = function solution(A, B, K) {
  return Math.floor(B / K) - Math.floor((A - 1) / K);
};

exports.solution = solution;