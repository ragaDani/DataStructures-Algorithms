class arrayStack {
    constructor(){
        this.stack = []
        this.length = this.stack.length;
    }
    peek(){
        return this.stack[0];
    }
    push(value) {
        return this.stack.push();
    }
    pop() {
        return this.stack.pop();
    }
}
module.exports = arrayStack;