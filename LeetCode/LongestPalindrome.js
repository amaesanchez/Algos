/**Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  if (s.length === 1) {
      return 1;
  }

  let evens = 0;
  let odd = 0;

  let charCount = countFrequency(s);

  for (let char in charCount) {
      if (charCount[char] % 2 === 0) {
          evens += charCount[char];
      } else if (charCount[char] % 2 !== 0 && charCount[char] > odd) {
          odd = charCount[char];
      }
  }

  return evens + odd;
};

function countFrequency(string) {
  let freqCounter = {};

  for (let char of string) {
      if (!freqCounter[char]) {
          freqCounter[char] = 1;
      } else {
          freqCounter[char] += 1;
      }
  }

  return freqCounter;
}
