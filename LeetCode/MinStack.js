// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

var MinStack = function() {
  // store values as an object with a val key and min key
  this.stack = [];


};

// [3, 4, 2, 5]
// store obj of values and min (compare curr and prev val) -- ex. 3, 3, 2, 2
// if you pop off the top, the updated min is held in the new last element

/**
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  // grab previous element
  let prev = this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;

  // create curr element and calculate minimum
  let element = {"val": val, "min": val};

  if (prev) {
      element.min = Math.min(prev.min, val);
  }

  this.stack.push(element);

};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.pop();

};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1].val;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 1].min;
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
