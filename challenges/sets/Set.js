class Set {
  constructor(arr = []) {
    this.elements = arr;
  }

  has(item) {
    return this.elements.includes(item);
  }

  add(item) {
    if(this.has(item)) { throw new Error('The provided element already exists in the set'); }
    else { this.elements.push(item); }
  }

  remove(item) {
    if(this.has(item)) { this.elements.splice(this.elements.indexOf(item), 1); }
    else { throw new Error(`The provided element doesn't exist in the array`); }
  }

  intersection(set) {
    const arr = this.elements.reduce((acc, val) => {
      if(set.has(val)) { acc.push(val); }
      return acc;
    }, []);
    return new Set(arr);
  }

  union(set) {
    const arr = set.elements.reduce((acc, val) => {
      if(!acc.includes(val)) { acc.push(val); }
      return acc;
    }, [...this.elements]);
    return new Set(arr);
  }

  difference(set) {
    const temp = this.union(set);
    const intersection = this.intersection(set);
    intersection.elements.forEach(element => {
      temp.elements.splice(temp.elements.indexOf(element), 1);
    });
    return temp;
  }

  static intersection(set1, set2) {
    return set1.intersection(set2);
  }

  static union(set1, set2) {
    return set1.union(set2);
  }

  static difference(set1, set2) {
    return set1.difference(set2);
  }

}

module.exports = {
  Set
};


