"use strict";

/** Given the head of a singly linked list, reverse the list, and return the
 * reversed list.
 */
function reverseList(head) {
  if (!head?.next) {
    return head;
  }

  let prev = head;
  let curr = head.next;
  prev.next = null;

  let save;

  while (curr.next) {
    save = curr.next;
    curr.next = prev;

    prev = curr;
    curr = save;
  }

  curr.next = prev;

  return curr;
};
