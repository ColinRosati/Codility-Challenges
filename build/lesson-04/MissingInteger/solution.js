"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solution = void 0;

// export const solution = (A) => {
// 	console.log(A);
// 	if (
// 		A.every((item) => item < 0) ||
// 		A.every((item) => item > 1) ||
// 		(A.some((item) => item < 0) && A.some((item) => item > 1))
// 	) {
// 		return 1;
// 	}
// 	if (A.length === 1) {
// 		if (A[0] > 1) {
// 			return 1;
// 		} else {
// 			return +A[0] + 1;
// 		}
// 	}
// 	const floor = Math.min(...A);
// 	const ceiling = Math.max(...A);
// 	let solution = A.length + 1;
// 	console.log;
// 	for (var i = floor; i < ceiling; i++) {
// 		const found = A.find((item) => item == i + 1);
// 		if (found == undefined) {
// 			solution = i + 1;
// 		}
// 	}
// 	return solution;
// };
// export const solution = (A) => {
// 	var min = 1;
// 	A.sort(function (a, b) {
// 		// Sort the array explicit way
// 		return a - b;
// 	});
// 	for (var i in A) {
// 		if (A[i] > -1 && A[i] == min) {
// 			min++;
// 		}
// 	}
// 	return min;
// };
var solution = function solution(A) {
  A.sort(function (a, b) {
    return a - b;
  });
  return A.reduce(function (acc, curr) {
    console.log("reducre loop", acc, curr);
    return acc === curr ? ++acc : acc;
  }, 1);
};

exports.solution = solution;