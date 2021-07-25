/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-07-25 22:36:09
 * @LastEditTime: 2021-07-25 23:07:19
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: 字符串逆向输出
 * @FilePath: \JavaScript\data-type\string.js
 * 
 */

function reverseString1(str) {
    return str.split("").reverse().join("");
}


console.log(reverseString1("890"));


function reverseString2(str) {
    let result = "";
    for (let index = str.length - 1; index >= 0; index--) {
        result += str.charAt(index)
    }

    return result
}

console.log(reverseString2("789"))


function reverseString3(strIn, pos, strOut) {
    if (pos < 0) return strOut;

    strOut += strIn.charAt(pos--);

    return reverseString3(strIn, pos, strOut)
}
const str = "duxin";
const result = ""
console.log(reverseString3(str, str.length, result))

/**
 * 通过call函数来改变slice()函数的执行主体，
 * 也就是让字符串具有数组的特性
 * @param {*} str 
 * @returns 
 */
function reverseString4(str) {
    let arr = Array.prototype.slice.call(str);
    return arr.reverse().join("")
}

console.log("str4", reverseString4(str))

/**
 * 通过栈的思维来实现字符串逆向输出
 */

function Stack() {
    this.data = []; // 栈元素
    this.top = 0; // 栈顶
}
// 在原型链上添加出栈和入栈的方法
Stack.prototype = {
    push: function push(element) {
        this.data[this.top++] = element
    },
    pop: function pop() {
        return this.data[--this.top]
    },

    length: function () {
        return this.top
    }
}

function reverseString5(str) {
    let s = new Stack();
    const arr = str.split("");
    const len = arr.length;
    let result = "";
    for (let index = 0; index < len; index++) {
        s.push(arr[index])
    }

    for (let index = 0; index < len; index++) {
        result += s.pop(index)
    }

    return result
}

console.log("str5=",reverseString5(str))