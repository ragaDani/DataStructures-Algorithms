var array = ['a','y','r','i','z','b','e','m','l','2','5','1','3','4'];
var newArray = [5,4,3,6,2,1];
const testArr = array;
const bubbleSort = require('./bubbleSort');
const selectionSort = require('./selectionSort');
const insertionSort = require('./insertionSort');
const mergeSort = require('./mergeSort');

console.log("Input array: "+testArr);
function isSorted(inArray){
    
    console.log("Your sorted array: "+inArray);
    console.log("Default sorted array: "+newArray.sort());
    
}

isSorted(mergeSort(array));
// console.log(bubbleSort(array));

