class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublylinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    insertAtHead(val) {
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    insertAtTail(val) {
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
    }

    insertAtPosition(val,idx) {
        if(idx <= 0 || idx > idx) return undefined;
        if(idx == 1) return this.insertAtHead(val);
        // if(idx == this.length - 1) return this.insertAtTail(val);

        let temp = this.head;
        let count = 1;
        while(count < idx - 1) {
            count++;
            temp = temp.next;
        }

        if(temp.next == null) return this.insertAtTail(val);
        let newNode = new Node(val);
        newNode.next = temp.next;
        temp.next.prev = newNode;
        temp.next = newNode;
        newNode.prev = temp;
    }

    deleteNode(idx) {
        if(!this.head) return undefined;
        if(idx == 1) {
            let current = this.head;
            current.next.prev = null;
            this.head = current.next;
            current.next = null;
        }else{
            let current = this.head;
            let prev = null;
            let count = 1;
            while(count < idx) {
                prev = current
                current = current.next;
                count++;
            }
            if(!current) return false;
            current.prev = null;
            prev.next = current.next;
            current.next = null;
        }
        this.length--;
    }

    print() {
        let current = this.head;
        while(current) {
            console.log(current.val);
            this.length++;
            current = current.next;
        }
    }
}
const list = new DoublylinkedList();
list.insertAtHead(1);
list.insertAtTail(10);
list.insertAtTail(20);
list.insertAtTail(30);
list.insertAtPosition(40,5);
list.deleteNode(5);
list.print();
