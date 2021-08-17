/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-08-03 23:23:02
 * @LastEditTime: 2021-08-03 23:50:28
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: Map数据结构
 * @FilePath: \JavaScript\map\map.js
 *  JavaScript的对象本质上是键值对的集合，但是只能使用字符串作为键，
 * 
 * ES6的Map数据结构，也是键值对的集合，但是它的键不限定是字符串，各种类型的值都可以作为键。
 */
const map = new Map();
const text = { name: "duxin" }
map.set(text, 90)
map.set(90, 1000)
console.log(map.get(90));// 1000
console.log(map.get(text));// 90

/**
 * Map结构属性和方法
 * 
 * size   Map结构成员总数
 * 
 * set(key, value) ，设置Map的键值，如果key已经存在则更新，否则新增。
 */