export const solution = (S, P, Q) => {
	const dna = Array.from(S);
	let minImpact = Array(P.length);
	const dnaKey = { A: 1, C: 2, G: 3, T: 4 };

	for (var i = 0; i < P.length; i++) {
		if (dnaKey[dna[P[i]]] < dnaKey[dna[Q[i]]]) {
			minImpact[i] = dnaKey[dna[P[i]]];
		} else {
			minImpact[i] = dnaKey[dna[Q[i]]];
		}
	}
	return minImpact;
};
