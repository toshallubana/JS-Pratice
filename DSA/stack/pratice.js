// using array

class Stack {

    constructor(size) {
        this.stack = [];
        this.totalSize = 5;
        this.size = -1;
    }

    push(value) {
        if(this.size < this.totalSize && value) {
            this.size++;
            console.log(this.size,value)
            this.stack[this.size] = value;
        }else{
            console.log("stack overflow");
        }
    }

    pop(){
        if(this.size >= 0) {
            this.stack.length = this.size--;
        }
        else{
            console.log("stack underflow");
        }
    }

    peek() {
        if(this.size >= 0) {
            return this.stack[this.size];
        }else {
            console.log("stack is empty");
            return -1;
        }
    }

    isEmpty() {
        if(this.size == -1) {
            return true;
        }else {
            return false;
        }
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);
stack.pop();
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack);