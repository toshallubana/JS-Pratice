class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class CircularSinglyLinkedList {
    constructor() {
        this.length = 0;
        this.tail = null;
    }

    insertNode(element,val) {
        let newNode = new Node(val);
        if(!this.tail) {
            this.tail = newNode;
            newNode.next = this.tail;
        }else {
            let current = this.tail;
            while(current.val != element) {
                current = current.next;
            }

            // element found
            newNode.next = current.next;
            current.next = newNode;
        }
        this.length++;
    }

    deleteNode(element) {
        if(!this.tail) {
            console.log('listEmpty');
        }else{
            let prev = this.tail;
            let current = prev.next;

            while(current.val != element) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;

            // one node linked list
            if(current == prev) {
                this.tail = null;
            }
            else if(this.tail == current) {
                this.tail = prev;
            }
            current.next = null;
        }
        this.length--;
    }

    traverse(){
        let current = this.tail;
        if(this.tail) {
            do {
                current = current.next
                console.log(current.val);
            } while(this.tail != current);
        }
    }
}

let list = new CircularSinglyLinkedList();
list.insertNode(10,10);
// list.insertNode(10,12);
// list.insertNode(12,11);
list.deleteNode(10);
list.traverse();
console.log(list)