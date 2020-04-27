"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solution = solution;

function solution(N) {
  if (!N || N < 0) {
    return 0;
  }

  var bin = N.toString(2);
  var lastOneint = bin.lastIndexOf("1");
  var gap = 0;
  var tempGap = 0;

  for (var i = 0; i < lastOneint; i++) {
    if (bin[i] === "0") {
      for (var j = i; j <= lastOneint; j++) {
        tempGap += 1;

        if (bin[j] === "1") {
          if (tempGap > gap) {
            gap = tempGap - 1;
          }

          tempGap = 0;
          i = j + 1;
        }
      }
    }
  }

  return gap;
}