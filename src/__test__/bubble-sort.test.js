'use strict';

import bubbleSort from '../lib/bubble-sort';

describe('bubble-sort.test.js', () => {
  const bubbles = [5, 1, 9, 2, 4, 3];
  test('Should return a sorted array.', () => {
    expect(bubbleSort(bubbles)).toEqual([1, 2, 3, 4, 5, 9]);
  });
  test('Should return an empty array if that was the input.', () => {
    const emptyArray = [];
    expect(bubbleSort(emptyArray)).toEqual([]);
  });
  test('Should throw a new error for an invalid input.', () => {
    expect(() => { bubbleSort(); }).toThrowError('Invalid input.');
  });
  test('Should throw a new error if the array contains a non-integer value.', () => {
    const invalidArray = [4, 'two', 1, 3];
    expect(() => { bubbleSort(invalidArray); }).toThrowError('Array elements must all be integers.');
  });
});
