class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.value;
  }

  peek() {
    return this.top.value;
  }

}

class Queue {
  constructor(){
    this.front = null;
  }

  enqueue(value){
    let currentNode = this.front;
    while(currentNode ? currentNode.next : false){
      currentNode = currentNode.next;
    }
    const node = new Node(value);
    currentNode ? currentNode.next = node : this.front = node;
  }

  dequeue(){
    const node = this.front;
    this.front = node.next;
    return node;
  }

  peek(){
    return this.front.value;
  }
}

module.exports = {
  Stack,
  Queue
};