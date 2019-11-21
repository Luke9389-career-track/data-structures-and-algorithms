const Tree = require('../tree/tree');
const { fizzBuzzTree } = require('./fizzBuzzTree');

describe('fizzBuzzTree', () => {
  it('works', () => {
    const myTree = new Tree();
    myTree.add(5);
    myTree.add(2);
    myTree.add(1);
    myTree.add(3);
    myTree.add(6);
    expect(myTree.postOrderTraversal()).toEqual([1, 3, 2, 6, 5]);
    const fbTree = fizzBuzzTree(myTree);
    expect(fbTree.postOrderTraversal()).toEqual([1, 'fizz', 2, 'fizz', 'buzz']);
  });
});
