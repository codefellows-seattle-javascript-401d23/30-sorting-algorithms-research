'use strict';

const selectionSort = module.exports = (inputArray) => { // eslint-disable-line
  const len = inputArray.length;
  let temp;

  for (let j = 0; j < len - 1; j++) {
    let iMin = j;
    for (let i = j + 1; i < len; i++) {
      if (inputArray[i] < inputArray[iMin]) {
        iMin = i;
      }
    }

    if (iMin !== j) {
      temp = inputArray[iMin];
      inputArray[iMin] = inputArray[j];
      inputArray[j] = temp;
    }
  }
  return inputArray;
};
