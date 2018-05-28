'use strict';

const selectionSortArray = module.exports = {};

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

selectionSortArray.selectionSort = function (array) {
  const len = array.length;
  for (let i = 0; i < len - 1; i++) {
    let minValue = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[minValue]) {
        minValue = j;
      }
    }
    if (minValue !== i) {
      swap(array, i, minValue);
    }
  }

  return array;
};

// console.log(selectionSort([12, 3, 9, 50, 1, 0, 44, 17, 8]));
