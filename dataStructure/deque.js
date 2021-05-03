/*
 * @fileName: 双端队列
 * @Author: duxinyue
 * @Date: 2021-04-26 23:22:52
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-03 23:18:19
 * @FilePath: \JavaScript\dataStructure\deque.js
 */
/**
 * 双端队列
 * 允许在前端和后端删除和添加元素的队列
 * 
 * 例如用户在撤销操作的时候，该操作就是从双端队列中末尾删除。而用在进行一个预先定义的某个操作时，那么最先操作是从队列的开头删除。
 */

class Deque {
    constructor() {
        this.count = 0; // 队列的大小
        this.lowestCount = 0; // 追踪队列的第一个元素
        this.items = {}; // 存储队列的元素
    }
    // 在队列开头添加元素
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element)
        } else if (this.lowestCount > 0) {
            this.items[--this.lowestCount] = element
        } else {
            for (let index = this.count; index > 0; --index) {
                this.items[index] = this.items[index - 1]
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element
        }
    }
    // 在队列末尾添加元素
    addBack(element) {
        this.items[this.count++] = element
    }
    // 从队列开头删除元素
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        const first_item = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return first_item
    }
    // 从队列末尾删除元素
    removeBack() {
        if (this.isEmpty()) {
            return undefined
        }
        const last_item = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;
        return last_item;

    }
    // 返回队列的第一个元素
    peekFront() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }
    // 返回队列的最后一个元素
    peekBack() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }
    // 队列是否为空
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }

    //队列大小
    size() {
        console.log(this.count)
        console.log(this.lowestCount)
        return this.count - this.lowestCount
    }

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

const deque = new Deque();

deque.addFront("duxin")
deque.addFront("duxin2")
deque.addFront("duxin3")
deque.size()
// console.log(deque.size())
// console.log(deque.isEmpty())

// console.log(deque.peekFront())
// console.log(deque.peekBack())
console.log(deque.count)
console.log(deque.items)