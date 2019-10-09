const { LinkedList } = require('../linkedList/linked-list');

module.exports = class AnimalShelter {
  constructor() {
    this.dogList = new LinkedList;
    this.catList = new LinkedList;
  }

  enqueue(animal) {
    if(animal.species === 'dog') {
      this.dogList.append(animal);
    } else if(animal.species === 'cat') {
      this.catList.append(animal);
    } else { throw new Error('Animal Shelter only accepts dogs and cats.'); }
  }

  dequeue(pref) {
    if(pref === 'dog') {
      const dog = this.dogList.head;
      this.dogList.head.next ? this.dogList.head = this.dogList.head.next : this.dogList.head = null;
      this.dogList.size--;
      return dog;
    } else if(pref === 'cat') {
      const cat = this.catList.head;
      this.catList.head = this.catList.head.next;
      this.catList.size--;
      return cat;
    } else { return null; }
  }

};


