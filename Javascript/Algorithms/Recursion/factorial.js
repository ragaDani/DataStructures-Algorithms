class Factorial{
    findFactorialRecursive(number){
        // Build a factorial function using recursion
        if(number == 0 || number == 1){
            return 1;
        }
        return (number * this.findFactorialRecursive(number-1));
    }
    
    findFactorialIterative(number){
        // Build a factorial function using iteration
        let fact = 1;
        for (let i=2;i<=number;i++){
            fact*=i;
        }
        return fact
    }
}
module.exports = Factorial;
