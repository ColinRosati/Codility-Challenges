"use strict";
exports.__esModule = true;
exports.solution = function (A) {
	if (!A || A.length === 0) {
		return 0;
	}
	if (A.length % 2) {
		var unique = remover(A, findDouble(A));
		return unique;
	}
	return 0;
};
var remover = function (A, doubles) {
	var unique;
	var count = 0;
	A.forEach(function (item, index) {
		if (count >= doubles.length) {
			count = 0;
		}
		if (item !== doubles[count]) {
			unique = item;
		}
		count++;
	});
	return unique;
};
var findDouble = function (A) {
	var doubles = [];
	for (var i = 0; i < A.length; i++) {
		for (var j = i + 1; j < A.length; j++) {
			if (A[i] === A[j]) {
				if (A[i] === doubles[i]) {
					break;
				}
				doubles.push(A[i]);
				break;
			}
		}
	}
	return deleteRepeat(doubles);
};
var deleteRepeat = function (doubles) {
	var noRepeats = doubles.filter(function (item, index) {
		return doubles.indexOf(item) === index;
	});
	return noRepeats;
};
