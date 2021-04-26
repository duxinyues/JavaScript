class Queue {
    constructor() {
        this.count = 0; // 队列大小
        this.lowestCount = 0; // 追踪第一个元素的下标
        this.items = {}; // 用对象来存储队列元素
    }

    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    } // 插入元素


    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.items[this.lowestCount];

        delete this.items[this.lowestCount];

        this.lowestCount++
        return result;
    } // 移除第一个元素


    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.lowestCount];
    } // 返回第一个元素，最先添加的元素


    isEmpty() {
        return this.size() === 0;
    } // 队列是否为空


    size() {
        return this.count - this.lowestCount
    } //队列大小


    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    } // 清空队列

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
console.log(queue.isEmpty());
queue.enqueue("duxinyue");
queue.enqueue("qingzhuyue")
console.log(queue.toString());
console.log(queue.size())
queue.dequeue()
console.log(queue.size())