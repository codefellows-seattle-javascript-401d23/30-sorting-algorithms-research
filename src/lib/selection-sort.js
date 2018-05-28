'use strict';

const selectionSort = (array) => {
  if (!array) throw new Error('missing input');
  const len = array.length;
  let min = null;
  for (let i = 0; i < len; i++) {
    if (typeof array[i] !== 'number') throw new Error('input must only contain numbers');
    min = i;
    for (let j = i; j < len; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      const [removed] = array.splice(min, 1);
      array.splice(i, 0, removed);
    }
  }
  return array;
};

export default selectionSort;
