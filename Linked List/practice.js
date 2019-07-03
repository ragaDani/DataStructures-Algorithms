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
        
    }
}
const myLL = new LL();
myLL.append(10);
//myLL.append(20);
//myLL.append(30);
myLL.prepend(50);
myLL.prepend(60);
console.log(myLL);