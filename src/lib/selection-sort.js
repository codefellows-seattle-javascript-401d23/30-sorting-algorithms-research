'use strict';

const selectionSwap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const selectionSort = (array) => {
  if (!array) {
    throw new Error('Invalid input.');
  }
  if (array.length <= 1) {
    return array;
  }
  
  const len = array.length;
  for (let i = 0; i < len; i++) {
    if (typeof array[i] !== 'number') {
      throw new Error('Array elements must all be integers.');
    }
    let boundry = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[boundry]) {
        boundry = j;
      }
      if (i !== boundry) {
        selectionSwap(array, i, boundry);
      }
    }
  }
  return array;
};

export default selectionSort;
