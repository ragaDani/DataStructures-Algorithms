function linearSearch(list,value){
    for(i in list){
        if(list[i] === value){
            return true;
        }
    }
    return false;
}

function binarySearch(list,value){
    let lowIndex = 0;
    if(list !== undefined){
    var highIndex = list.length;
    }
    let mid = 0;
    while(mid >= 0 && mid < list.length-1){
        mid = Math.floor((highIndex + lowIndex)/2);
        if(value < list[mid]){
            highIndex = mid;
        }
        else if(value > list[mid]){
            lowIndex = mid;
        }
        else if(value === list[mid]){
            return list[mid];
        }
        
    }
    return false;
}

module.exports = {
    linearSearch: linearSearch,
    binarySearch: binarySearch
};