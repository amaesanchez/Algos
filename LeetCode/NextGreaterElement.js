/**
 * Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
  Output: [-1,3,-1]
  Explanation: The next greater element for each value of nums1 is as follows:
  - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
  - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
  - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
  let result = [];

  let nums2Map = new Map();

  for (let i = 0; i < nums2.length; i++) {
      nums2Map.set(nums2[i], i);
  }

  for (let j = 0; j < nums1.length; j++) {
      let nextGreatest = findNext(nums1[j], nums2.slice(nums2Map.get(nums1[j]))); // max

      result.push(nextGreatest);

  }

  return result;
}

function findNext(curr, arr) {
  if (arr.length === 1) return -1;

  let max = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > curr) {
      max = arr[i];
      break;
    }
  }

return max;
}
