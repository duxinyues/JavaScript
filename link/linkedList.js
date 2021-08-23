/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-08-23 21:22:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-23 21:53:00
 * @Description: 链表的骨架
 */
import { defaultEquals } from "../utils";
import { Node } from "./node";
export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element) {
        const node = new Node(element);
        let current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++; // 递增链表的长度
    }

    removeAt(index) {
        if (index > 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
            } else {
                let previous;
                for (let i = 0; i < index; i++){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next
            }
            this.count--;
            return current.element;
        }

        return undefined;
    }
}

