"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solution = void 0;

var solution = function solution(A) {
  var distinct = new Set();
  A.forEach(function (item) {
    return distinct.add(item);
  });
  return distinct.size;
};

exports.solution = solution;