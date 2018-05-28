'use strict';

import insertionSort from '../lib/insertion-sort';

describe('insertion-sort.test.js', () => {
  const testArray = [5, 1, 20, 2, 13, 3];
  test('Should return a sorted array.', () => {
    expect(insertionSort(testArray)).toEqual([1, 2, 3, 5, 13, 20]);
  });
  test('Should return an empty array if that was the input.', () => {
    const emptyArray = [];
    expect(insertionSort(emptyArray)).toEqual([]);
  });
  test('Should throw a new error for an invalid input.', () => {
    expect(() => { insertionSort(); }).toThrowError('Invalid input.');
  });
  test('Should throw a new error if the array contains a non-integer value.', () => {
    const invalidArray = [4, 'five', 1, 3];
    expect(() => { insertionSort(invalidArray); }).toThrowError('Array elements must all be integers.');
  });
});
