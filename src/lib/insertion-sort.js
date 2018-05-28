'use strict';

const insertionSort = (array) => {
  if (!array) {
    throw new Error('Invalid input.');
  }
  if (array.length <= 1) {
    return array;
  }
  
  const len = array.length;
  let temp = null;
  let previousIndex = null;
  for (let i = 0; i < len; i++) {
    if (typeof array[i] !== 'number') {
      throw new Error('Array elements must all be integers.');
    }
    temp = array[i];
    previousIndex = i - 1;
    while (previousIndex >= 0 && array[previousIndex] > temp) {
      array[previousIndex + 1] = array[previousIndex];
      previousIndex -= 1;
    }
    array[previousIndex + 1] = temp;
  }
  return array;
};

export default insertionSort;
