export const solution = (A) => {
  let distinct = new Set();
  A.forEach((item) => distinct.add(item));
  console.log(distinct.size);
  return distinct.size;
};
