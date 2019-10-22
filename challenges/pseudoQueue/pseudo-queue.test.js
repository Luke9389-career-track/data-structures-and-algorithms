const { PseudoQueue } = require('./pseudo-queue');
const { Stack } = require('../stacksAndQueues/stacks-and-queues');

describe('PseudoQueue', () => {

  it('initializes empty queue', () => {
    const pqueue = new PseudoQueue;
    const result = {
      qStack: new Stack,
      tempStack: new Stack
    };
    expect(pqueue).toEqual(result);
  });

  it('enqueues a single element', () => {
    const pqueue = new PseudoQueue;
    pqueue.enqueue('first');
    expect(pqueue.peek()).toEqual('first');
  });

  it('enqueues multiple elements', () => {
    const pqueue = new PseudoQueue;
    pqueue.enqueue('first');
    pqueue.enqueue('second');
    pqueue.enqueue('third');
    expect(pqueue.qStack.top.value).toBe('first');
    expect(pqueue.qStack.top.next.value).toBe('second');
    expect(pqueue.qStack.top.next.next.value).toBe('third');
  });

  it('dequeues multiple elements', () => {
    const pqueue = new PseudoQueue;
    pqueue.enqueue('first');
    pqueue.enqueue('second');
    pqueue.enqueue('third');
    pqueue.dequeue();
    pqueue.dequeue();
    pqueue.dequeue();
    expect(pqueue.qStack.top).toBe(null);
  });
});