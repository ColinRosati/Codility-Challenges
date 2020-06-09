"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solution = void 0;

var solution = function solution(S, P, Q) {
  var dna = Array.from(S);
  var minImpact = Array(P.length);
  var dnaKey = {
    A: 1,
    C: 2,
    G: 3,
    T: 4
  };

  for (var i = 0; i < P.length; i++) {
    if (dnaKey[dna[P[i]]] < dnaKey[dna[Q[i]]]) {
      minImpact[i] = dnaKey[dna[P[i]]];
    } else {
      minImpact[i] = dnaKey[dna[Q[i]]];
    }
  }

  return minImpact;
};

exports.solution = solution;