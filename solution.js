"use strict";
exports.__esModule = true;
exports.solution = function (A, K) {
    if (A.length === 0) {
        console.log("empty", A);
        return A;
    }
    return cycleArr(A, K);
};
var cycleArr = function (A, K) {
    var rotatedArr = A;
    var count = 0;
    while (count < K) {
        console.log("iter", A);
        var end = A.pop();
        rotatedArr.unshift(end);
        count++;
    }
    return rotatedArr;
};
