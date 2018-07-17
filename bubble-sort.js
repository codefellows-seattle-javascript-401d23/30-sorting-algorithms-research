'use strict';

const array =[10,5,34,56,2,4,9];

function bubbleSort(array) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <(len - i - 1); j++){
      if(array[j]> array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
	}
  return array;
}

console.log(bubbleSort(array));
