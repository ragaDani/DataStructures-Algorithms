class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        //this.head = new Node(value);
        this.head = {
            value: value,
            next: null
        }
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
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(19);
myLinkedList.prepend(55);
myLinkedList.insert(3,88);
console.log(myLinkedList.printList());
myLinkedList.remove(4);
console.log(myLinkedList.printList());
//console.log(myLinkedList);