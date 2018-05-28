**Author**: Daniel Shelton

**Version**: 1.0.0

# Overview
This application is composed of 3 array-sorting functions with accompanying test suites.

# Methods
For each of the following methods, the expected input is an array of integers, if the method is called without an input parameter OR if the method is called with an array that contains any value whose data-type is not that of a number, then the method will throw an error.

## Bubble Sort Method
### Algorithm
The Bubble-sort method repeatedly steps through the array until it has been fully sorted. On each step-through the method will compare each of the adjacent values in the array and will swap them if they're in the incorrect order.
### Big O Time Complexity
- Best: O(n)
- Worst: O(n^2)

## Insertion Sort Method
### Algorithm
While the Insertion-sort method iterates through the array, it consumes one input element each repetition, and grows a sorted output list. Each iteration removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.
### Big O Time Complexity
- Best: O(n)
- Worst: O(n^2)

## Selection Sort Method
### Algorithm
The Selection-sort method divides the array into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging it with the leftmost unsorted element, and moving the sublist boundaries one element to the right. 
### Big O Time Complexity
- Best: O(n^2)
- Worst: O(n^2)


# Testing
To run tests enter the following into the CLI:

`npm run test`

# Change Log
05-27-2018 8:30PM - All 3 sort methods complete.