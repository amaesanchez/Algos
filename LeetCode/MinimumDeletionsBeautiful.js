/**
 * You are given a 0-indexed integer array nums. The array nums is beautiful if:

  nums.length is even.
  nums[i] != nums[i + 1] for all i % 2 == 0.

  Note that an empty array is considered beautiful.
 * @param {number[]} nums
 * @return {number}
 */
 var minDeletion = function(nums) {

  let deletions = 0;

  for (let i = 0; i < nums.length; i++) {
      if (i % 2 === 0 && nums[i] === nums[i + 1]) {
          // removes the first element
          nums.shift();
          deletions++;
          // decrement i after shift to recheck the same element
          i--;
      }
  }

  if (nums.length % 2 === 0) {
      return deletions;
  } else {
      // represents deletion of the last element
      return deletions + 1;
  }
};
