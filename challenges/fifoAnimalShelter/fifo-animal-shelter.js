const LinkedList = require('../linkedList/linked-list');

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
      this.dogList.head = this.dogList.head.next;
      return dog;
    } else if(pref === 'cat') {
      const cat = this.catList.head;
      this.catList.head = this.catList.head.next;
      return cat;
    } else { return null; }
  }

};


