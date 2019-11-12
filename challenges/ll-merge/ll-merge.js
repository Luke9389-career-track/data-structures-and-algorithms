const { LinkedList } = require('../linkedList/linked-list');

function merge(ll1, ll2) {
  const newLL = new LinkedList;
  let tempNode1 = ll1.head;
  let tempNode2 = ll2.head;
  while(tempNode1 || tempNode2){
    if(tempNode1){newLL.append(tempNode1.value);
      tempNode1 = tempNode1.next;}
    if(tempNode2){newLL.append(tempNode2.value);
      tempNode2 = tempNode2.next;}
  } 
  return newLL;
}

module.exports = {
  merge
};