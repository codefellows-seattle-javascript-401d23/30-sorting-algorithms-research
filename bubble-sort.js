'use strict';

const array =[10,5,34,56,2,4,9];

function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <(array.length-i-1); j++){
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
