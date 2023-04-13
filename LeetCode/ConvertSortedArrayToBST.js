"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Given an integer array nums where the elements are sorted in ascending order,
 * convert it to a height-balanced binary search tree.
 *
 * Clarifications
 *  - height-balanced -- left and right nodes from the root are equalish
 *    lengths/depths
 *
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
  if (nums.length === 1) {
      return new TreeNode(nums[0]);
  }

  if (nums.length === 0) {
      return null;
  }

  const rootIdx = Math.ceil((nums.length - 1)/ 2);
  const root = new TreeNode(nums[rootIdx])

  const left = nums.slice(0, rootIdx);
  root.left = sortedArrayToBST(left);

  const right = nums.slice(rootIdx + 1);
  root.right = sortedArrayToBST(right);

  // assumption: midpoint of arr is the root
  // split up array based on root
  // recursively call function on each subarray


  return root;
};
