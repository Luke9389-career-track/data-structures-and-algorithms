const { Stack, Queue } = require('./stacks-and-queues');

describe('Stacks', () => {
  it('push onto stack', () => {
    const stack = new Stack;
    stack.push('first');
    expect(stack.top.value).toBe('first');
  }); 

  it('push multiple things onto stack', () => {
    const stack = new Stack;
    stack.push('third');
    stack.push('second');
    stack.push('first');
    expect(stack.top.value).toBe('first');
    expect(stack.top.next.value).toBe('second');
    expect(stack.top.next.next.value).toBe('third');
  });

  it('pop off of stack', () => {
    const stack = new Stack;
    stack.push('third');
    stack.push('second');
    stack.push('first');
    stack.pop();
    expect(stack.top.value).toBe('second');
    expect(stack.top.next.value).toBe('third');
  });

  it('pop off every element of stack', () => {
    const stack = new Stack;
    stack.push('third');
    stack.push('second');
    stack.push('first');
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBe(null);
  });

  it('peep top of stack', () => {
    const stack = new Stack;
    stack.push('third');
    stack.push('second');
    stack.push('first');
    expect(stack.peek()).toBe('first');
  });
  
  it('instantiate empty stack', () => {
    const stack = new Stack;
    expect(stack.top).toBe(null);
  });

});

describe('Queues', () => {
  it('enqueue into queue', () => {
    const queue = new Queue;
    queue.enqueue('first');
    expect(queue.front.value).toBe('first');
  });

  it('enqueue multiple elements into queue', () => {
    const queue = new Queue;
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    expect(queue.front.value).toBe('first');
    expect(queue.front.next.value).toBe('second');
    expect(queue.front.next.next.value).toBe('third');
  });

  it('dequeue out of queue', () => {
    const queue = new Queue;
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    queue.dequeue();
    expect(queue.front.value).toBe('second');
    expect(queue.front.next.value).toBe('third');
  });

  it('peek into queue', () => {
    const queue = new Queue;
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    expect(queue.peek()).toBe('first');
  });

  it('empty a queue with dequeues', () => {
    const queue = new Queue;
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBe(null);
  });

  it('can instantiate empty queue', () => {
    const queue = new Queue;
    expect(queue.front).toBe(null);
  });

});

