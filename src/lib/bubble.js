'use strict';

const bubbleSort = (array) => {
  if (!array) {
    return undefined;
  }
  let swaped = true;
  while (swaped) {
    swaped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swaped = true;
      }
    }
  }
  return array;
};

export default bubbleSort;
