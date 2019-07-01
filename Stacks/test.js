const Stack = require('./stackbuild');
const arrayStack = require('./arrayStack');

var myStack = new Stack();
myStack.push(10);

myStack.push(20);

myStack.push(15);
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.pop();
myStack.peek();
console.log(myStack);
myStack.pop();
console.log(myStack);
