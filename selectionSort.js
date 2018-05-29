'use strict';

const selectionSort = (array) => {
  let length = array.length;


  for(let i = 0; i < length; i++) {
    // assigning the minimum Value to an Index.
    let minValueIndex = i;
    // this 2nd for loop is the comparision loop for the current index we are checking.
    for(let j = i + 1; j < length; j++) {
      // here is the comparision logic would swap index part 1
      if(array[j] < array[minValueIndex]) {
        minValueIndex = j;
      }
    }
    // here is the comparision logic would swap index part 2
    let temp = array[i];
    array[i] = array[minValueIndex];
    array[minValueIndex] = temp;
  }
  return array;
}

// selectionSort([4,1,6,7,3,2,5]);

export { selectionSort };
