'use strict';

// Mike:  Implementing memo swap using ES6 destructuring - super cool!!!

export default function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
  return array;
}
