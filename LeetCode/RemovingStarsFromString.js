/**
 * @param {string} s
 * @return {string}
 */
 var removeStars = function(s) {
  // create 1 stack for tracking the letters as iterate over s
  // when a "*" is encountered, pop from stack
  // return stack joined

  let result = []

  let sSplit = s.split("");

  for (let char of sSplit) {
      if (char !== "*") {
          result.push(char);
      } else {
          result.pop();
      }
  }

  return result.join("");
};
