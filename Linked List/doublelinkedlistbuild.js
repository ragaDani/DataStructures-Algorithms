class Node {
    constructor(value){
        this.value = value,
        this.next = null,
        this.prev = null
    }
}
class DoubleLinkedList {
    constructor(value){
        this.head = new Node(value),
        this.tail = this.head,
        //this.head.next = this.tail,
        //this.tail.prev = this.head
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList(){
        const array = []
        let currentNode = this.head;
        while(currentNode != null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index,value){
        const newNode = new Node(value);
        let currentNode = this.head;
        let counter = 1;
        while(counter < index) {
            if(counter === index-1){
                newNode.next = currentNode.next;
                newNode.prev = currentNode;
                currentNode.next.prev = newNode;
                currentNode.next = newNode;
            }
            counter++;
            currentNode = currentNode.next;
        }
        this.length++;
        return this
    }
    remove(index){
        let currentNode = this.head;
        let counter = 1;
        while(counter < index)
        {
            if(counter === index -1){
                currentNode.next = currentNode.next.next;
                currentNode.next.prev = currentNode;
            }
            counter++;
            currentNode = currentNode.next;
        }
        this.length--;
        return this;
    }
}
var myDLL = new DoubleLinkedList(10);
myDLL.append(12);
myDLL.prepend(15);
console.log(myDLL.printList());
myDLL.insert(2,56);
myDLL.insert(3,44);
myDLL.prepend(8);
myDLL.remove(2);
console.log(myDLL.printList());
console.log(myDLL);