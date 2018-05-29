'use strict';

const basicSorting = (array) => {

  const bubbleSort = () => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i -1; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  };

  const insertionSort = () => {
    for (let i = 0; i < array.length; i++) {
      let temp = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > temp) {
        array[j + 1] = array[j];
        j -= 1;
      }
      array[j + 1] = temp;
    }
    return array;
  };

  const selectionSort = () => {
    for (let i = 0; i < array.length; i++) {
      let min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j;
        }
      }
      if (i !== min) {
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
      }
    }
    return array;
  };
}

export default basicSorting;
