module.exports=function selectionSort(input){
    let unsortedList=input.splice(-1,input.length-1);
    for(i=0;i<unsortedList.length;i++)
    {
        let min=Infinity;
        let minIndex=0;
        for(j=0;j<unsortedList.length;j++)
        {
            if(min>unsortedList[j])
            {
                min=unsortedList[j];
                minIndex=j;
            }
        }
        input.push(min);
        unsortedList[minIndex]=Infinity;
    }
    return input;
}