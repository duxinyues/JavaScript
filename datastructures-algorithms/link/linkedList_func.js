/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-08-23 21:53:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-26 22:17:57
 * @Description: 链表骨架，函数方式
 */
function LinkedList() {
    // 节点
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }
    let length = 0;
    let head = null;

    this.append = function (element) {
        let node = new Node(element);
        let current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        // 递增链表长度
        length++;
    }
    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element), current = head, previous, index = 0;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }
    this.removeAt = function (index) {
        if (index > -1 && index < length) {
            let current = head, position = 0, previous;
            if (index === 0) {
                head = current.next;
            } else {
                while (position++ < index) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    }
    this.remove = function (element) { 
        let index = this.indexOf(element);
        return this.removeAt(index);
    }
    this.indexOf = function (element) {
        let current = head,
            index = 0;

        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1;
    }
    this.isEmpty = function () { 
        return length ===0;
    }
    this.size = function () { 
        return length;
    }
    this.getHead = function () { return head; }
    this.toString = function () {
        let current = head, string = '';
        while (current) {
            string += current.element + (current.next ? '\n' : "");
            current = current.next;
        }
        return string;
    }
}


let list = new LinkedList();

list.append(90);
list.append(90);
list.append(908987)
console.log(list.size())
console.log(list.toString())
console.log(list.getHead())

list.removeAt(0)

console.log(list.getHead())