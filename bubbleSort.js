const array = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function bubbleSort(array)
{
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array [i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

bubbleSort(array);
console.log(array);