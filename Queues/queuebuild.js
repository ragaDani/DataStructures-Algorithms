const Node = require('../Linked List/nodebuild')
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.last;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = this.first;
          
        }
        else {
            const holdingPointer = this.last;
            newNode.next = this.last;
            this.last = newNode;
            this.first.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if(!this.first){
            return null;
        }
        const holdingPointer = this.first;
         

    }
}
module.exports = Queue;