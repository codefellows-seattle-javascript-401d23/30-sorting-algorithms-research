'use strict';

import bubbleSort from '../bubble-sort';

describe('testing Bubble Sort', () => {
  test('it should sort in ascending order', () => {
    const testArray = [5, 9, 4, 1, 3, 2, 6, 7, 8];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    bubbleSort(testArray);
    expect(testArray).toEqual(sortedArray);
  });
});
