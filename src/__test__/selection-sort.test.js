'use strict';

import selectionSort from '../lib/selection-sort';

describe('bubble-sort.test.js', () => {
  const selectionArray = [5, 10, 30, 2, 114, 3];
  test('Should return a sorted array.', () => {
    expect(selectionSort(selectionArray)).toEqual([2, 3, 5, 10, 30, 114]);
  });
  test('Should return an empty array if that was the input.', () => {
    const emptyArray = [];
    expect(selectionSort(emptyArray)).toEqual([]);
  });
  test('Should throw a new error for an invalid input.', () => {
    expect(() => { selectionSort(); }).toThrowError('Invalid input.');
  });
  test('Should throw a new error if the array contains a non-integer value.', () => {
    const invalidArray = [4, 'six', 1, 3];
    expect(() => { selectionSort(invalidArray); }).toThrowError('Array elements must all be integers.');
  });
});
