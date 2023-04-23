/**Given an array nums with n objects colored red, white, or blue, sort them
 * in-place so that objects of the same color are adjacent, with the colors in
 * the order red, white, and blue.
 * We will use the integers 0, 1, and 2 to represent the color red, white,
 * and blue, respectively.
 * You must solve this problem without using the library's sort function.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  if (nums.length <= 1) {
      return nums;
  }
  // pointer problem
  // theres only 3 options, so if the num is 0, place to the leftend,
  // and if its 2, place to the rightend
  // if its 1, leave as is
  // increment low pointer or high pointer depending on what was shifted


  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
      if (nums[low] === 0) {
          let [curr] = nums.splice(low, 1);
          nums.unshift(curr);
          low += 1;
      }

      if (nums[low] === 2) {
          let [curr] = nums.splice(low, 1);
          nums.push(curr);
          high -= 1;
      }

      if (nums[low] === 1) {
          low += 1;
      }
  }

  return nums;
};
