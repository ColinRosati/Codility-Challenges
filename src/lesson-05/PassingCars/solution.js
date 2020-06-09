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

export const solution = (A) => {
  let totalOnes = 0;
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
