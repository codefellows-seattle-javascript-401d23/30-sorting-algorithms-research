'use strict';

const insertionSortArray = require('../insertion-sort');

describe('insertion-sort.js', () => {
  test('Should return null if array is empty', () => {
    expect(insertionSortArray.insertionSort('')).toEqual('');
  });
  test('Should return sorted array', () => {
    expect(insertionSortArray.insertionSort([4, 8, 15, 23, 42, 16]))
      .toEqual([4, 8, 15, 16, 23, 42]);
  });
});
