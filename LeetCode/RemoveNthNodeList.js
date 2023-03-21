function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function getLength(node) {
 if (!node) return 0;

 return 1 + getLength(node.next)
}

/**
 * Given linked list, remove the nth node starting from the END of the list,
 * and return the head
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
 if (!head) {
     return null;
 }

 let updateList;

 if (getLength(head) !== n) {
     updateList = head;
     updateList.next = removeNthFromEnd(head.next, n);

 } else {
     updateList = removeNthFromEnd(head.next, n);
 }

 return updateList;
};
