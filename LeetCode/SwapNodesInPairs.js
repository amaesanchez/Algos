/** Given a linked list, swap every two adjacent nodes and return
 * its head. You must solve the problem without modifying the values
 * in the list's nodes (i.e., only nodes themselves may be changed.)
 *
 * @param {ListNode} head
 * @return {ListNode}
 *
 * NOTE: just have two pointers. max 3 lol
 */
 var swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }

  let prev = null;
  let curr = head;

  while (curr && curr.next) {
    let currNode = curr;
    let nextNode = curr.next;

    currNode.next = currNode.next.next;
    nextNode.next = currNode;

    if (prev) {
      prev.next = nextNode;
    } else {
      prev = currNode;
      head = nextNode;
    }

    prev = currNode;
    curr = currNode.next;
  }

  return head;
};
