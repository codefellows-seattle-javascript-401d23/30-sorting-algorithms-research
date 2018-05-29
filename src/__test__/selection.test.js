'use strict';

import selectionSort from '../lib/selection';

describe('#selectionSort', () => {
  test('Should selection sort array in sequential order', () => {
    expect(selectionSort([4, 6, 2, 1])).toEqual([1, 2, 4, 6]);
    expect(selectionSort([5, 23, -52, -1, 7])).toEqual([-52, -1, 5, 7, 23]);
  });
  test('Should return undefined if no array is passed', () => {
    expect(selectionSort()).toBeUndefined();
  });
});
