'use strict';

const bubbleSortArray = require('../bubble-sort');

describe('bubble-sort.js', () => {
  test('Should return null if array is empty', () => {
    expect(bubbleSortArray.bubbleSort('')).toEqual('');
  });
  test('Should return sorted array', () => {
    expect(bubbleSortArray.bubbleSort([4, 8, 15, 23, 42, 16]))
      .toEqual([4, 8, 15, 16, 23, 42]);
  });
});
