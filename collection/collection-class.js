/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-07-30 23:21:43
 * @LastEditTime: 2021-07-31 17:39:38
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: 集合的类声明
 * @FilePath: \JavaScript\collection\collection-class.js
 * 
 */
class Set {
    constructor() {
        this.items = {}; // 用对象来表示集合
    }

    has(element) {
        // Object原型有hasOwnProperty方法，它返回一个表明对象是否具有特定属性的布尔值
        //  in 运算符返回的是对象在原型链上是否具有特定属性的布尔值
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }
    // 往集合添加成员
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }
    //  删除集合成员
    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    // 清空集合成员

    clear() {
        return this.items = {}
    }
    // 返回集合大小
    size() {
        return Object.keys(this.items).length;
    }
    // 返回的集合成员的值
    values() {
        return Object.values(this.items)
    }
    // 集合运算：并集、交集、差集和子集
    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach(value => {
            unionSet.add(value);
        });

        otherSet.values().forEach((value) => {
            unionSet.add(value);
        })
        return unionSet
    }

    // 交集
    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();

        let biggerSet = values;
        let smallerSet = otherValues;

        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }

        smallerSet.forEach((value) => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value)
            }
        })
        return intersectionSet;
    }

    // 差集
    difference(otherSet) {
        const differenceSet = new Set();
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        });

        return differenceSet;
    }

}


const set = new Set();


set.add(1)
console.log(set.values()); // [1]
console.log(set.has(2));// false

const setA = new Set();
const setB = new Set();

setA.add(1)
setA.add(2)
setB.add(1)
setB.add(3)

const unionAB = setA.union(setB)
console.log(setA)
console.log(setB)
console.log("并集", unionAB)

const intersectionAB = setA.intersection(setB)
console.log("交集", intersectionAB)

const differenceAB = setB.difference(setA);
console.log("差集", differenceAB)