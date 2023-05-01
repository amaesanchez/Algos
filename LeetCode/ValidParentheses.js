/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  //CAVEAT -- "{[]}" is true too so hint is use a STACK
      // pop last element and store left-facing brackets in an array -- if next popped element is also left-facing, keep storing
      // the MOMENT you hit a right facing bracket, pop from store and check if right fit
      // if so continue until array length is 0
      // if not, return false

  // edge cases: odd # length is auto false
  if (s.length % 2 !== 0) {
      return false;
  }

  let left = new Set([')', '}', ']']);

  let leftRight = new Map([
      [')', '('],
      ['}', '{'],
      [']', '[']
  ])

  let stringSplit = s.split('');
  let rightStore = [];

  while (stringSplit.length > 0) {
      let currChar = stringSplit.pop();

      if (rightStore.length === 0 && left.has(currChar)) {
          rightStore.push(currChar);
          continue;
      } else if (rightStore.length === 0 && !left.has(currChar)){
          return false;
      }

      if (left.has(currChar)) {
          rightStore.push(currChar);
          continue;
      }

      if (!left.has(currChar)) {
          let lastChar = rightStore.pop();
          if (leftRight.get(lastChar) !== currChar) {
              return false;
          }
      }
  }

    return rightStore.length > 0 ? false : true
};
