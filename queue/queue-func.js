/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-08-22 13:59:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-22 14:42:33
 * @Description: JavaScript函数实现队列
 */
function Queue() {
    let items = [];

    this.enqueue = function (element) {
        items.push(element);
    }
    this.dequeue = function () {
        items.shift();
    }

    this.isEmpty = function () {
        return items.length === 0;
    }

    this.front = function () {
        return items[0];
    }
}