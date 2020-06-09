"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solution = void 0;

// export const solution = (A) => {
// if (A.length >= 1000000000) return -1;
// let pairs = 0;
// for (var i = 0; i < A.length; i++) {
//   if (A[i] === 0) {
//     for (var j = i; j < A.length; j++) {
//       if (A[j] === 1) {
//         pairs = pairs + 1;
//       }
//     }
//   }
// }
// return pairs;
// };
// export const solution = (A) => {
//   if (A.length >= 1000000000) return -1;
//   let oneConainter = [];
//   let pairs = 0;
//   const isZero = (item, index) => {
//     if (item === 0) {
//       A.slice(index).forEach((elem, idx) => {
//         if (elem === 1) {
//           pairs++;
//         }
//       });
//     }
//   };
//   A.find(isZero);
//   return pairs;
// };
var solution = function solution(A) {
  if (A.length > 1000000000) {
    return -1;
  }

  var totalOnes = 0;
  var totalZeros = 0;
  var totalPairs = 0;

  for (var i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      totalZeros++;
    } else {
      totalOnes++;
      totalPairs += totalZeros;
    }
  }

  return totalPairs;
};

exports.solution = solution;