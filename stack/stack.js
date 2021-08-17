/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-08-17 22:58:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-18 00:11:58
 * @Description: 对象存储栈元素
 */
class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }
    push(element) {
        this.items[this.count++] = element;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0
    }
}

let stack = new Stack();
// stack.push(90)
// stack.push(878)
// console.log(stack.size())
// console.log(stack.isEmpty())
