class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length]=item;
        this.length++;
        return this.length;
    }
    pop() {
        const popElement = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        console.log(popElement); 
    }
    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index) {
        for(let i = index; i < this.length -1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1];
    }
}

module.exports = MyArray;

// const newArray = new MyArray();
// newArray.push('hi');
// newArray.push('you');
// newArray.push('!');
// newArray.pop();
// //newArray.delete(1);
// newArray.push('how');
// newArray.push('are');
// newArray.push('you');
// //newArray.delete(1);
// console.log(newArray);
