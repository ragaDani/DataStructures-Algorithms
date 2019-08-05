function linearSearch(list,value){
    for(i in list){
        if(list[i] == value){
            return list[i];
        }
    }
}

function binarySearch(list,value){
    let lowIndex = 0;
    if(list !== undefined){
    var highIndex = list.length;
    }
    
    while(lowIndex<highIndex){
        let mid = Math.floor((highIndex + lowIndex)/2);
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