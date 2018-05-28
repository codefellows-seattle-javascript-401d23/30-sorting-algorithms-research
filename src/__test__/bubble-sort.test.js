'use strict';

import bubbleSort from '../lib/bubble-sort';

describe('bubble-sort.js', () => {
  test('should return array in sorted order - all positive values', () => {
    expect(bubbleSort([10, 9, 23, 5, 101])).toEqual([5, 9, 10, 23, 101]);
  });
  test('should return array in sorted order - negative and positive', () => {
    expect(bubbleSort([-3, 0, -100, 100, -4, 6])).toEqual([-100, -4, -3, 0, 6, 100]);
  });
  test('should err out with missing input', () => {
    expect(() => { bubbleSort(); }).toThrow('missing input');
  });
});
