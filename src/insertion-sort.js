'use strict';

const insertionSort = (array) => {
  console.log('before:', array);
  const _swap = (thisArray, index1, index2) => {
    const storedValue = thisArray[index1];
    thisArray[index1] = thisArray[index2];
    thisArray[index2] = storedValue;
    return undefined;
  };
  if (!array.length) {
    throw new Error('the array must be populated');
  } else {
    const length = array.length + 1;
    for (let i = length; i >= 0; i--) {
      for (let j = 0; j <= length; j++) {
        if (array[j - 1] > array[j]) {
          _swap(array, j - 1, j);
        }
      }
    }
  }
  console.log('after:', array);
  return undefined;
};
export default insertionSort;
