/*
 * @fileName: 双端队列
 * @Author: duxinyue
 * @Date: 2021-04-26 23:22:52
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-04-29 13:32:25
 * @FilePath: \JavaScript\数据结构和算法\deque.js
 */
/**
 * 双端队列
 * 允许在前端和后端删除和添加元素的队列
 * 
 * 例如用户在撤销操作的时候，该操作就是从双端队列中末尾删除。而用在进行一个预先定义的某个操作时，那么最先操作是从队列的开头删除。
 */

class Deque {
    constructor() {
        this.count = 0;// 队列的大小
        this.lowestCount = 0; // 追踪队列的第一个元素
        this.items = {}; // 存储队列的元素
    }
    // 在队列开头添加元素
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element)
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element
        } else {
            for (let index = this.count; index > 0; index--) {
                this.items[index] = this.items[i - 1]
            }
        }
        this.count++;
        this.lowestCount = 0;
        this.items[0] = element
    }
    // 在队列末尾添加元素
    addBack(element) {
        if (this.isEmpty()) {
            this.addFront(element)
        } else if (this.lowestCount > 0) {
            this.lowestCount++;
            this.items[this.lowestCount] = element
        } else {
            for (let index = this.count; index > 0; index--) {
                this.items[index] = this.items[i - 1]
            }
        }
        this.count++;
        this.lowestCount = 0;
        this.items[0] = element
    }
    // 从队列开头删除元素
    removeFront() { }
    // 从队列末尾删除元素
    removeBack() { }
    // 返回队列的第一个元素
    peekFront() { }
    // 返回队列的最后一个元素
    peekBack() { }
    // 队列是否为空
    isEmpty() {
        return this.count === 0;
    }

    //队列大小
    // size() {
    //     return this.count - this.lowestCount
    // }

    // 清空队列
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
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

const  deque = new Deque();

deque.addFront("duxin")
console.log(deque.isEmpty())