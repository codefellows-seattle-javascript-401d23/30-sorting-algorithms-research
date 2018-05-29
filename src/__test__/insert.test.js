'use strict';

import insertionSort from '../lib/insert';

describe('#insertionSort', () => {
  test('Should insertion sort array in sequential order', () => {
    expect(insertionSort([4, 6, 2, 1])).toEqual([1, 2, 4, 6]);
    expect(insertionSort([5, 23, -52, -1, 7])).toEqual([-52, -1, 5, 7, 23]);
  });
  test('Should return undefined if no array is passed', () => {
    expect(insertionSort()).toBeUndefined();
  });
});
