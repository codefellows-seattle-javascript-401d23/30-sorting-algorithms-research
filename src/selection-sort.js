'use strict';

const selectionSort = (array) => {
  const _swap = (thisArray, index1, index2) => {
    const storedValue = thisArray[index1];
    thisArray[index1] = thisArray[index2];
    thisArray[index2] = storedValue;
    return undefined;
  };
  if (!array.length) {
    throw new Error('input must be an array');
  }
  const { length } = array;
  let iMin = null;
  for (let j = 0; j < length - 1; j++) {
    iMin = j;
    for (let i = j + 1; i < length; i++) {
      if (array[i] < array[iMin]) {
        iMin = i;
      }
    }
    if (iMin !== j) {
      _swap(array, j, iMin);
    }
  }
};
export default selectionSort;
