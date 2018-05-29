module.exports=function bubbleSort(input){
let checkingIndex=0;
let helperInt;
let helperInt1;
let orderingDone=false;

while(orderingDone===false)
{
    orderingDone=true;
    while(checkingIndex<input.length-1)
    {
        helperInt=input[checkingIndex];
        helperInt1=input[checkingIndex+1];
        if(helperInt1<helperInt)
        {
            orderingDone=false;
            input[checkingIndex]=helperInt1;
            input[checkingIndex+1]=helperInt;
        }
        checkingIndex+=1;
    }
}
return(input);
}
