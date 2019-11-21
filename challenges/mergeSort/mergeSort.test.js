const { mergeSort } = require('./mergeSort.js');

describe('merge sort module', () => {
  it('example 1', () => {
    const array1 = [8, 23, 4, 42, 16, 15];
    expect(mergeSort(array1)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
