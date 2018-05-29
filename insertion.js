module.exports=function insertionSort(input){
    let outputArray=new Array;
    let numbersFound=0;
    let valueCheckedAgainst=0;
    while(numbersFound<input.length)
    {
        for(let indexCheckedAgainst=0;indexCheckedAgainst<input.length;indexCheckedAgainst++)
        {
            if(valueCheckedAgainst===input[indexCheckedAgainst])
            {
                numbersFound+=1;
                outputArray.push(valueCheckedAgainst);
            }
        }
    valueCheckedAgainst+=1;
    }
    return outputArray;
}