'use strict';

const testArray = [9, 8, 7 ,5, 3, 1];

// Bubble sort algorithm 
function bubbleSort(array) {
  const length = array.length;
  for(let j = 0; j < length; j++) {
    for(let i = 0; i < length; i++) {
      if(array[i - 1] > array[i]) {
        let temp = array[i-1];
        array[i - 1] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

bubbleSort(testArray);
