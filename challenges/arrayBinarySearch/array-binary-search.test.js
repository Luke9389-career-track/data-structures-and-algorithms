const search = require('./array-binary-search.js');

describe('search module', () => {
  it('example 1', () => {
    const array1 = [4, 8, 15, 16, 23, 42];
    const number1 = 15;

    expect(search.binarySearch(array1, number1)).toEqual(2);

  });

  it('example 2', () => {
    const array2 = [11, 22, 33, 44, 55, 66, 77];
    const number2 = 90;

    expect(search.binarySearch(array2, number2)).toEqual(-1);

  });

});