# Lab 30: Basic Sorting
======

## About this project:
This project was an assignment from Code Fellow's 401 - Advanced Javascript.
The assignment was to research and implement three sort algorithms:  

* [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort)
* [Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)
* [Selection Sort](https://en.wikipedia.org/wiki/Selection_sort)

## Implementation:
The sorting algorithms needs to be implemented to take an airty of one array and the output is the array sorted in place and returned at the end of the method. 

### Modules
- bubble-sort.js
    - This module exports a method that implements a bubble sort algorithm in javascript.  It has an airty of one input which is an array.  It's output is the array sorted in place and returned.
    - Time: O(n^2) where n = length of the array (if the array is already sorted O(n))
    - Space: O(1)
    
- insertion-sort.js
    - This module exports a method that implements a insertion sort algorithm in javascript.  It has an airty of one input which is an array.  It's output is the array sorted in place and returned.
    - Time: O(n^2) where n = length of the array (if the array is already sorted O(n))
    - Space: O(1)
    
- selection-sort.js
    - This module exports a method that implements a selection sort algorithm in javascript.  It has an airty of one input which is an array.  It's output is the array sorted in place and returned.
     - Time: O(n^2) where n = length of the array 
     - Space: O(1) 
- swap.js
    - This module exports a method that implements a memo swap using Javascript ES6 destructuring.  This module is exported to the bubble-sort.js and is used as a helper function.  The method takes in three parameters, an array and placeholders for two elements in the array that can be swapped based on a comparison in the sorting methods above.
       
### Test Suite
- sorting-algo.test.js
    - The test suite contains three simple tests for each sorting module.  The test compares an unsorted array input into each method and expects the returned value to be a sorted array.

### References
- http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript/
- http://nick.balestra.ch/2015/swapping-array-elements-in-place/


