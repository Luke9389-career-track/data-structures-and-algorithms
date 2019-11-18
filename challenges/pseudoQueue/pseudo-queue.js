const { Stack } = require('../stacksAndQueues/stacks-and-queues');

class PseudoQueue {
  constructor() {
    this.qStack = new Stack;
    this.tempStack = new Stack;
  }

  enqueue(value) {
    while(this.qStack.top) {
      this.tempStack.push(this.qStack.pop());
    }
    this.tempStack.push(value);
    while(this.tempStack.top) {
      this.qStack.push(this.tempStack.pop());
    }
  }

  dequeue() {
    return this.qStack.pop();
  }

  peek() {
    return this.qStack.peek();
  }

}

module.exports = {
  PseudoQueue
};