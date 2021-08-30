/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-08-23 21:40:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-30 23:15:14
 * @Description: 文件描述
 */
// import LinkedList from "./link/linkedList";

// const list = new LinkedList();

// list.push(90);

var number = 10;
function Person() {
    number = 20;
    this.number = 1000;
}

Person.prototype.get = function () {
    return this.number + 90;
}

var s = new Person();
console.log(s.get());
var age = 1093;
var obj = {
    age: 10
}

const test = function () {
    console.log(this.age);
}

test()