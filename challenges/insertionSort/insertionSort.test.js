const { insertionSort } = require('./insertionSort.js');

describe('shifter module', () => {
  it('example 1', () => {
    const array1 = [8, 4, 23, 42, 16, 15];

    expect(insertionSort(array1)).toEqual([4, 8, 15, 16, 23, 42]);

  });
});
