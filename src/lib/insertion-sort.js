// INSERTION SORT:
// builds sorted list one item at a time

'use strict';

const insertionSort = (array) => {
  if (!array) throw new Error('missing input');
  const len = array.length;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        const numToSort = array.splice(i, 1)[0];
        array.splice(j, 0, numToSort);
      }
    }
  }
  return array;
};

export default insertionSort;
