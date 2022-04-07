// check cyclic linked list

class LinkedList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const head = new LinkedList(10);
const temp1 = new LinkedList(20);
const temp2 = new LinkedList(30);
head.next = temp1;
temp1.next = temp2;
temp2.next = head;

function flyodCycleDetection() {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
console.log(flyodCycleDetection());

// 10 -> 20 -> 30 -> 10
