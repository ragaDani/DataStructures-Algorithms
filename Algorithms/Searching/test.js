var searchMethods = require('./searchAlgorithm.js');
var linearSearch = searchMethods.linearSearch;
var binarySearch = searchMethods.binarySearch;

var list = [-9,1,2,3,4,5,6,7,8,9,10];
let value1 = 1;
let value2 = -9;

// Testing linearSearch - Confirmed
let foundLinearSearch = linearSearch(list,value1);
if(foundLinearSearch){
    console.log("The number "+value1+" is present in the array");
}
else {
    console.log("The number "+value1+" is not present in the array");
}

// Testing binarySearch - Confirmed
let foundBinarySearch = binarySearch(list,value2);
if(foundBinarySearch){
    console.log("The number "+value2+" is present in the array");
}
else {
    console.log("The number "+value2+" is not present in the array");
}
