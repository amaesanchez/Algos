"use strict";

/**
 *  Given the root of a binary tree, imagine yourself standing on the
 * right side of it, return the values of the nodes you can see ordered
 * from top to bottom.
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
 var rightSideView = function(root) {
  if (root === null) {
      return [];
  }

  let rightView = [root.val];
  let currRow = [root];
  let currChildren = [];
  let toAdd;

  while (currRow.length !== 0) {
      let currNode = currRow.shift();

      if (currNode.left) {
          toAdd = currNode.left;
          currChildren.push(currNode.left);
      }

      if (currNode.right) {
          toAdd = currNode.right;
          currChildren.push(currNode.right)
      }

      if (currRow.length === 0 && toAdd) {
          rightView.push(toAdd.val);
          toAdd = null;
          currRow = currChildren;
          currChildren = [];
      }
  }

  return rightView;
};
