const { dateAdder } = require('./dateAdder');

// operators
// s	seconds
// m	minutes
// h	hours
// d	days
// w	weeks
// M	months
// y years

const date = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
console.log(date);
dateAdder(date, '1s');

describe('dateAdder', () => {
  it('adds seconds', () => {
    expect(dateAdder(date, '2s').toUTCString()).toBe(new Date(Date.UTC(96, 1, 2, 3, 4, 7)).toUTCString());
  });
  it('adds minutes', () => {
    expect(dateAdder(date, '2m').toUTCString()).toBe(new Date(Date.UTC(96, 1, 2, 3, 6, 5)).toUTCString());
  });
  it('adds hours', () => {
    expect(dateAdder(date, '2h').toUTCString()).toBe(new Date(Date.UTC(96, 1, 2, 5, 4, 5)).toUTCString());
  });
  it('adds days', () => {
    expect(dateAdder(date, '2d').toUTCString()).toBe(new Date(Date.UTC(96, 1, 4, 3, 4, 5)).toUTCString());
  });
  it('adds weeks', () => {
    expect(dateAdder(date, '2w').toUTCString()).toBe(new Date(Date.UTC(96, 1, 16, 3, 4, 5)).toUTCString());
  });
  it('adds months', () => {
    expect(dateAdder(date, '2M').toUTCString()).toBe(new Date(Date.UTC(96, 2, 29, 3, 4, 5)).toUTCString());
  });
  it('adds years', () => {
    expect(dateAdder(date, '2y').toUTCString()).toBe(new Date(Date.UTC(98, 1, 1, 3, 4, 5)).toUTCString());
  });
});

