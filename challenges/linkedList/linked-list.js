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
    for(let i = 1; i < this.size; i++) {
      str = str + `, ${currentNode.value}`;
      currentNode = currentNode.next;
    }
    return str;
  }

  append(value) {
    let currentNode = this.head;
    while(currentNode ? currentNode.next : false) {
      currentNode = currentNode.next;
    }
    const node = new Node(value);
    currentNode ? currentNode.next = node : this.head = node, this.size++;
  }

  insertBefore(value, newVal) {
    let currentNode = this.head;
    if(currentNode) {
      console.log(currentNode);
      while(currentNode.next.value !== value) {
        currentNode = currentNode.next;
      }
      const node = new Node(newVal);
      node.next = currentNode.next;
      currentNode.next = node;
      this.size++;

    } else { throw new Error('cannot use insertBefore on empty list'); }
  }

  insertAfter(value, newVal) {
    let currentNode = this.head;
    if(currentNode) {
      console.log(currentNode);
      while(currentNode.value !== value) {
        currentNode = currentNode.next;
      }
      const node = new Node(newVal);
      node.next = currentNode.next;
      currentNode.next = node;
      this.size++;

    } else { throw new Error('cannot use insertAfter on empty list'); }
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