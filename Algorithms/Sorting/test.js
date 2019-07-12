var array = ['a','y','r','i','z','b','e','m','l','2','5','1','3','4'];
const bubbleSort = require('./bubbleSort');


function isSorted(array){
    console.log((array.sort() === array));
}

isSorted(bubbleSort(array));
// console.log(bubbleSort(array));

