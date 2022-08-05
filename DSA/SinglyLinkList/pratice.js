class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertAtHead(val){
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insertAtTail(val) {
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    insertAtPosition(val,idx){
        if(idx < 0) return undefined
        if(idx == 0) return this.insertAtHead(val);
        let count = 1;
        let current = this.head;
        while(count < idx - 1) {
            current = current.next;
            count++;
        }
        if(current.next == null) return this.insertAtTail(val);
        let newNode = new Node(val);
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
    }

    deleteNode(idx){
        if(idx < 0 || idx > this.length) return undefined;
        if(idx == 0) {
            let current = this.head;
            this.head = this.head.next;
        }else{
            let current = this.head;
            let prev = null;
            let count = 1;
            while(count < idx) {
                prev = current;
                current = current.next;
                count++;
            }
            prev.next = current.next;
            if(current.next == null) {
                this.tail = prev
            }
        }
        this.length--;
    }

    traverse(){
        let current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next;
        }

    }
}

const list = new SinglyLinkedList();
list.insertAtTail(10);
list.insertAtTail(12);
list.insertAtTail(13);
list.insertAtPosition(22,4)
list.deleteNode(4)
list.traverse();
console.log(list);
