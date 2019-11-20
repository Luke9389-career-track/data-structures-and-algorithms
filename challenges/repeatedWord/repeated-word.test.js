const { topRepeatedList, firstRepeatedWord } = require('./repeated-word.js');

describe('firstRepeatedWord', () => {
  it('example 1', () => {
    const string = 'Once upon a time, there was a brave princess who...';
    expect(firstRepeatedWord(string)).toEqual('a');
  });

  it('example 2', () => {
    const string = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(firstRepeatedWord(string)).toEqual('it');
  });

  it('example 3', () => {
    const string = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(firstRepeatedWord(string)).toEqual('summer');
  });

  it('example 4', () => {
    const string = 'A sentence with no duplicates';
    expect(firstRepeatedWord(string)).toEqual('no duplicates found');
  });

});

describe('topRepeatedList', () => {
  it('example 1', () => {
    const string = 'Once upon a time, there was a brave princess who...';
    expect(topRepeatedList(string)[0]).toEqual(['a', [2, 2]]);
    expect(topRepeatedList(string)[1]).toEqual(['once', [1, 0]]);
  });

});
