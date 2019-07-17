class arrayStack {
    constructor(){
        this.stack = []
        this.length = this.stack.length;
    }
    peek(){
        return this.stack[this.length-1];
    }
    push(value) {
        this.stack.push(value);
        this.length++;
        return this;
    }
    pop() {
        this.stack.pop();
        this.length--;
        return this;
    }
}
module.exports = arrayStack;