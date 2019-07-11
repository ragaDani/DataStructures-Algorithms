class Fibonacci{
    findFibonacciRecursive(number){
        // Build a fibonacci function using recursion
        if(number == 1){
            return 1;
        }
        else if(number == 2){
            return 1;
        }
        return (this.findFibonacciRecursive(number-1) + this.findFibonacciRecursive(number-2));
    }
    
    findFibonacciIterative(number){
        // Build a fibonacci function using iteration
        let previousFibonnaci = 0;
        let fibonacci = 1;
        for (let i=1;i<number;i++){
            let temp = fibonacci;
            fibonacci+=previousFibonnaci;
            previousFibonnaci = temp;
        }
        return fibonacci;
    }
}
module.exports = Fibonacci;
