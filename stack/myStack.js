/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-08-22 14:30:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-22 14:56:07
 * @Description: 用队列实现栈
 * 
 * 
 */

let MyStack = function () {
    this.queue = []
}


MyStack.prototype.push = function (element) {
    this.queue.unshift(element)
}

MyStack.prototype.pop = function () {
    const topItem = this.queue[0];
    this.queue.shift();
    return topItem;
}

MyStack.prototype.top = function () {
    return this.queue[0]
}
MyStack.prototype.isEmpty = function () {
    return this.queue.length === 0
}


let stack = new MyStack();
stack.push("647")
console.log(stack.top())
stack.pop();
console.log(stack.queue)
console.log(stack.isEmpty())