'use strict';

const bubbleSort = (array) => {
  const _swap = (thisArray, index1, index2) => {
    const storedValue = thisArray[index1];
    thisArray[index1] = thisArray[index2];
    thisArray[index2] = storedValue;
    return undefined;
  };
  if (!array.length) throw Error('the array must be populated');
  const length = array.length + 1;
  for (let i = length; i >= 0; i--) {
    // if (typeof array[i] !== 'number') throw Error('input must contain only numbers'); // why doesnt this work?
    for (let j = 0; j <= length; j++) {
      if (array[j - 1] > array[j]) {
        _swap(array, j - 1, j);
      }
    }
  }
  return undefined;
};
export default bubbleSort;
