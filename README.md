# Sorting Algorithms
**Author**: Sarah Bixler
**Version**: 1.0.0 

- __Bubble Sort:__ exports a function: _bubbleSort(array)_ that takes an array of integers as a parameter (airty one).
  - __valid input:__ array of integers, returns array sorted in ascending order
  - __invalid input:__ empty array, returns thrown error  
  - __Big O:__ 
      - Space: 0(*1*) array is sorted in place   
      - Time:0(*n^2*) where *n* = length of the array, a each index iterates again--> *n* times *n*    

- __Insertion Sort:__  exports a function: _insertionSort(array)_ that takes an array of integers as a parameter (airty one).
  - __valid input:__ array of integers, returns array sorted in ascending order
  - __invalid input:__ empty array, returns thrown error  
  - __Big O:__ 
      - Space: 0(*1*) array is sorted in place   
      - Time:0(*n^2*) where *n* is the length of the array times the number of swaps, if the array is aleady sorted, Time is O(*n*) for the length of the array

- __Selection Sort:__ exports a function: _selectionSort(array)_ that takes an array of integers as a parameter(airty one).
  - __valid input:__ array of integers, returns the array sorted in ascending order
  - __invalid input:__ empty array, returns thrown error  
   - __Big O:__ 
      - Space: 0(*1*) array is mutated in place   
      - Time:0(*n^2*) where *n* = length of the array, each index in the array iterates over all other indexes in the array--> *n* times *n*  

## Architecture
Each function takes an integer array as a single argument and sorts it in-place (e.g. mutates the array). 
## Change Log
05-28-18 - Application exports bubble-sort, insertion-sort and selection sort.
## Credits and Collaborations
- [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort)
- [Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)
- [Selection Sort](https://en.wikipedia.org/wiki/Selection_sort)