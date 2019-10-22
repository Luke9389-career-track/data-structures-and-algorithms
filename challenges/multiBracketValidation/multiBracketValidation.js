/* eslint-disable no-useless-escape */
const { Stack } = require('../stacksAndQueues/stacks-and-queues');

function multiBracketValidation(string) {
  const regex = /[\{\}\[\]\(\)]/g;
  const array = string.match(regex);
  const dictionary = {
    '{': { type: 'curly', dir: 'left' },
    '}': { type: 'curly', dir: 'right' },
    '[': { type: 'box', dir: 'left' },
    ']': { type: 'box', dir: 'right' },
    '(': { type: 'par', dir: 'left' },
    ')': { type: 'par', dir: 'right' },
  };
  const bracketStack = new Stack;
  for(let i = 0; i < array.length; i++) {
    const element = dictionary[array[i]];
    if(element.dir === 'left') {
      bracketStack.push(element.type);
    }
    else {
      if(bracketStack.peek() === element.type) {
        bracketStack.pop();
      } else { return false; }
    }
  }

  return bracketStack.top === null ? true : false;
}

module.exports = {
  multiBracketValidation
};