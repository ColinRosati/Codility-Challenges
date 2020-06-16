export const solution = (A) => {
  A.sort((a, b) => a - b);
  let sum = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
  let doubleNegSum = A[A.length - 1] * A[0] * A[1];
  if (sum > doubleNegSum) {
    return sum;
  } else {
    return doubleNegSum;
  }
};
