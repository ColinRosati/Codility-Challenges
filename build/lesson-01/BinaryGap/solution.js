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
  console.log(bin);

  for (var i = 0; i < lastOneint; i++) {
    if (bin[i] === "0") {
      // console.log("fpund 0 ", i, lastOneint);
      for (var j = i; j <= lastOneint; j++) {
        tempGap += 1; // console.log("j counter", j, bin[j]);

        if (bin[j] === "1") {
          console.log("tempGap", tempGap);

          if (tempGap > gap) {
            gap = tempGap - 1;
          }

          tempGap = 0;
          i = j + 1;
        }
      }
    }
  }

  console.log("gap", gap);
  return gap;
}