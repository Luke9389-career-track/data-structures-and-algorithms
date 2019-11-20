const Tree = require('./tree');

describe('tree', () => {
  it('can instantiate an empty tree', () => {
    const myTree = new Tree();
    expect(myTree.root).toEqual(null);
  });
  it('can instantiate a tree with a root node', () => {
    const myTree = new Tree(5);
    expect(myTree.root.value).toEqual(5);
  });

  it('can add', () => {
    const myTree = new Tree(5);
    expect(myTree.root.value).toEqual(5);
    myTree.add(3);
    expect(myTree.root.left.value).toEqual(3);
    myTree.add(7);
    expect(myTree.root.right.value).toEqual(7);
    myTree.add(6);
    expect(myTree.root.right.left.value).toEqual(6);
  });

  it('preOrderTraversal', () => {
    const myTree = new Tree(5);
    myTree.add(2);
    myTree.add(1);
    myTree.add(3);
    myTree.add(6);
    expect(myTree.preOrderTraversal()).toEqual([5, 2, 1, 3, 6]);
  });

  it('inOrderTraversal', () => {
    const myTree = new Tree(5);
    myTree.add(2);
    myTree.add(1);
    myTree.add(3);
    myTree.add(6);
    expect(myTree.inOrderTraversal()).toEqual([1, 2, 3, 5, 6]);
  });

  it('postOrderTraversal', () => {
    const myTree = new Tree();
    myTree.add(5);
    myTree.add(2);
    myTree.add(1);
    myTree.add(3);
    myTree.add(6);
    expect(myTree.postOrderTraversal()).toEqual([1, 3, 2, 6, 5]);
  });
  it('breadthFirstTraversal', () => {
    const myTree = new Tree();
    myTree.add(5);
    myTree.add(2);
    myTree.add(1);
    myTree.add(3);
    myTree.add(6);
    expect(myTree.breadthFirstTraversal()).toEqual([5, 2, 6, 1, 3]);
  });

});


