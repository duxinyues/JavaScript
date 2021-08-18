/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-08-17 22:58:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-19 00:05:14
 * @Description: 对象存储栈元素
 */
class Stack {
    constructor() {
        this.items = {};
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
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1]
    }
    clear() {
        this.items = {};
        this.count = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }
        let objString = `${this.items[0]}`;
        for (let index = 1; index < this.count; index++) {
            objString =`${objString},${this.items[index]}`
        }
        return objString
    }
}

let stack = new Stack();
stack.push(90)
stack.push(878)
stack.push(908)
console.log(stack.size())
console.log(stack.isEmpty())
console.log(stack.pop())
console.log(stack.size())
console.log(stack.items)
console.log(stack.toString())