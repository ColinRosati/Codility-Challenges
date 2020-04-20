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
      var part2 = part1 - A.length;
      var part3 = index + 1;

      if (part1 && part2 < 0) {
        return Math.abs(A.slice(0, part1).reduce(function (acc, curr) {
          return acc + curr;
        }) - A.slice(part3, A.length).reduce(function (acc, curr) {
          return acc + curr;
        }));
      }
    }).filter(function (item, index, arr) {
      console.log("sums", item);
      return item < arr[index + 1];
    });
    console.log("sollution", diffs[0]);
    return diffs[0];
  }
}; // export const solution = function (A) {
// 	console.log("Absolute sum", A, A.length);
// 	let sums = A.map((item, index, arr) => {
// 		let part1 = index + 1;
// 		let part2 = index + 1 - A.length;
// 		if (part1 && part2 < 0) {
// 			return parter(part1, part2, A);
// 		}
// 	});
// 	console.log("sums", sums);
// 	sums.pop();
// 	let lowestDiff = sums.filter((item, index, arr) => {
// 		console.log("filter", item, arr[index + 1], item < arr[index + 1]);
// 		return item < arr[index + 1];
// 	});
// 	console.log("lowest diff", lowestDiff[0]);
// 	return;
// };
// const parter = (p1, p2, A) => {
// 	let _p1 = A.slice(0, p1);
// 	let _p2 = A.slice(p2, A.length);
// 	return difference(_p1, _p2);
// };
// const difference = (p1, p2) => {
// 	let p1Sum = p1.reduce((acc, curr) => acc + curr);
// 	let p2Sum = p2.reduce((acc, curr) => acc + curr);
// 	console.log("diff", Math.abs(p1Sum - p2Sum));
// 	return Math.abs(p1Sum - p2Sum);
// };
// solution([3, 1, 1]);


exports.solution = solution;
solution([3, 1, 2, 4, 3]); // solution([3, 1]);