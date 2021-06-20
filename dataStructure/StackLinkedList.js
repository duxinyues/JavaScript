/*
 * @FileName: 
 * @Author: 1638877065@qq.com
 * @Date: 2021-05-04 19:44:24
 * @LastEditors: 1638877065@qq.com
 * @LastEditTime: 2021-06-20 22:06:52
 * @FilePath: \JavaScript\dataStructure\StackLinkedList.js
 * @Description: 
 */
import {
    DoublyLinkedList
} from "./DoublyLinkedList.js"

class StackLinkedList {
    constructor() {
        this.items = new DoublyLinkedList();
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items.removeAt(this.size() - 1);
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items.getElementAt(this.size() - 1).element;
    }
    isEmpty() {
        return this.items.isEmpty();
    }
    size() {
        return this.items.size();
    }
    clear() {
        this.items.clear();
    }

    toString() {
        return this.items.toString();
    }
}

const stackList = new StackLinkedList();
console.log("--------类-------");
stackList.items.push(12)
stackList.items.push(13)
stackList.items.push(14)
console.log(stackList.items)
