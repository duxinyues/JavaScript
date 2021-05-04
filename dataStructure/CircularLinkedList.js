/*
 * @FileName: 循环链表
 * @Author: duxinyue
 * @Date: 2021-05-04 11:09:34
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-04 12:01:16
 * @FilePath: \JavaScript\dataStructure\CircularLinkedList.js
 * @Description: 循环链表的数据结构
 */
import {
    defaultEquals
} from "../utils/util.js"
import {
    Node
} from "../models/linked-list-models.js"
import LinkedList from "./linkedList.js"

class CircularLinkedList extends LinkedList {
    constructor(equals = defaultEquals) {
        super(equals);
    }
    // 插入元素
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = current;
                    current = this.getElementAt(this.size());
                    this.head = node;
                    current.next = this.head;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    // 从任意位置删除元素
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                if (this.size() === 1) {
                    this.head = undefined;
                } else {
                    const removed = this.head;
                    current = this.getElementAt(this.size());
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            } else {
                //不需要修改循环链表的最后一项
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined
    }
}


const circularList = new CircularLinkedList();
console.log("====循环链表=====")
circularList.insert(100, 0)
circularList.insert(100, 0)
circularList.insert(23, 0);
console.log(circularList.removeAt(0))
console.log(circularList.size())
console.log(circularList.head)
