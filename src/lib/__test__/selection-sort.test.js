'use strict';

const selectionSortArray = require('../selection-sort');

describe('selection-sort.js', () => {
  test('Should return null if array is empty', () => {
    expect(selectionSortArray.selectionSort('')).toEqual('');
  });
  test('Should return sorted array', () => {
    expect(selectionSortArray.selectionSort([4, 8, 15, 23, 42, 16]))
      .toEqual([4, 8, 15, 16, 23, 42]);
  });
});
