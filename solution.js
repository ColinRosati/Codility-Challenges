function solution(N) {
	if (!N || N < 0) {
		return 0;
	}

	const bin = N.toString(2);
	let binArr = [];
	for (var i = 0; i < bin.length; i++) {
		binArr.push(bin[i]);
	}

	let sort = new Sorter(binArr);
	console.log("maximum", sort.analyze());
}

class Sorter {
	constructor(binArr) {
		this.binArr = binArr;
		this.gapAmount = 0;
		this.gapObject = {};
	}

	analyze() {
		this.gapAmounts();
		this.gapLoop();
		return this.largestCount();
	}

	largestCount() {
		let count = 1;
		let gaplengthArr = Object.keys(this.gapObject).map((item) => {
			return this.gapObject[item].gapLength;
		});
		if (gaplengthArr.length === 0) {
			return 0;
		} else {
			const max = gaplengthArr.reduce(function (prev, current) {
				return prev > current ? prev : current;
			});
			return max;
		}
	}

	gapAmounts() {
		this.gapAmount = 0;
		this.loopGapBounds((i, j) => {
			this.gapAmount = this.gapAmount + 1;
		});
	}

	gapLoop() {
		let count = 1;
		this.loopGapBounds((i, j) => {
			if (count <= this.gapAmount) {
				this.gapObject[count] = {
					openingGap: i - 1,
					terminatingGap: j,
					gapLength: j - i,
				};
				count++;
			}
		});
	}

	loopGapBounds(callback) {
		for (var i = 0; i < this.binArr.length; i++) {
			if (this.binArr[i] === "0") {
				for (var j = i; j < this.binArr.length; j++) {
					if (this.binArr[j] === "1") {
						callback(i, j);
						i = j + 1;
					}
				}
			}
		}
	}
}

exports.solution = solution;
