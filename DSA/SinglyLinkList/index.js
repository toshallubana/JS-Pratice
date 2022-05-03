
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("woo");

/////////////////////////////////////

class SinglyLinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // push to the linked list
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // shift
    // if there are no nodes, return undefined
    // store the current head property in a variable
    // set the head property to be the current head's next property
    // decrement the length by 1
    // return the value of the node removed

    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList();
list.push(50);
list.push(10);
list.push(20);
list.push(30);