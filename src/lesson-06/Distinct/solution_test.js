import { expect } from 'chai';

import { solution } from './solution';

describe('Distinct', () => {
  it('should return 3 distinct numbers in a simple array', () => {
    let results = solution([2, 1, 1, 2, 3, 1]);
    expect(results).to.equal(3);
  });
});
