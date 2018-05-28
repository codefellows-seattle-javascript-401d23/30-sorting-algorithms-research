'use strict';

import insertionSort from '../lib/insertion-sort';

describe('insertion-sort.js', () => {
  test('should return sorted array - all positive values', () => {
    expect(insertionSort([7, 2, 50, 0, 10])).toEqual([0, 2, 7, 10, 50]);
  });
  test('should return sorted array - positive and negative', () => {
    expect(insertionSort([-52, 9, -54, 82, 0])).toEqual([-54, -52, 0, 9, 82]);
  });
  test('should err out if no list passed', () => {
    expect(() => { insertionSort(); }).toThrow('missing input');
  });
});
