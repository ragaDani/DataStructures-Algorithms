const Node = require('./nodebuild');
class LL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = new Node(value);
        if(this.length===0){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
    }
    printList(){
        let array = []
        var currentNode = this.head;
        while(currentNode !=null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }
    insert(index,value){
        const newNode = new Node(value);
        var currentNode = this.head;
        let loopIterator = 1;
        while(loopIterator <= index){
            if(loopIterator === index -1){
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            }
            loopIterator++;
            currentNode = currentNode.next;
        }
        this.length++;
        return this;
    }
    remove(index){
        var currentNode = this.head;
        let loopIterator = 1;
        while(loopIterator<=index){
            if(loopIterator === index -1){
                currentNode.next = currentNode.next.next;
            }
            loopIterator++;
            currentNode = currentNode.next;
        }
        this.length--;
        return this;
    }
    reverse(){
        this.tail = this.head;
        let first = this.head;
        let second = first.next;
        while(second){
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }
}
class DNode {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DLL {
    constructor(value){
        this.head = new DNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new DNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = new DNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }
    printList(){
        var array = [];
        var currentNode = this.head;
        while(currentNode!=null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }
    revPrintList(){
        let array = [];
        let currentNode = this.tail;
        while(currentNode!=null){
            array.push(currentNode.value);
            currentNode = currentNode.prev;
        }
        console.log(array);
    }
    insert(index,value){
        const newNode = new DNode(value);
        let currentNode = this.head;
        let loopIterator = 1;
        while(loopIterator<=index){
            if(loopIterator === index -1){
                newNode.next = currentNode.next;
                currentNode.next.prev = newNode;
                currentNode.next = newNode;
                newNode.prev = currentNode;
            }
            loopIterator++;
            currentNode = currentNode.next;
        }
        this.length++;
        return this;
    }
    remove(index){
        let currentNode = this.head;
        let loopIterator = 1;
        while(loopIterator<=index){
            let nextNode = currentNode.next;
            if(loopIterator===index -1){
                currentNode.next = nextNode.next;
                nextNode.next.prev = currentNode;
            }
            loopIterator++;
            currentNode = currentNode.next;
        }
        this.length--;
        return this;
    }
}

function lltest() {
    const myLL = new LL();
    myLL.append(10);
    myLL.append(20);
    myLL.append(30);
    myLL.prepend(50);
    myLL.prepend(60);
    myLL.insert(2,'Oi');
    //myLL.remove(3);
    //myLL.reverse();
    //console.log(myLL);
    myLL.printList();
}
function dlltest(){
    const myDLL = new DLL(10);
    myDLL.prepend(20);
    myDLL.prepend(30);
    myDLL.append('jude');
    myDLL.append('hey');
    myDLL.prepend('poggers');
    myDLL.insert(2,'pog');
    myDLL.remove(5);
    myDLL.printList();
    //myDLL.revPrintList();
    //console.log(myDLL);
}
//lltest();
dlltest();
