export function solution(N) {
	if (!N || N < 0) {
		return 0;
	}

	const bin = N.toString(2);
	const lastOneint = bin.lastIndexOf("1");
	let gap = 0;
	let tempGap = 0;
	for (var i = 0; i < lastOneint; i++) {
		if (bin[i] === "0") {
			for (var j = i; j <= lastOneint; j++) {
				tempGap += 1;
				if (bin[j] === "1") {
					if (tempGap > gap) {
						gap = tempGap - 1;
					}
					tempGap = 0;
					i = j + 1;
				}
			}
		}
	}
	return gap;
}
