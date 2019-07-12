var array = ['a','y','r','i','z','b','e','m','l','2','5','1','3','4'];
const testArr = array;
const bubbleSort = require('./bubbleSort');
const selectionSort = require('./selectionSort');
const insertionSort = require('./insertionSort');
console.log("Input array: "+testArr);
function isSorted(inArray){
    
    console.log("Your sorted array: "+inArray);
    console.log("Default sorted array: "+array.sort());
    
}

isSorted(selectionSort(array));
// console.log(bubbleSort(array));

