'use strict';

const bubbleSort = module.exports = (inputArray) => { // eslint-disable-line
  const len = inputArray.length;
  let swapped = true;
  let temp;

  while (swapped) {
    swapped = false;
    for (let i = 1; i < len; i++) {
      if (inputArray[i - 1] > inputArray[i]) {
        if (inputArray[i - 1] > inputArray[i]) {
          temp = inputArray[i];
          inputArray[i] = inputArray[i - 1];
          inputArray[i - 1] = temp;
        }
        swapped = true;
      }
    }
  }

  return inputArray;
};
