'use strict';

import bubbleSort from '../lib/bubble';

describe('#bubbleSort', () => {
  test('Should bubble sort array in sequential order', () => {
    expect(bubbleSort([4, 6, 2, 1])).toEqual([1, 2, 4, 6]);
    expect(bubbleSort([5, 23, -52, -1, 7])).toEqual([-52, -1, 5, 7, 23]);
  });
  test('Should return undefined if no array is passed', () => {
    expect(bubbleSort()).toBeUndefined();
  });
});
