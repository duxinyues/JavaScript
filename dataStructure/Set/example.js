/*
 * @FileName: 集合应用
 * @Author: duxinyue
 * @Date: 2021-05-05 21:18:35
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-05 22:17:08
 * @FilePath: \JavaScript\dataStructure\Set\example.js
 * @Description: 
 */
import {
    _Set
} from "./Set.js"

const setA = new _Set();
// setA.add(1)
// setA.add(3)
setA.add(6)
// setA.add(8)
// setA.add(2)
console.log("集合A===", setA.values())
const setB = new _Set();
setB.add(2)
setB.add(4)
setB.add(6)
setB.add(8)
console.log("集合B===", setB.values())
const unionAB = setA.union(setB);
console.log("并集===", unionAB.values())

const intersectionAB = setA.intersection(setB);
console.log("交集===", intersectionAB.values())

const differenceAB = setA.difference(setB)
console.log("差集===", differenceAB.values())

console.log(setA.isSubsetOf(setB))