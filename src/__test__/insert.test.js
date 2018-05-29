'use strict';

import insertSort from '../lib/insert';

describe('#insertSort', () => {
  test('Should insert sort array in sequential order', () => {
    expect(insertSort([4, 6, 2, 1])).toEqual([1, 2, 4, 6]);
    expect(insertSort([5, 23, -52, -1, 7])).toEqual([-52, -1, 5, 7, 23]);
  });
  test('Should return undefined if no array is passed', () => {
    expect(insertSort()).toBeUndefined();
  });
});
