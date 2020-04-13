export const solution = (X: number, Y: number, D: number): number => {
	if (X <= Y) {
		let distance = Y - X;
		let jumps = Math.ceil(distance / D);
		return jumps;
	}
};
