/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-08-03 23:23:02
 * @LastEditTime: 2021-08-03 23:35:57
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

console.log(map.get(text))