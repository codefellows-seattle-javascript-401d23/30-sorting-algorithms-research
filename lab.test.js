let insertion = require('./insertion');
let bubble = require('./bubble');
let selection = require('./selection');

let testArray = [3,0,1,2,4]
let testArray1= [0];
let testArray2= [99,12,157812,32354,123,5623,43,253,1253,1245,312457,654,7];

let answerArray = [0,1,2,3,4]
let answerArray1 = [0];
let answerArray2 = [7,12,43,99,123,253,654,1245,1253,5623,32354,157812,312457];

test('insertion', () => {
    expect(insertion(testArray)).toEqual(answerArray)
    expect(insertion(testArray)).toEqual(answerArray)
    expect(insertion(testArray)).toEqual(answerArray)
})

 test('bubble', () => {
    expect(bubble(testArray)).toEqual(answerArray)
    expect(insertion(testArray1)).toEqual(answerArray1)
    expect(insertion(testArray2)).toEqual(answerArray2)
})

test('selection', () => {
    expect(selection(testArray)).toEqual(answerArray)
    expect(insertion(testArray1)).toEqual(answerArray1)
    expect(insertion(testArray2)).toEqual(answerArray2)
})  