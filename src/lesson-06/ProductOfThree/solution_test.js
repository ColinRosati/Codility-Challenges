import { expect } from 'chai';

import { solution } from './solution';

describe('ProductOfThree', () => {
  it('should return 60 as the maximal sum of a triplet in a simple array', () => {
    let results = solution([-3, 1, 2, -2, 5, 6]);
    expect(results).to.equal(60);
  });

  it('one triple', () => {
    let results = solution([10, 10, 10]);
    expect(results).to.equal(1000);
  });

  it('simple 2', () => {
    let results = solution([-5, 5, -5, 4]);
    expect(results).to.equal(125);
  });
});
