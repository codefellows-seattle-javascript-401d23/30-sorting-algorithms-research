## Sorting Methods

## Bubble Sort 
Sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.ubble" to the top of the list.

![220px-bubblesort-edited-color svg](https://user-images.githubusercontent.com/25094584/40657364-6effde50-62fc-11e8-821f-992931186638.png)

## Insertion Sort 
A simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:

1. Simple implementation: Jon Bentley shows a three-line C version, and a five-line optimized version[2]
2. Efficient for (quite) small data sets, much like other quadratic sorting algorithms
3. More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms such as selection sort or bubble sort
4. Adaptive, i.e., efficient for data sets that are already substantially sorted: the time complexity is O(nk) when each element in the input is no more than k places away from its sorted position
5. Stable; i.e., does not change the relative order of elements with equal keys
6. In-place; i.e., only requires a constant amount O(1) of additional memory space
7. Online; i.e., can sort a list as it receives it
8. When people manually sort cards in a bridge hand, most use a method that is similar to insertion sort.
![insertion_sort](https://user-images.githubusercontent.com/25094584/40657292-2fbd63b6-62fc-11e8-9f45-6c2a2fe72aa8.gif)

## Selection Sort 
Is a sorting algorithm, specifically an in-place comparison sort. It has O(n2) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.

The algorithm divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

![250px-selection_sort_animation](https://user-images.githubusercontent.com/25094584/40657349-5dd28e48-62fc-11e8-95fe-e6a5c5d5461e.gif)
