const array = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function swap(array, firstIndex, secondIndex){
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function selectionSort(array){
  var len = array.length,
    min;

  for (let i = 0; i < len; i++){
    min = i;

    for (let j = i + 1; j < len; j++){
      if (array[j] < array[min]){
        min = j;
      }
    }
    if (i !== min){
      swap(array, i, min);
    }
  }
  return array;
}

selectionSort(array);
console.log(array);
