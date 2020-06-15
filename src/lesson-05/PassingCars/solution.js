export const solution = (A) => {
  let totalZeros = 0;
  let totalPairs = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      totalZeros++;
    } else {
      totalPairs += totalZeros;
    }
    if (totalPairs > 1000000000) return -1;
  }

  return totalPairs;
};
