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
  console.log('enter', dna, P, Q, minImpact);

  for (var i = 0; i < P.length; i++) {
    console.log('dna[P[i]] <= dna[Q[i]]', P[i], dna[P[i]], dnaKey[dna[P[i]]], Q[i], dna[Q[i]], dnaKey[dna[Q[i]]], dnaKey[dna[P[i]]] < dnaKey[dna[Q[i]]]);

    if (dnaKey[dna[P[i]]] < dnaKey[dna[Q[i]]]) {
      minImpact[i] = dnaKey[dna[P[i]]];
    } else {
      minImpact[i] = dnaKey[dna[Q[i]]];
    }
  }

  console.log('minImpact', minImpact);
  return minImpact;
};

exports.solution = solution;