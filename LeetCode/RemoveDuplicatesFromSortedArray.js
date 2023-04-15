/** Remove duplicates in place, and return teh NUMBER of unique elements
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let nonDupeStore = new Set();

  for (let i = 0; i < nums.length; i++) {
      if (nonDupeStore.has(nums[i])) {
          nums.splice(i, 1);
          i -= 1
      } else {
          nonDupeStore.add(nums[i]);
      }
  }

  return nums.length
};
