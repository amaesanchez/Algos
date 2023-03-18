"use strict";

/** Given an array nums.
 * We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 *
 * Clarifications:
 *  - length of nums can be 1-1000
 *  - value in nums can be negative
 *
 * TestCase:
 *  - [1, 2, 3, 4] => [1, 3, 6, 10]
 *  - [1, -4, 6, 3] => [1, -3, 3, 6]
 */

function runningSum(nums) {
  // new sum array
  // sum variable
  // iterate, add, push

  const sums = [];
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum = currSum + nums[i];
    sums.push(currSum);
  }

  return sums;
}


/** Faster Soln */

 var runningSum = function(nums) {
  return nums.reduce((acc, cur) => {
      acc.push(cur + (acc[acc.length - 1] || 0));
      return acc;
  }, []);
};
