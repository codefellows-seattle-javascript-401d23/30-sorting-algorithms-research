'use strict';

const testArray = [13, 5, 9, 22, 11];

// Insert sort algorithm 
function inserSort(array) {
  for(let j = 0; j < array.length; j++) {
    let tempValue = array[j];
    let i = j - 1;
    while(i >= 0 && array[i] > tempValue) {
      array[i + 1] = array[i];
      i--;
    }
    array[i + 1] = tempValue;
  }
  return array;
}

inserSort(testArray);
