/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-02-09 23:04:30
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-27 21:36:46
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

function unique4(array) {
    var result = [];
    for (var i = 0, l = array.length; i < array.length; i++) {
        for (var j = i + 1; j < l; j++) {
            // 依次与后面的值进行比较，如果出现相同的值，则更改索引值
            if (array[i] === array[j]) {
                j = ++i;
            }
        }
        // 每轮比较完毕后，索引为i的值为数组中只出现一次的值
        result.push(array[i]);
    }
    return result;
}
function unique5(array) {
    var obj = {}, type;
    return array.reduce(function (preValue, curValue) {
        type = typeof curValue;
        if (!obj[curValue]) {
            obj[curValue] = [type];
            preValue.push(curValue);
        } else if (obj[curValue].indexOf(type) < 0) {   // 判断数据类型是否存在
            obj[curValue].push(type);
            preValue.push(curValue);
        }
        return preValue;
    }, []);
}
function unique6(array) {
    return Array.from(new Set(array));
}

function ﬁndMost1(arr) {
    if (!arr.length) return;
    if (arr.length === 1) return 1;
    var res = {};
    // 遍历数组
    for (var i = 0, l = arr.length; i < l; i++) {
        if (!res[arr[i]]) {
            res[arr[i]] = 1;
        } else {
            res[arr[i]]++;
        }
    }
    // 遍历 res
    var keys = Object.keys(res);
    var maxNum = 0, maxEle;
    for (var i = 0, l = keys.length; i < l; i++) {
        if (res[keys[i]] > maxNum) {
            maxNum = res[keys[i]];
            maxEle = keys[i];
        }
    }
    return '出现次数最多的元素为:' + maxEle + '，出现次数为:' + maxNum;
}


const  obj = {
    name:"duxin"
}

console.log(obj.__proto__) //[Object: null prototype] {}