'use strict';

const array =[10,5,34,56,2,4,9];

function insertionSort(array) {
  let len = array.length;
    for (let i = 1; i < len; i++) {
      let temp = array[i];
      for (let j = i - 1; j >= 0 && (array[j] > temp); j--) {
	array[j + 1] = array[j];
      } 
      array[i] = temp;
}
  return array;
}

module.export = insertionSort();
console.log(insertionSort(array));
