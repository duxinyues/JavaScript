/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-07-25 23:23:22
 * @LastEditTime: 2021-07-27 23:26:29
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: 
 * @FilePath: \JavaScript\data-type\string2.js
 * 
 */
// function Person(name) {
//     this.name = name;
// }

// const test = new Person("duxin");

// console.log(test.name)
// console.log(window.name)


// const value = 100;
// const obj = {
//     value: 1,
//     method: function () {
//         const foo = function () {
//             console.log(this.value)
//             console.log(this)
//         }
//         foo();
//         return this.value;
//     }
// }
// obj.method();


function add(x, y) {
    return x + y;
}

function test(x, y) {
    return add.call(this, x, y)
}

console.log(test(10, 20))