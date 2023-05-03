var MyQueue = function () {
  this.firstStack = []
  this.secondStack = []
}

MyQueue.prototype.push = function (x) {
  this.firstStack.push(x)
}

MyQueue.prototype.pop = function () {
  this._prepare()
  return this.secondStack.pop()
}

MyQueue.prototype.peek = function () {
  this._prepare()
  return this.secondStack[this.secondStack.length - 1]
}

MyQueue.prototype.empty = function () {
  return this.firstStack.length === 0 && this.secondStack.length === 0
}

// basically stores reverse of firstStack in secondStack bc the queue.pop() method
// is actually equiv to arr.shift() method -- grabs 0 idx
MyQueue.prototype._prepare = function () {
  if (this.secondStack.length === 0)
    while (this.firstStack.length > 0)
      this.secondStack.push(this.firstStack.pop())
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
