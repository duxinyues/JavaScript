/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-08-22 13:57:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-22 14:30:10
 * @Description: 用栈实现队列
 */
var MyQueue = function () {
    this.items = [];
    this.outStack =[]
}

MyQueue.prototype.push = function (element) {
    this.items.push(element);
}
MyQueue.prototype.pop = function () {
    this.outStack = this.items[0];
    this.items.shift();
    return this.outStack
};
MyQueue.prototype.peek = function () {
    return this.items[0]
};
MyQueue.prototype.empty = function () {
    return this.items.length == 0;
};
let obj = new MyQueue();
obj.push("090");
console.log(obj.items)