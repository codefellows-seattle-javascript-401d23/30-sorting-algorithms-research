'use strict';

import selectionSort from '../lib/selection-sort';

describe('selection-sort.js', () => {
  test('should return sorted array - all positive', () => {
    expect(selectionSort([4, 67, 8, 32, 765, 1])).toEqual([1, 4, 8, 32, 67, 765]);
  });
  test('should return sorted array - positive and negative', () => {
    expect(selectionSort([-32, 7, 1, -7, 0])).toEqual([-32, -7, 0, 1, 7]);
  });
  test('should err out if no array passed', () => {
    expect(() => { selectionSort(); }).toThrow('missing input');
  });
  test('should err out if array contains non-numbers', () => {
    expect(() => { selectionSort([1, 6, 'ten', true]); }).toThrow('input must only contain numbers');
  });
});

