var searchMethods = require('./searchAlgorithm.js');
var linearSearch = searchMethods.linearSearch;
var binarySearch = searchMethods.binarySearch;

var list = [1,2,3,4,5,6,7,8,9,10];
let value1 = 8;
let value2 = 10;

// Testing linearSearch - Confirmed
console.log(linearSearch(list,value1));

// Testing binarySearch - Confirmed
console.log(binarySearch(list,value2));