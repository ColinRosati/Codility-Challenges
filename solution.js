"use strict";
exports.__esModule = true;
exports.solution = function (X, Y, D) {
    if (X <= Y) {
        var distance = Y - X;
        var jumps = Math.ceil(distance / D);
        return jumps;
    }
};
