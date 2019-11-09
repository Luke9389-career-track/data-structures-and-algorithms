class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = class Tree {
  constructor(value = null) {
    value ? this.root = new Node(value) : this.root = null;
  }

  add(value) {
    if(!this.root) { this.root = new Node(value); return; }
    let node = this.root;
    return findAndDrop(value, node);
  }

  preOrderTraversal(node = this.root, values = []) {
    values.push(node.value);
    if(node.left) this.preOrderTraversal(node.left, values);
    if(node.right) this.preOrderTraversal(node.right, values);
    return values;
  }

  inOrderTraversal(node = this.root, values = []) {
    if(node.left) this.inOrderTraversal(node.left, values);
    values.push(node.value);
    if(node.right) this.inOrderTraversal(node.right, values);
    return values;
  }

  postOrderTraversal(node = this.root, values = []) {
    if(node.left) this.postOrderTraversal(node.left, values);
    if(node.right) this.postOrderTraversal(node.right, values);
    values.push(node.value);
    return values;
  }
};

function findAndDrop(value, node) {
  let dir = '';
  value > node.value ? dir = 'right' : dir = 'left';
  return node[dir] ? findAndDrop(value, node[dir]) : node[dir] = new Node(value);
}



