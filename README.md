

## Bubble Sort
* This module takes an array as a single argument and returns a new sorted array.
Bubble sort uses inner loop to compare values of each 2 elements with index j and j+1 and swap them if value of index j+1 element is smaller than element with index j. The outer loop repeats the j loop n (n = number of elements in the array) amount of times until all the elements are sorted.

## Insertion Sort
This module takes an array as a single argument and returns a new sorted array. Insertion sort uses 2 for loops, first loop takes the value of the array starting from index 1 and assigns it to temporary value(sorted) and the other loop takes the value right before that element to compare them. If the array[i] element is smaller than array[j] then array[1] gets inserted in front of array[j] until the condition is no longer met. The loop goes through all the array elements comparing 2 elements each time. 

 
### Selection Sort
This module takes an array as a single argument and returns a new sorted array. Selection sort uses 2 loops and running outer loop we define the first element of the array to be the minimum value(minValue). When we travel through the array elements we compare other values with the first one and if any other value is smaller than the first element of the array(minValue) then they swap positions inside array and repeat this through the rest of elements until there is nothing to compare and swap.

