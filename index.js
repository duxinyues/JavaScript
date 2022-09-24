/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-02-09 23:04:30
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-24 21:58:51
 * @FilePath: \JavaScript\index.js
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */

// 判断变量是数组还是对象
function isArrayOrObject(obj) {
    const res = Object.prototype.toString.call(obj)
    if (res === '[object Array]') {
        return "Array"
    }

    if (res === '[object Object]') {
        return "Object";
    }

    return "该变量不是object类型"
}
const arr = [1, 23, 4, 5, 6, 3, 4, "5"];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
}
// forEach()函数兼容性处理
Array.prototype.forEach = Array.prototype.forEach ||
    function (callback, context) {
        for (let index = 0, length = this.length; index < length; index++) {
            if (typeof callback === "function"
                && Object.prototype.hasOwnProperty.call(this, index)) {
                callback.call(context, this[index], index, this);
            }
        }
    };

arr.forEach((element, index) => {
})

arr.map((ele) => {
    ele * 2
});

// map()函数兼容性处理
Array.prototype.map = Array.prototype.map ||
    function (callback, context) {
        var arr = [];
        if (typeof callback === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                if (typeof callback === "function"
                    && Object.prototype.hasOwnProperty.call(this, k)) {
                    arr.push(callback.call(context, this[k], k, this));
                }
            }
        }
        return arr;
    };

// ﬁlter()函数兼容性处理
Array.prototype.filter = Array.prototype.filter ||
    function (fn, context) {
        var arr = [];
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                if (typeof fn === "function"
                    && Object.prototype.hasOwnProperty.call(this, k)) {
                    fn.call(context, this[k], k, this) && arr.push(
                        this[k]);
                }
            }
        }
        return arr;
    };
const newArr = arr.filter((ele) => {
    return ele % 2 === 0
})

const isGoodArr = arr.every(ele => ele === 1);


const sum = arr.reduce(function (previousValue, value, index, arr) {
}, 1)


function unique(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (result.indexOf(array[i]) === -1) {
            result.push(array[i]);
        }
    }
    return result;
}


function unique2(array) {
    var obj = {}, result = [], val, type;
    for (var i = 0; i < array.length; i++) {
        val = array[i];
        type = typeof val;
        if (!obj[val]) {
            obj[val] = [type];
            result.push(val);
        } else if (obj[val].indexOf(type) < 0) {   // 判断数据类型是否存在 
            obj[val].push(type);
            result.push(val);
        }
    }
    return result;
}
function unique3(array) {
    array.sort(function (a, b) { return a - b });
    var result = [array[0]];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== result[result.length - 1]) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(unique3(arr)); //[1, 3, 4, 5,'5', 6, 23]