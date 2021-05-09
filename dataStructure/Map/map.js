/*
 * @FileName: Map类
 * @Author: duxinyue
 * @Date: 2021-05-09 17:10:46
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-09 17:13:36
 * @FilePath: \JavaScript\dataStructure\Map\map.js
 * @Description: 
 */
const map = new Map();

map.set("name1","duxin1")
map.set("name2","duxin2")
map.set("name3","duxin3")
map.set("name4","duxin4")
console.log(map.size)
console.log(map.keys())
console.log(map.values())
console.log(map.get("name2"))