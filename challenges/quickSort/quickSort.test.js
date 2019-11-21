const { partition } = require('./quickSort.js');

describe('quick sort module', () => {
  it('example 1', () => {
    const array1 = [8, 23, 4, 42, 16, 15];
    console.log(partition(array1));
    expect(partition(array1)).toEqual([4, 8, 15, 16, 23, 42]);

  });
});
