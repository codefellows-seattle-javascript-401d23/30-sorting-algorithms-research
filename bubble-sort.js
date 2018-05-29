'use strict';

const array = [7, 5, 6, 4, 3, 10, 1, 8, 2, 9];

function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

console.log(bubbleSort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
