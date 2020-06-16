export const solution = (A) => {
  let distinct = new Set();
  A.forEach((item) => distinct.add(item));
  return distinct.size;
};
