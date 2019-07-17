const Node = require('../Linked List/nodebuild')
class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
        
    }
    push(value){
        const newNode = new Node(value);
        if(this.length === 0) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.top)
        {
            return null;
        }
        const holdingPointer = this.top;
        this.top = holdingPointer.next;
        this.length--;  
        if(this.length === 0){
            this.bottom = null;
        }      
        return this;

    }
}
module.exports = Stack;