'use-strict';

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// BUBBLE SORT

function bubble_Sort(array)
{
    var swap;
    var n = a.length-1;
    var x=a;
    do {
        swap = false;
        for (var i = 0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swap = true;
            }
        }
        n--;
    } while (swap);
 return x; 
}

console.log(bubble_Sort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// INSERTION SORT

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//SELECTION SORT

// array to sort
const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var min = i;
    for(var j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }
    if(i !== min) {
      swap(array, i, min);
    }
  }
  return array;
}

console.log(selectionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]