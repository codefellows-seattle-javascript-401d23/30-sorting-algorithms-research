'use strict';

const bubbleSwap = (array, i, nextVal) => {
  const temp = array[i];
  array[i] = array[nextVal];
  array[nextVal] = temp;
};

const bubbleSort = (array) => {
  if (!array) {
    throw new Error('Invalid input.');
  }
  if (array.length <= 1) {
    return array;
  }
  
  const len = array.length;
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (typeof array[i] !== 'number') {
        throw new Error('Array elements must all be integers.');
      }
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        bubbleSwap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return array;
};

export default bubbleSort;
