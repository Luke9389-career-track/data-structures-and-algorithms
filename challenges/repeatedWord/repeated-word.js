/* eslint-disable no-useless-escape */
function firstRepeatedWord(str) {
  const wordArray = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(' ');
  const tempArray = [];
  let word = '';
  let i = 0;
  while(word === '') {
    if(tempArray.includes(wordArray[i].toLowerCase())) { word = wordArray[i]; }
    tempArray.push(wordArray[i].toLowerCase());
    i++;
    if(i >= wordArray.length) word = 'no duplicates found';
  }
  return word;
}

function topRepeatedList(str) {
  const wordArray = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(' ');

  const wordDictionary = wordArray.reduce((acc, val, idx) => {
    if(acc[val.toLowerCase()]) { acc[val.toLowerCase()][0]++; }
    else { acc[val.toLowerCase()] = [1, idx]; }
    return acc;
  }, {});

  const topFrequent = Object.entries(wordDictionary).sort((a, b) => { return b[1][0] - a[1][0]; });
  console.log(`topFrequent --- [['string', ['frequency', 'index first found']]]`);
  return topFrequent;
}

topRepeatedList('Once upon a time, there was a brave princess who...');

module.exports = {
  firstRepeatedWord,
  topRepeatedList
};
