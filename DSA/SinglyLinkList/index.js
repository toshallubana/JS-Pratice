
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
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){ // O(N)
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++
        }
        return current;
    }
    set(value,index){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = value;
            return true;
        }
        return false;
    }
    insert(val, index){ // O(1)
        if(index < 0 || index > this.length) return false;
        if(index == this.length) return this.push(val);
        if(index == 0) return this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){ // O(1) or O(N)
        if(index < 0 || index > this.length) return undefined;
        if(index == this.length - 1) return this.pop();
        if(index == 0) return this.shift();
        let prevNode = this.get(index - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val)
            current = current.next
            console.log(arr)
        }
    }
}

let list = new SinglyLinkedList();
list.push(50);
list.push(10);
list.push(20);
list.push(30);
list.get(2);
list.set(2,2);
list.insert(2,2);
list.remove(3);
list.reverse();