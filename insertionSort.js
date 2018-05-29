'use strict';

const insertionSort = (array) => {
  let length = array.length;

  for (let i = 1; i < length; i++) {
    let value = array[i];

    for(var j = i - 1; j > -1 && array[j] > value; j--){
      array[j + 1] = array[j];
    }
    array[j + 1] = value;
  }
  console.log(array);
  return array;
}

// insertionSort([1,3,2]);

export { insertionSort };
