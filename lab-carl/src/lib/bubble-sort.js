'use strict';

// In a while loop, run through and compare each element to the one next to it. Use a flag for if a change was made to know when to stop the while loop. 

const bubbleSort = (arr) => {
  let switched = true;

  while (switched) {
    switched = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        switched = true;
      }
    }
  }

  return arr;
}