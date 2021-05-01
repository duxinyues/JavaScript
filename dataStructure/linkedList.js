/*
 * @FileName: 链表
 * @Author: duxinyue
 * @Date: 2021-04-29 14:30:00
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-04-29 15:25:17
 * @FilePath: \JavaScript\dataStructure\linkedList.js
 * @Description: 链表的结构
 */
import {
    defaultEquals
} from "../utils/util.js";
import {
    Node
} from "../models/linked-list-models.js"

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn
    }

    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == undefined) {
            this.head = node;
        }else{
            current = this.head;
            while(current.next != null){
                // 最后一项
                current = current.next
            }
           // 将next赋为新元素，建立链接
            current.next = node;
        }
        console.log(this.head)
        this.count++;
    }

}


const list = new LinkedList();
console.log(list.push(12))