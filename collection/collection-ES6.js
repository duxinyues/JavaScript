/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-08-01 23:59:34
 * @LastEditTime: 2021-08-02 23:35:42
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: ES6的set结构实现集合
 * @FilePath: \JavaScript\collection\collection-ES6.js
 *  
 * 数据结构set，类似数组，其成员值是唯一的，没有重复值。Set本身是一个构造函数。
 * 
 * add()
 * 
 * size
 * 
 * has()
 * 
 * delete()
 * 
 * clear()
 * 
 * 可以给数组去重，也可以给对象去重，去重相同属性。
 */

const _set = new Set();
_set.add({ name1: "duxin1", name2: "duxin2", name: "duxin3" })
console.log(_set)
console.log(_set.size)

const _setB = new Set([1, 2, 3, 4, 3]);

console.log("A集合", _set)
console.log("B集合", _setB);

//并集
let union = new Set([..._set, ..._setB]);
console.log("并集", union)

// 交集
let intersect = new Set([..._set].filter(value => _setB.has(value)))
console.log("交集", intersect)

// 差集
const difference = new Set([..._set].filter(value => !_setB.has(value)));

console.log("差集", difference)