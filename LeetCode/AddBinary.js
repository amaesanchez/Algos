"use strict";

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
//TODO: clean it up
 var addBinary = function(a, b) {
  let aSplit = a.split('');
  let bSplit = b.split('');

  let aNums = aSplit.map(val => Number(val));
  let bNums = bSplit.map(val => Number(val));

  let maxLength = Math.max(aNums.length, bNums.length);
  let sum = []
  let toAdd = 0;

  while (maxLength > 0) {
    let currA = aNums.pop();
    let currB = bNums.pop();

    if (!currA) {
      currA = 0;
    }
    if (!currB) {
      currB = 0;
    }

    let currSum = currA + currB + toAdd;
    toAdd = 0;

    if (currSum < 2) {
      sum.unshift(currSum);
    } else if (currSum >= 2) {
      while (currSum >= 2) {
        currSum -= 2;
        toAdd += 1;
      }
      sum.unshift(currSum);
    }

    maxLength -= 1;
  }

  if (toAdd > 0) sum.unshift(toAdd);

  return sum.join('');
};
