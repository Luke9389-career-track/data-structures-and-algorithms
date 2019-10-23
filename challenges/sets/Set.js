export class Set {
  constructor() {
    this.elements = [];
  }

  has(item) {
    return this.elements.includes(item);
  }

  add(item) {
    if(this.has(item)) { throw new Error('This element already exists in the set'); }
    else { this.elements.push(item); }
  }

  


}
