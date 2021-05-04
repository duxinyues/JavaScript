/*
 * @FileName: 有序链表
 * @Author: duxinyue
 * @Date: 2021-05-04 12:26:55
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-04 19:29:19
 * @FilePath: \JavaScript\dataStructure\SortedLinkedList.js
 * @Description: 有序链表的数据结构
 */
import LinkedList from "./linkedList.js"
import {
    defaultEquals
} from "../utils/util.js"
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
}

function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn
    }
    // 有序插入元素
    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos)
    }
    // 将元素插入正确位置
    getIndexNextSortedElement(element) {
        let current = this.head;
        let index = 0
        for (; index < this.size() && current; index++) {
            const comp = this.compareFn(element, current.element);
            if (comp === Compare.LESS_THAN) {
                return index;
            }
            current = current.next;
        }
        return index
    }
}
const sortList = new SortedLinkedList();
console.log("=====有序链表======");
sortList.insert("读心")
sortList.insert("青竹悦");
sortList.insert("青竹悦123");
sortList.insert("青竹悦456");
sortList.insert("青竹悦789");
console.log(sortList.count);
console.log(sortList.head);