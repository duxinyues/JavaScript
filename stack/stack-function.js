/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-08-17 22:29:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-17 22:39:33
 * @Description: 函数声明栈
 */
function Stack() {
    let items = [];
    // 向栈添加元素
    this.push = function (element) {
        items.push(element)
    }

    // 从栈移出元素
    this.pop = function () {
        return items.pop();
    }
    // 查看栈顶元素
    this.peek = function () {
        return items[items.length - 1];
    }
    // 查看栈是否为空
    this.isEmpty = function () {
        return items.length == 0;
    }
    // 栈长度
    this.size = function () {
        return items.length;
    }

    // 清空栈
    this.clear = function () {
        items = [];
    }
}


let  stack = new Stack();

stack.push(90);
stack.push(100);

console.log(stack.size())
console.log(stack.peek())
console.log(stack.isEmpty())