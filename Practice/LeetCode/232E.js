// 232.请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

// 实现 MyQueue 类：

// void push(int x) 将元素 x 推到队列的末尾
// int pop() 从队列的开头移除并返回元素
// int peek() 返回队列开头的元素
// boolean empty() 如果队列为空，返回 true ；否则，返回 false
// 说明：

// 你 只能 使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
// 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 

// 示例 1：

// 输入：
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// 输出：
// [null, null, null, 1, 1, false]

// 解释：
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false


var MyQueue = function () {
  this.stack1 = []
  this.stack2 = []
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function (x) {
  this.stack1.push(x)
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function () {
  // 将栈1中的数据导到栈2中在出栈
  if (!this.stack2.length) {
      while (this.stack1.length) {
          const top = this.stack1.pop();
          this.stack2.push(top);
      }
  }
  return this.stack2.pop();
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function () {
  let top = this.pop()
  this.stack2.push(top)
  return top;
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function () {
  return !this.stack1.length && !this.stack2.length
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/