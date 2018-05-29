![cf](https://i.imgur.com/7v5ASc8.png) Lab 30: Basic Sorting
======


## Feature Tasks  
### Sorting Method
Research and implement the following Sorting Methods:
* [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort)
* [Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)
* [Selection Sort](https://en.wikipedia.org/wiki/Selection_sort)

## Documentation

Bubble Sort (bubbleSort function) has an arity of 1 and expects an array (list) of numbers. The bubble sort is a comparison sort algorithm stepping through the list and comparing each adjacent item, swapping if in the wrong order. This is repeated until no swaps are needed.<br>The performance is slow.

Insertion Sort (insertionSort function) has an arity of 1 and expects an array (list) of numbers. This sorting method is not efficient for large lists. It is more efficient than selection or bubble sort. Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.

Selection Sort (selectionSort function) has an arity of 1 and expects an array (list) of numbers. Selection sort is not efficient on large lists. It divides input into a sublist of sorted items and a sublist waiting to be sorted. The selection sort finds the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.


