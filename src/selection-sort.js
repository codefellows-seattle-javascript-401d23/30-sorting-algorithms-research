'use strict';

function swapElement(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swapElement(array, i, min);
    }
  }
  return array;
}

export { selectionSort, swapElement };
