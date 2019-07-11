const Factorial = require('./factorial');
const Fibonacci = require('./fibonacci');

const fibObj = new Fibonacci();
const factObj = new Factorial();
console.log(factObj.findFactorialIterative(5));
console.log(factObj.findFactorialRecursive(5));
console.log(fibObj.findFibonacciRecursive(5));
console.log(fibObj.findFibonacciIterative(5));