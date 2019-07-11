const Stack = require('./stackbuild');
const arrayStack = require('./arrayStack');

// Testing normal stack
// var myStack = new Stack();
// myStack.push(10);

// myStack.push(20);

// myStack.push(15);
// console.log(myStack);
// myStack.pop();
// console.log(myStack);
// myStack.pop();
// myStack.peek();
// console.log(myStack);
// myStack.pop();
// console.log(myStack);

// Testing stacks created with arrays
const arrStack = new arrayStack();
arrStack.push('google');
arrStack.push('udemy');
arrStack.push('discord');
arrStack.peek();
arrStack.pop();
console.log(arrStack);