"use strict";

/** return the maximum depth of the tree, counting root as depth = 1
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root, depth = 1) {

  if (root === null) {
      return depth - 1;
  }

  let leftDepth = maxDepth(root.left, depth + 1)
  let rightDepth = maxDepth(root.right, depth + 1)

  return Math.max(leftDepth, rightDepth)
};
