'use strict';

import bubbleSort from '../lib/bubble-sort';
import insertionSort from '../lib/insertion-sort';
import selectionSort from '../lib/selection-sort';

describe('Testing the bubble sort method', () => {
  test('should return a sort array in ascending order with positive values', () => {
    expect(bubbleSort([6, 3, 100, 32, 44, 11, 211])).toEqual([3, 6, 11, 32, 44, 100, 211]);
  });

  test('should return a sorted array when input is all negative numbers', () => {
    expect(bubbleSort([-55, -99, -100, -66, -44, -11, -22, -33])).toEqual([-100, -99, -66, -55, -44, -33, -22, -11]);
  });

  test('should return a sorted array when input has positive and negative values', () => {
    expect(bubbleSort([4, -1, 5, -18, 19, 100, -99])).toEqual([-99, -18, -1, 4, 5, 19, 100]);
  });

  test('should return input if input is a single element', () => {
    expect(bubbleSort([5])).toEqual([5]);
  });
})

describe('Testing the insertion sort method', () => {
  test('should return a sort array in ascending order with positive values', () => {
    expect(insertionSort([6, 3, 100, 32, 44, 11, 211])).toEqual([3, 6, 11, 32, 44, 100, 211]);
  });

  test('should return a sorted array when input is all negative numbers', () => {
    expect(insertionSort([-55, -99, -100, -66, -44, -11, -22, -33])).toEqual([-100, -99, -66, -55, -44, -33, -22, -11]);
  });

  test('should return a sorted array when input has positive and negative values', () => {
    expect(insertionSort([4, -1, 5, -18, 19, 100, -99])).toEqual([-99, -18, -1, 4, 5, 19, 100]);
  });

  test('should return input if input is a single element', () => {
    expect(insertionSort([5])).toEqual([5]);
  });
})

describe('Testing the selection sort method', () => {
  test('should return a sort array in ascending order with positive values', () => {
    expect(selectionSort([6, 3, 100, 32, 44, 11, 211])).toEqual([3, 6, 11, 32, 44, 100, 211]);
  });

  test('should return a sorted array when input is all negative numbers', () => {
    expect(selectionSort([-55, -99, -100, -66, -44, -11, -22, -33])).toEqual([-100, -99, -66, -55, -44, -33, -22, -11]);
  });

  test('should return a sorted array when input has positive and negative values', () => {
    expect(selectionSort([4, -1, 5, -18, 19, 100, -99])).toEqual([-99, -18, -1, 4, 5, 19, 100]);
  });

  test('should return input if input is a single element', () => {
    expect(selectionSort([5])).toEqual([5]);
  });
})