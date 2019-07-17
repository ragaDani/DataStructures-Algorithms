function selectionSort(array){
    
    
    for(let i=0;i<= array.length-2;i++){
        let min=array[i];
        let minIndex = i;
        for(let j=i+1;j<=array.length-1;j++)
        {
            if(array[j]<min){
                min = array[j]
                minIndex = j;
            }
        }
        let temp = array[i];
        array[i]=min;
        array[minIndex] = temp;
    }
    return array;
}
module.exports = selectionSort;