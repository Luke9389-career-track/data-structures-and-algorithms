const shifter = require('./array-shift.js');

describe('shifter module', () => {
  it('example 1', () => {
    const array1 = [2, 4, 6, 8];
    const number1 = 5;

    expect(shifter.arrayShift(array1, number1)).toEqual([5, 2, 4, 6, 8]);

  });

  it('example 2', () => {
    const array2 = [4, 8, 15, 23, 42];
    const number2 = 16;

    expect(shifter.arrayShift(array2, number2)).toEqual([16, 4, 8, 15, 23, 42]);

  });

});