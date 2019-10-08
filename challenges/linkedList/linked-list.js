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
    currentNode ? currentNode.next = node : this.head = node;
    this.size++;
  }

  insertBefore(value, newVal) {
    let currentNode = this.head;
    if(currentNode) {
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
      while(currentNode.value !== value) {
        currentNode = currentNode.next;
      }
      const node = new Node(newVal);
      node.next = currentNode.next;
      currentNode.next = node;
      this.size++;

    } else { throw new Error('cannot use insertAfter on empty list'); }
  }

  kthFromEnd(k) {
    if(k < 0) {
      throw new Error('cannot use negative k');
    } else if(this.size === 0) {
      throw new Error('cannot use kthFromEnd on empty list');
    } else if(k >= this.size) {
      throw new Error('k cannot be greater than or equal to list size');
    } else {
      let currentNode = this.head;
      for(let i = 0; i < this.size - k - 1; i++) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
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