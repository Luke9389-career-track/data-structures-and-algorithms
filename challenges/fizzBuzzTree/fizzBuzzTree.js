function fizzBuzzTree(tree) {
  let currentNode = tree.root;
  buzzify(currentNode, tree);

  return tree;
}

function buzzify(node, tree) {
  if(node.left) buzzify(node.left, tree);
  if(node.right) buzzify(node.right, tree);
  if(node.value % 3 === 0) { node.value = 'fizz'; }
  else if(node.value % 5 === 0) { node.value = 'buzz'; }
  
}

module.exports = {
  fizzBuzzTree
};
