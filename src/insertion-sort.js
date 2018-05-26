'use strict';

const insertionSort = module.exports = (inputArray) => {
  const len = inputArray.length;
  let temp;

  for (let i = 1; i < len; i++) {
    let j = i;
    while (j > 0 && inputArray[j - 1] > inputArray[j]) {
      temp = inputArray[j];
      inputArray[j] = inputArray[j - 1];
      inputArray[j - 1] = temp;
      j -= 1;
    }
  }
  return inputArray;
};
