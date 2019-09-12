import { checkServerIdentity } from "tls";

//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {
    this.head = null;
  }
  push(input) {
    if(!this.head) {
      this.head = new Node(input);
      return;
    }
    let currentNode = this.head;
    while(currentNode.next != null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(input);
    currentNode.next.prev = currentNode;
  }

  display() {
    console.log("displaying");
    let currentNode = this.head;
    let first = true;
    while( (currentNode != null) ) {
      if(!first) {
        console.log(`prev ${currentNode.prev.value}`);
      }
      first = false;
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  pop() {
    if(!this.head) {
      return null;
    }
    if(!this.head.next) {
      let returnVal = this.head.value;
      this.head = null;
      return returnVal;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    let returnVal = currentNode.value;
    currentNode.prev.next = null;
    return returnVal;
  }

  shift() {
    if(!this.head) {
      return null;
    }
    let returnVal = this.head.value;
    if(this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.head = null;
    }
    return returnVal;
  }

  unshift(input) {
    if(!this.head) {
      this.head = new Node(input);
      return;
    }
    let newNode = new Node(input);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }

  delete(input) {
    if(!this.head) {
      return;
    }
    if(this.head.value == input) {
      if(this.head.next) {
        this.head = this.head.next;
        this.head.prev = null;
      } else {
        this.head = null;
      }
      return;
    }

    let currentNode = this.head;
    while(currentNode.next) {
      if(currentNode.next.value == input) {
        if(currentNode.next.next) {
          currentNode.next.next.prev = currentNode;
        }
        currentNode.next = currentNode.next.next;
        return;
      }
    }


  }

  count() {
    let count = 0;
    if(!this.head) {
      return count;
    }
    count++;
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
      count++;
    }
    return count;

  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}