# Documentation

## Bubble Sort
`bubbleSort(array)`
- Arity of 1
- Takes in array of integers
- Will perform a bubble sort on the input array
- Possible errors:
    - No array passed
    - Array contains values that are not numbers

Example:

    bubbleSort([5, 10, 4, 8, 6]);
           
               [5, 10, 4, 8, 6]
               [5, 4, 10, 8, 6]
               [5, 4, 8, 10, 6]
               [5, 4, 8, 6, 10]
               [4, 5, 8, 6, 10]
               [4, 5, 8, 6, 10]
            => [4, 5, 6, 8, 10]

## Insertion Sort
`insertionSort(array)`
- Arity of 1
- Takes in array of integers
- Will perform an insertion sort on the input array
- Possible errors:
    - No array passed
    - Array contains values that are not numbers

Example:

    insertionSort([5, 10, 4, 8, 6]);
    
                  [5, 10, 4, 8, 6]
                  [5, 10, 4, 8, 6]
                  [4, 5, 10, 8, 6]
                  [4, 5, 8, 10, 6]
               => [4, 5, 6, 8, 10]

## Selection Sort
`selectionSort(array)`
- Arity of 1
- Takes in array of integers
- Will perform a selection sort on the input array
- Possible errors:
    - No array passed
    - Array contains values that are not numbers

Example:

    selectionSort([5, 10, 4, 8, 6]);
    
                  [4, 5, 10, 8, 6]
                  [4, 5, 10, 8, 6]
                  [4, 5, 6, 10, 8]
               => [4, 5, 6, 8, 10]


### Testing

    npm test