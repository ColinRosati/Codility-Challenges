"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solution = void 0;

var solution = function solution(X, A) {
  console.log(X, A);
  linearArray(X);
  var pathSteps = linearArray(X);
  var positionPath = [];
  var solution = -1;

  var matches = function matches(item) {
    return positionPath.includes(item);
  };

  for (var i = 0; i < A.length; i++) {
    positionPath.push(A[i]);

    if (pathSteps.every(matches)) {
      console.log("result", i);
      solution = i;
      return i;
    }
  }

  return solution;
};

exports.solution = solution;

var linearArray = function linearArray(max) {
  var _newArr = [];

  for (var x = 1; x <= max; x++) {
    _newArr.push(x);
  }

  return _newArr;
}; // export const solution = (X, A) => {
// 	console.log(X, A);
// 	let jumpTime = 0;
// 	const pathStep = [];
// 	const positionPath = [];
// 	A.forEach((item, index) => {
// 		if (index + 1 <= X) {
// 			positionPath.push(item);
// 			pathStep.push(index + 1);
// 			let count = index + 2;
// 			jumpTime = count;
// 		}
// 	});
// 	path.pop();
// 	console.log("position", positionPath, "path", pathStep);
// 	const find = (item) => positionPath.includes(item);
// 	console.log("find", find);
// 	console.log(pathStep.every(find));
// 	console.log("A.indexOd(X)", A.indexOf(X));
// 	if (pathStep.every(find)) {
// 		console.log("solution", jumpTime);
// 		return A.indexOf(X);
// 	} else {
// 		return -1;
// 	}
// };