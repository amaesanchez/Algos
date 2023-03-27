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
 * Traverse and return array of nodes inorder.
 * ex.
 *  - Input: [1, 2, 3, 4, 5, 6]
 *  - Output: [4, 2, 5, 1, 6, 3]
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  if (root === null) {
      return [];
  }

  let leftTraversed = inorderTraversal(root.left); // null

  leftTraversed.push(root.val)

  let rightTraversed = inorderTraversal(root.right);

  return [...leftTraversed, ...rightTraversed]

};

// simplified

var inorderTraversal = function(root) {
  if (root === null) {
      return [];
  }

  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
}







// Not my soln but efficient use of closures

/**
 * Definition for a binary tree node
 * function TreeNode(val, left, right) {
 *    this.val = (val===undefined ? 0 : val)
 *    this.left = (left===undefined ? null : left)
 *    this.right = (right===undefined ? null : right)
 * }
 * @param {TreeNode} root
 * @return {number[]}
 * */

var inorderTraversal = function(root) {
   // recursive way
   const result = []

   const traverse = (node) => {
       if (!node) return
       traverse(node.left)
       result.push(node.val)
       traverse(node.right)
   }

   traverse(root)
   return result
};
