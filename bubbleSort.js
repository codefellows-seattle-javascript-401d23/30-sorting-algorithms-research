const bubbleSort = (array) => {
  let length = array.length;

  for(let i = length -1; i >= 0; i--){
    for(let j = 1; j <= i; j++){
      if(array[j - 1] > array[j]) {
        let swap = array[j - 1];
        array[j - 1] = array[j];
        array[j] = swap;
      }
    }
  }
  return array;
}


bubbleSort([2,1,10,14,21,22,13]);