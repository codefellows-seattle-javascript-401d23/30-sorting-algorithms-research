'use strict';

const insertionSortArray = module.exports = {};

function insert(array, j) {
  const temp = array[j - 1];
  array[j - 1] = array[j];
  array[j] = temp;
}

insertionSortArray.insertionSort = function (array) {
  const len = array.length;
  let i = 1;
  while (i < len) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      insert(array, j);
      j--;
    }
    i++;
  }

  return array;
};

