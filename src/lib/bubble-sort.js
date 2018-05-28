// BUBBLE SORT:
// repeatedly steps through list to be sorted and compares adjacent items and swaps them

'use strict';

const bubbleSort = (array) => {
  if (!array) throw new Error('missing input');
  let modified = true;
  const len = array.length;
  while (modified) {
    modified = false;
    for (let i = 0; i < len; i++) {
      if (typeof array[i] !== 'number') throw new Error('input must only contain numbers');
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        modified = true;
      }
    }
  }
  return array;
};

export default bubbleSort;
