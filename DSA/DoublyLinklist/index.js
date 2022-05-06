class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublylinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let tailNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = tailNode.prev;
            this.tail.next = null;
            tailNode.prev = null;
        }
        this.length--;
        return tailNode;
    }
    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.next = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        let length = this.length;
        let foundIdx = Math.floor((this.length - 1)/2);
        
        if(idx <= foundIdx){
            let counter = 0;
            let current = this.head;
            while(counter != idx){
                current = current.next
                counter++
            }
            return current;
        }else{
            let counter = this.length-1;
            let current = this.tail;
            while(counter != idx){
                current = current.prev
                counter--;
            }
            return current;
        }
    }
    set(val,idx){
        let foundNode = this.get(idx);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(val,idx){
        if(idx < 0 || idx > this.length) return false;
        if(idx === 0) return this.unshift(val);
        if(idx === this.length) return this.push(val);
        let newNode = new Node(val);
        let prevNode = this.get(idx - 1);
        let afterNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.prev = afterNode;
        this.length++;
        return this;
    }
    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx === 0) return this.shift();
        if(idx === this.length - 1) return this.pop();
        let removeNode = this.get(idx);
        let beforeNode = removedNode.prev;
        let afterNode = removeNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        this.length--;
        return removeNode;
    }
}
const list = new DoublylinkedList();
list.push(10);
list.push(20);
list.pop();