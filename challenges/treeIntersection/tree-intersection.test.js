const treeIntersection = require('./tree-intersection');
const Tree = require('../tree/tree');

describe('treeIntersection', () => {
  it('works', () => {
    const TreeA = new Tree(5);
    TreeA.add(2);
    TreeA.add(1);
    TreeA.add(3);
    TreeA.add(6);
    const TreeB = new Tree(15);
    TreeB.add(2);
    TreeB.add(11);
    TreeB.add(13);
    TreeB.add(6);

    expect(treeIntersection(TreeA, TreeB)).toEqual([2, 6]);
  });

});



