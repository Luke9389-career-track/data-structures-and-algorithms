class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    const node = new Node(value);
    node.next = this.head;

    this.head = node;
    this.size++;
  }

  includes(value) {
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++) {
      if(currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let str = `${this.head.value}`;
    let currentNode = this.head.next;
    console.log(this.size);
    for(let i = 1; i < this.size; i++) {
      str = str + `, ${currentNode.value}`;
      currentNode = currentNode.next;
    }
    return str;
  }

  append() {
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++) {
      currentNode = currentNode.next;
    }
    console.log(currentNode);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = {
  LinkedList,
  Node,
};