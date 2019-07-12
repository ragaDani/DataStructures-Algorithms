function bubbleSort(array){
    for(let i = array.length-1;i>0;i--){
        for (let j=0;j<i;j++){
            if(array[j]>array[j+1]){
                swap(aray[j],array[j+1]);
            }
        }
    }
}
function swap(value1,value2){
    let temp = value1;
    value1 = value2;
    value2 = temp;
    return this;
}