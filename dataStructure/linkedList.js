/*
 * @FileName: 链表
 * @Author: duxinyue
 * @Date: 2021-04-29 14:30:00
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-04 00:53:27
 * @FilePath: \JavaScript\dataStructure\linkedList.js
 * @Description: 链表的结构
 */
import {
    defaultEquals
} from "../utils/util.js";
import {
    Node
} from "../models/linked-list-models.js"

export  class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0; //存储链表元素的数量
        this.head = undefined; // 第一个元素的引用
        this.equalsFn = equalsFn
    }
    /**
     *  向链表尾部添加元素
     * @param {*} element 
     * 如果链表是空，则添加的是第一个元素，否则添加的是最后一个元素
     */
    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == undefined) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                // 最后一项
                current = current.next
            }
            // 将next赋为新元素，建立链接
            current.next = node;
        }
        this.count++; //递增链表的长度
    }
    /**
     * 删除链表中的元素【根据位置删除元素】
     * @param {*} index 
     */
    removeAt(index) {
        // 检查链表的边界数值
        if (index >= 0 && index < this.count) {
            let current = this.head; // 当前元素的引用
            if (index === 0) {
                this.head = current.next;
            } else {
                // 因为查找链表中的某一个元素，只能从头开始查询
                const previous = this.getElementAt(index - 1); // 当前元素的前一个元素的引用
                current = current.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element
        }
        return undefined // 超出链表边界的话返回undefined
    }
    /**
     * 迭代链表，一直到目标位置
     * @param {*} index 
     */
    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let key = 0; key < index && node != null; key++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    /**
     * 链表任意位置插入元素
     * @param {*} element 
     * @param {*} index 
     */
    insert(element, index) {
        // 判断链表的边界
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1); // 当前元素的上一个元素引用
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true
        }
        return false;
    }
    /**
     * 返回一个元素的位置
     * @param {*} element 
     */
    indexOf(element) {
        let current = this.head;
        for (let index = 0; index < this.count && current != null; index++) {
            if (this.equalsFn(element, current.element)) {
                return index;
            }
            current = current.next
        }
        return -1;
    }
    /**
     * 根据元素删除链表元素
     * @param {*} element 
     */
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.size() === 0
    }

    getHead() {
        return this.head;
    }

    toString() {
        if (this.head == null) {
            return ""
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let index = 1; index < this.size() && current != null; index++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        console.log(objString)
        return objString;
    }
}


const list = new LinkedList();
list.push(12)
list.push(23)
list.push("duxin")
list.insert(1111, 0)
console.log(list.count)
console.log(list.head)
console.log(list.indexOf("0"))
list.removeAt(1);
console.log("删除后的链表==", list.head)

console.log(list.getHead())
console.log(list.toString())