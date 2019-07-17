const HashTable = require('./hashbuild');
function recurringCharacter(array){
    let obj = arrayToObject(array);
    for(let i =0;i<array.length;i++) {
        if(obj[array[i]]>1){
            return array[i];
        } else {
            obj[array[i]]+=1
        }
    }
}
function arrayToObject(array) {
    let cleanArray = removeDuplicates(array);
    var obj = {};
    for(let i =0;i<cleanArray.length;i++) {
        obj[cleanArray[i]]=0;
    }
    return obj;
}
function removeDuplicates(array) {
    let uniqueItems = [];
    uniqueItems.push(array[0]);
    arrayItem = array[1];
    uniqueItem = uniqueItems[0];
    let j = 1, i =1;
    while(arrayItem && uniqueItem) {
        if(arrayItem != uniqueItem) {
            uniqueItems.push(arrayItem)
            uniqueItem = uniqueItems[j];
            j++    
        }
        arrayItem = array[i];
        i++
    }
    return uniqueItems;
}

function recurringCharacter2(array) {
    let map = {};
    for(let i =0;i<array.length;i++){
        if(map[array[i]]!==undefined) {
            return array[i];
        } else {
            map[array[i]]=i;
        }
    }
}
console.log(recurringCharacter([1,2,3,5,3,3,4,4]));
console.log(recurringCharacter2([1,2,3,4,5,6,7,4]))
