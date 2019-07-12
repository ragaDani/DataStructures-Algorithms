function selectionSort(array){
    let min=array[0];
    let minIndex = 0;
    for(let i=0;i< array.length-2;i++){
        for(let j=i+1;j<array.length-1;j++)
        {
            if(array[j]<array[i]){
                min = array[j]
                minIndex = j;
            }
        }
        let temp = array[i];
        array[i]=min;
        array[minIndex] = temp;
    }
}
module.exports = selectionSort;