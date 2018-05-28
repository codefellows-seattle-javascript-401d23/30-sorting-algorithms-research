'use strict';

const bubbleSortArray = module.exports = {};

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

bubbleSortArray.bubbleSort = function (array) {
  let n = array.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (array[i - 1] > array[i]) {
        swap(array, i - 1, i);
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return array;
};

