/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-08-19 22:02:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-19 23:19:21
 * @Description: 类声明队列【先进先出】
 */
class Queue {
    constructor() {
        this.count = 0;// 队列大小
        this.lowestCount = 0;//追踪第一个元素
        this.items = {};// 对象存储元素
    }
    // 入队
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    isEmpty() {
        return this.count - this.lowestCount === 0
    }
    // 出队【第一个先出】
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    size() {
        return this.count - this.lowestCount;
    }
    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    toString() {
        if (this.isEmpty()) {
            return ""
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let index = this.lowestCount + 1; index < this.count; index++) {
            objString = `${objString},${this.items[index]}`
        }
        return objString;
    }
}

const queue = new Queue();

console.log(queue.isEmpty())

queue.enqueue("908");
console.log(queue.toString());
queue.enqueue("12924");
queue.enqueue("r5fg834");
queue.dequeue();
console.log(queue.size());
console.log(queue.toString());
