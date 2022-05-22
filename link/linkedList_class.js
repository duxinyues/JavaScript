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



const link = new LinkedList();
link.push(12);
link.push(132);
console.log("原始链表", link)
console.log(link.removeAt(0))
console.log("删除后的链表", link)
link.insert(32, 0)
console.log("insert后链表", link)
console.log("indexOf元素", link.indexOf(132))
console.log("remove元素", link.remove(132))

console.log("remove后的链表", link)
link.push(90)
console.log("链表的head", link.getHead())

console.log("链表元素", link.toString())