function insertionSort(array){

    for(let i=1;i<=array.length-1;i++){
        for(let j = i;j>0 ;j--){
            if(array[j]<array[j-1]){
                let temp = array[j];
                array[j]=array[j-1];
                array[j-1]=temp;    
            }
        }
    }
    return array;
}
module.exports = insertionSort;