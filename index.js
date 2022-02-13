/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-08-23 21:40:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-15 17:11:22
 * @Description: 文件描述
 */
function add(a, b) {
    return a + b;
}
global.value = 908;
function testbind(x, y) {
    const aa = add.bind(this, x, y);
    return aa();
}
function testCall(x, y) {
    global.value = 1204
    return add.call(this, x, y);
}
function add1(x, y) {
    return add.apply(this, [x, y])
}

var obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const arr = Array.from(obj, function (value, index) {
    return value + "==" + 90;   //必须指定返回值，否则返回 undefined
});


const arr22 = [1, 2, 3, 5, 6];
const ss = arr22.keys()
for (const iterator of ss) {
}

(function (name, age) {
    console.log(arguments)
    console.log(arguments.length);
    console.log(typeof arguments);
    console.log(arguments instanceof Array);
    console.log(Object.prototype.toString.call(arguments));

    for (const iterator of arguments) {
        console.log(iterator)
    }
})("duxin", 18)

var average = function (salary) {
    let arr = salary.filter(function (item) {
        return item !== Math.max(...salary) && item !== Math.min(...salary)
    })
    let sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    console.log('sss', sum / arr.length)
};

average([1, 2, 4, 5, 7, 8])