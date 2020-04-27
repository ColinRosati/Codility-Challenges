"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solution = void 0;

var solution = function solution(X, Y, D) {
  if (X <= Y) {
    var distance = Y - X;
    var jumps = Math.ceil(distance / D);
    return jumps;
  }
};

exports.solution = solution;