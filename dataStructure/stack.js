class Stack {
    constructor() {
        this.count = 0;
        this.items = {}
    }
    //出入元素
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    // 栈大小
    size() {
        return this.count
    }

    // 判断栈是否是空
    isEmpty() {
        return this.count === 0
    }

    // 移除元素
    pop() {
        // 如果栈为空，则不能移除元素
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;

        const result = this.items[this.count];
        delete this.items[this.count];

        return result;
    }

    // 查看栈顶
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count - 1]
    }

    // 清栈
    clear() {
        this.items = {};
        this.count = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return ""
        }
        let objString = `${this.items[0]}`;
        for (let index = 1; index < this.count; index++) {
            objString = `${objString},${this.items[index]}`
        }

        return objString;
    }

}

const stack = new Stack();
stack.push(89)
stack.push(89)
stack.push(89)
stack.push(89)
stack.push(89)
stack.push(89)
stack.push(89)

console.log(stack.size())
console.log(stack.isEmpty())
stack.pop()
console.log(stack.size())
console.log(stack)

console.log("=======================");


function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';

    while (number > 0) {
        rem = Math.floor(number % 2)
        remStack.push(rem);
        number = Math.floor(number / 2)
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }

    return binaryString;
}

console.log(decimalToBinary(30))