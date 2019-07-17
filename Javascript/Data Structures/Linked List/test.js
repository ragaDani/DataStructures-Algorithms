const LinkedList = require('./linkedlistbuild');
const DoubleLinkedList = require('./doublelinkedlistbuild');

// LinkedList Test
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(19);
myLinkedList.prepend(55);
myLinkedList.insert(3,88);
console.log(myLinkedList.printList());
myLinkedList.remove(4);
console.log(myLinkedList.printList());
const newList = myLinkedList.reverse();
console.log(newList.printList());

// DoubleLinekdList Test
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