/**
 * Node类，表示需要添加到链表中的元素，
 * element：保存要加入链表元素的值
 * next：指向链表中下一个元素的指针
 */
class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}
const defaultEquals = (a, b) => {
    return a === b;
}
class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0; // 保存链表元素的数量
        this.head = undefined; // 保存元素的引用
        this.equalsFn = equalsFn;  // 比较链表中元素是否相等
    }

    // 链表尾部添加元素
    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node
        }

        this.count++;
    }

    // 向链表指定位置插入元素
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node
            }

            this.count++;
            return true;
        }

        return false
    }

    // 返回链表指定位置的元素
    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next
            }

            return node
        }

        return undefined
    }

    // 返回元素在链表中的索引
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i
            }
            current = current.next;
        }

        return -1
    }

    // 从链表的指定索引删除一个元素
    removeAt(index) {
        //   边界检查
        if (index >= 0 && index < this.count) {
            let current = this.head;
            // 删除第一个元素
            if (index === 0) {
                this.head = current.next;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element
        }
        return undefined;
    }

    // 判断链表是否为空
    isEmpty() {
        return this.count === 0;
    }

    // 链表长度
    size() {
        return this.count;
    }

    getHead() {
        return this.head
    }

    // 返回链表的字符串
    toString() {
        if (this.head == null) return '';
        let objString = `${this.head.element}`;

        let current = this.head.next;

        for (let index = 0; index < this.size() && current != null; index++) {
            objString = `${objString},${current.element}`

            current = current.next;
        }

        return objString;
    }

    // 删除元素
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index)
    }
}

// 双向链表的节点，继承Node节点的element和next属性
class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    }
}

class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;// 双向链表的尾部
    }
    // 添加元素
    push(element) {
        const node = new DoublyNode(element);
        /**
         * 如果head为null，那么链表为空，添加的元素为第一项也是尾项
         */
        if (this.head == null) {
            this.head = node;
            this.tail = node
        } else {
            // 从链表尾部添加元素
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.count++;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;


            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    this.head.prev = node;
                    this.head = node;
                }
            } else if (index === this.count) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node
            } else {
                const previous = this.getElementAt(index - 1);
                console.log("===", this.getElementAt(index - 1))
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }

            this.count++;
            return true
        }

        return false
    }


    // 删除元素
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = this.head.next;
                // 如果只有一项，更新tail
                if (this.count === 1) {
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined;
                }
            } else if (index === this.count - 1) {
                // 如果删除的是最后一项
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                previous.next = current.prev;
                current.next.prev = previous;
            }

            this.count--;
            return current.element
        }

        return undefined;
    }

    indexOf(element) {
        let current = this.head;
        let index = 0;
        while (current != null) {
            if (this.equalsFn(element, current.element)) {
                return index
            }
            index++;
            current = current.next;
        }

        return -1;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    clear() {
        super.clear();
        this.tail = undefined;
    }

    toString() {
        if (this.head == null) return "";

        let objString = `${this.head.element}`;
        let current = this.head.next;

        while (current != null) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }

        return objString;
    }

    inverseToString() {
        if (this.tail == null) return '';

        let objString = `${this.tail.element}`;
        let previous = this.tail.prev;
        while (previous != null) {
            objString = `${objString},${previous.element}`;
            previous = previous.prev;
        }

        return objString;
    }
}


const link = new DoublyLinkedList();
link.push(122)
link.push(124)
link.insert(1, 1)
link.push(102)
console.log(link);
console.log("removeAt", link.removeAt(1))
console.log("removeAt link", link);

console.log(link.inverseToString())