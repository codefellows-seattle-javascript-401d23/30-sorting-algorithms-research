'use strict';

const insertionSort = (array) => {
  if (!array.length) {
    throw Error('the array must be populated');
  } else {
    const { length } = array;
    let iterator = 1;
    while (iterator < length) {
      const value = array[iterator];
       // if (typeof value !== 'number') throw Error('input must contain only numbers'); // why doesnt this work?
      let hindIterator = iterator - 1;
      while (hindIterator >= 0 && array[hindIterator] > value) {
        array[hindIterator + 1] = array[hindIterator];
        hindIterator -= 1;
      }
      array[hindIterator + 1] = value;
      iterator += 1;
    }
  }
};

export default insertionSort;

