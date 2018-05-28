import bubbleSort from '../bubble-sort';
import insertionSort from '../insertion-sort';
import { selectionSort } from '../selection-sort';

const array = [10, 3, 7, 2, 8, 9, 5, 4, 1, 6];

describe('Testing #bubbleSort on an array', () => {
  test('#bubbleSort should return a sorted array with the values in ascending order', () => {
    expect(bubbleSort(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

describe('Testing #insertionSort on an array', () => {
  test('#insertionSort should return a sorted array with the values in ascending order', () => {
    expect(insertionSort(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

describe('Testing #selectionSort on an array', () => {
  test('#selectionSort should return a sorted array with the values in ascending order', () => {
    expect(selectionSort(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
