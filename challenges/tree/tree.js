class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

module.exports = class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let node = this.root;
    return recurse(value, node);
  }
};

function recurse(value, node) {
  let dir = '';
  value > node.val ? dir = 'right' : dir = 'left';
  return node[dir] ? recurse(value, node[dir]) : node[dir] = new Node(value);
}

