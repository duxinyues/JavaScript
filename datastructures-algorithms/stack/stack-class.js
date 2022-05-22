/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-08-17 22:28:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-17 22:52:58
 * @Description: 类表示栈
 */

class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}

// 验证栈

let stack = new Stack()

console.log(stack.isEmpty())
stack.push(43);
stack.push(90);

console.log(stack.size())