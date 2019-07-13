function mergeSort(array){
    if(array.length ===1){
        return array;
    }
    // Split Array into right and left
    let left = array.slice(0,array.length/2);
    let right = array.slice(array.length/2,array.length);
    console.log('left:',left);
    console.log('right',right);
    
    return merge(mergeSort(left),mergeSort(right));
}
function merge(left, right){
    // logic to compare and merge
    let newArray = [];
    for(let i in left){
        for(let j in right){
            if(left[i]<right[j]){
                newArray.push(left[i]);
                continue;
            }
            else{
                newArray.push(right[j]);
                continue;
            }
        }
        console.log(newArray);
    }
    return newArray;
}
module.exports = mergeSort;