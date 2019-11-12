function treeIntersection(treeA, treeB) {
  const elementsA = treeA.preOrderTraversal();
  const elementsB = treeB.preOrderTraversal();
  const commonArr = [];

  elementsA.forEach(element => {
    if(elementsB.includes(element)) commonArr.push(element);
  });

  return commonArr;
}

module.exports = treeIntersection;

