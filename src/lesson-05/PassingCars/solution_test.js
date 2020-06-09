import { expect } from 'chai';

import { solution } from './solution';

describe('PassingCars', () => {
  it('return 5 as the pairs of passing cars simple array', () => {
    let results = solution([0, 1, 0, 1, 1]);
    expect(results).to.equal(5);
  });

  it('single element', () => {
    let results = solution([0]);
    expect(results).to.equal(0);
  });

  it('double element', () => {
    let results = solution([0, 1]);
    expect(results).to.equal(1);
  });
});
