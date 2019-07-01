const Node = require("./nodebuild");
class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        // this.head = {
        //     value: value,
        //     next: null
        // }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        // Code here
        const newNode = new Node(value);
        this.tail.next = newNode; // remember that head.next is also changing to newNode
        this.tail = newNode;
        this.length+=1;
        return this;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode
        this.length+=1;
        return this;
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !=null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
            
        }
        return array;
    }
    insert(index, value){
        const newNode = new Node(value);
        let currentNode =  this.head;
        let i =1;
        while(i <= this.length) {
            if(i === index-1){
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                break;
            }
            i++;
            currentNode = currentNode.next;
        }
        return this;
    }
    remove(index){
        let currentNode =  this.head;
        let counter =1;
        while(counter <= this.length) {
            if(counter === index-1){
                currentNode.next = currentNode.next.next;
                break;
            }
            counter++;
            currentNode = currentNode.next;
        }
        return this;
    }
    reverseNSqr(){ // This function using O(n^2) time and O(n) space to reversee a list. 
        if(!this.head.next){
            return this.head;
        }
        let len = this.length;
        let index = len;
        const newList = new LinkedList(this.tail.value);
        for(let i=1;i<len;i++)
        {   let currentNode = this.head;
            let counter = 1;
            while(counter < index -1){
                currentNode = currentNode.next;
                counter++;
            }
            newList.append(currentNode.value);
            index--;
        }
        return newList;
    }
    reverse() {
        if(!this.head.next){
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }
}

module.exports = LinkedList;