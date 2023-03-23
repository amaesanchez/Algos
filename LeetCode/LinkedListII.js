/**
 * Hare-Tortoise Algo (fast and slow pointers)
 * Given the head of a linked list, return the node where the cycle begins.
 * If there is no cycle, return null.
 */

 var detectCycle = function(head) {
  let currNode = head;
  let visited = new Set();

  while (currNode){
      if(visited.has(currNode)){
          return currNode;
      } else {
          visited.add(currNode);
          currNode = currNode.next

      }
  }

return null
};
