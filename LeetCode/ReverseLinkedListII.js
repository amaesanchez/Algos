"use strict";


/**
 * Given the head of a singly linked list and two integers left and right where
 * left <= right, reverse the nodes of the list from position left to position
 * right, and return the reversed list.
 *
 * Ex.
 *  - Input: head = [1,2,3,4,5], left = 2, right = 4
 *  - Output: [1,4,3,2,5]
 *
 * @param {linkedlist} head
 * @param {num} left
 * @param {num} right
 * @returns
 */
function reverseLinkedListII(head, left, right) {
  if (!head?.next || left === right) {
      return head;
  }

  let prev = null;
  let curr = head;
  let depth = 1;
  let leftEnd; // check if no leftEnd, then just attach to rightEnd and vice versa

  while (depth < left) {
      save = curr.next;
      prev = curr;
      curr = save;

      leftEnd = prev;

      depth += 1;
  }

  let tail = curr;

  prev = curr;
  curr = prev.next;
  depth = 1 ;
  let rightEnd;

  while (depth <= right - left) {
      save = curr.next || null;
      curr.next = prev;

      prev = curr;
      curr = save;

      rightEnd = curr;

      depth += 1;
  }


  if (!leftEnd) {
      tail.next = rightEnd;
      return prev;
  }

  leftEnd.next = prev;
  tail.next = rightEnd;

  return head;
};
