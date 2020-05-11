export const solution = (A) => {
	A.sort((a, b) => a - b);
	return A.reduce((acc, curr) => (acc === curr ? ++acc : acc), 1);
};
