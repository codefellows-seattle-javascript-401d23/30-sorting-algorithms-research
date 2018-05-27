'use strict';

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let value = null;
    let index = null;
    for (let j = i; j < arr.length; j++) {
      if (value === null) {
        value = arr[j];
        index = j;
      } else {
        if (arr[j] < value) {
          value = arr[j];
          index = j;
        }
      }
    }
    if (value !== null) {
      let smallest = arr.splice(index, 1);
      arr.splice(i, 0, smallest[0]);
    }
  }
  return arr;
}

export default selectionSort;
