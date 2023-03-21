"use strict";



function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
* @param {ListNode} list1
* @param {ListNode} list2
* @return {ListNode}
*/
function mergeTwoLists(list1, list2) {
  if (!list1) {
      return list2;
  }

  if (!list2) {
      return list1;
  }

  let val1 = list1.val;
  let val2 = list2.val;
  let mergedList;

  if (val1 > val2) {
      mergedList = new ListNode(val2);
      mergedList.next = mergeTwoLists(list1, list2.next);
  } else {
      mergedList = new ListNode(val1);
      mergedList.next = mergeTwoLists(list1.next, list2);
  }

  return mergedList;
};
