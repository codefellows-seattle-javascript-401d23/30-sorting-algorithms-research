'use strict';

const testArray = [29, 23, 19, 17, 13, 11, 7, 5, 3, 2, 1];

// Select sort algorithm
function selectSort(array) {
  for(let j = 0; j < array.length; j++) {
    let currentMin = j;
    for(let i = j + 1; i < array.length; i++) {
      if(array[i] < array[currentMin])
      currentMin = i;
    }
  if(!currentMin !== j) {
    let temp = array[j];
    array[j] = array[currentMin];
    array[currentMin] = temp;
    }
  }
  console.log(array);
  return array;
}

selectSort(testArray);
