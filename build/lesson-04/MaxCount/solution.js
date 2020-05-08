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
}; // export const solution = (N, A) => {
// 	console.log("enter", N, A);
// 	const counter = {};
// 	for (let [index, item] of Object.entries(Array(N).fill(0))) {
// 		counter[+index + 1] = item;
// 	}
// 	let maxCount = 0;
// 	A.forEach((item, index) => {
// 		if (counter[item] === undefined) {
// 			Object.keys(counter).forEach((item) => (counter[item] = maxCount));
// 		} else {
// 			counter[item]++;
// 			if (counter[item] > maxCount) {
// 				maxCount = counter[item];
// 			}
// 		}
// 	});
// 	return Object.values(counter);
// };


exports.solution = solution;