/*
 * @FileName: 双向链表
 * @Author: duxinyue
 * @Date: 2021-05-04 10:01:26
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-04 11:02:53
 * @FilePath: \JavaScript\dataStructure\DoublyLinkedList.js
 * @Description: 双向链表的数据结构
 */
import {
    defaultEquals
} from "../utils/util.js"
import {
    Node
} from "../models/linked-list-models.js"
import LinkedList from "./linkedList.js"

class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    }
}

export class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined; // 保存最后一个元素的引用
    }
    // 插入元素
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head === null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }
            } else if (index === this.count) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.next = node; // 新增
                node.prev = previous; // 新增
            }

            this.count++;
            return true;
        }
        return false;
    }
    // 移除元素
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                // 删除第一项
                this.head = current.next;
                if (this.count === 1) {
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined;
                }
            } else if (index === this.count - 1) {
                // 在最后一项删除
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                // 将previous和current的下一个项连接
                previous.next = current.next;
                current.next.prev = previous; 
            }
            this.count--;
            return current.element
        }
        return undefined;
    }
}


const doublyList = new DoublyLinkedList();
console.log("======双链表=======")
doublyList.push(12);
doublyList.push(12);
doublyList.push(12);
doublyList.push(12);
doublyList.insert("duxin",1)
console.log(doublyList.head)
console.log(doublyList.count)