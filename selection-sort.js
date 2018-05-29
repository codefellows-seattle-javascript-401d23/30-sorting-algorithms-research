'use strict';

const array =[10,5,34,56,2,4,9];

function selectionSort(array) {
var len = array.length;
	for (var i = 0; i < len-1; i++) {
    let minValue = i;
    for (var j = i + 1; j < len; j++) {
      
      if(array[j] < array[minValue]) {
        minValue = j;
      }
		}
    if (minValue !== i) {
      let tempVal = array[i];
      array[i] = array[minValue];
      array[minValue] = tempVal;
    }
	}
  return array;
}

console.log(selectionSort(array));
