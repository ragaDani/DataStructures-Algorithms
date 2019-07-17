function mergeSort(array){
    if(array.length ===1){
        return array;
    }
    // Split Array into right and left
    let left = array.slice(0,array.length/2);
    let right = array.slice(array.length/2,array.length);
    // console.log('left:',left);
    // console.log('right',right);
    
    return merge(mergeSort(left),mergeSort(right));
}
function merge(left, right){
    // logic to compare and merge
    let newArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            newArray.push(left[leftIndex]);
            leftIndex++;
        } else{ 
            newArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // console.log(newArray);
    return newArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
module.exports = mergeSort;