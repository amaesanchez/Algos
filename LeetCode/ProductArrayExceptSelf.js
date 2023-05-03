/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
  // create result arr filled with 1s to start
  // iterate over nums, and calculate the product of the numbers BEFORE currnum, multiply with approp index in result
  // iterate over nums reverse, and calculate the product of the numbers AFTER currnum, multiply with approp index in result

  let result = Array.from({length: nums.length}, v => 1);

  let productBefore = 1;
  for (let i = 0; i < nums.length; i++) {
      result[i] *= productBefore;
      productBefore *= nums[i];
  }

  let productAfter = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
      result[i] *= productAfter;
      productAfter *= nums[i];
  }

  return result;
};
