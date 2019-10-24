const { Set } = require('./set');

describe('Set instance methods', () => {
  it('has', () => {
    const set = new Set([1, 2, 3]);
    expect(set.has(3)).toBe(true);
    expect(set.has(4)).toBe(false);
  });

  it('add', () => {
    const set = new Set([1, 2, 3]);
    expect(set.has(4)).toBe(false);
    expect(set.add(4));
    expect(set.has(4)).toBe(true);
    expect(() => { set.add(4); }).toThrow('The provided element already exists in the set');
  });

  it('remove', () => {
    const set = new Set([1, 2, 3]);
    expect(() => { set.remove(4); }).toThrow('The provided element doesn\'t exist in the array');
    expect(set.add(4));
    set.remove(4);
    expect(set.has(4)).toBe(false);
  });

  it('intersection', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 4, 5]);
    const set3 = new Set([7, 8, 9]);
    expect(set1.intersection(set2).elements).toEqual([2, 3]);
    // console.log(set2.intersection(set1).elements);
    // console.log(set1.intersection(set2).elements);
    expect(set2.intersection(set1).elements).toEqual([2, 3]);
    expect(set1.intersection(set3).elements).toEqual([]);
  });

  it('union', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 4, 5]);
    expect(set1.union(set2).elements).toEqual([1, 2, 3, 4, 5]);
  });


  it('difference', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 4, 5]);
    expect(set1.difference(set2).elements).toEqual([1, 4, 5]);
  });

});

describe('Set static methods', () => {
  it('intersection', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 4, 5]);
    expect(Set.intersection(set1, set2).elements).toEqual([2, 3]);
  });

  it('union', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 4, 5]);
    expect(Set.union(set1, set2).elements).toEqual([1, 2, 3, 4, 5]);
  });

  it('difference', () => {
    const set1 = new Set([1, 2, 3]);
    const set2 = new Set([2, 3, 4, 5]);
    expect(Set.difference(set1, set2).elements).toEqual([1, 4, 5]);
  });
});

