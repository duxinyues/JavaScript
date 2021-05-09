/*
 * @FileName: Set类
 * @Author: duxinyue
 * @Date: 2021-05-05 20:27:47
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-08 17:31:11
 * @FilePath: \JavaScript\dataStructure\Set\Set.js
 * @Description: 
 */

// function Set(){
//     let  items= {}
// }


export class _Set {
    constructor() {
        this.items = {};
    }
    // 添加一个元素
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }
    // 删除一个元素
    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }

        return false;
    }
    // 查看元素是否在元素中
    has(element) {
        // javascript的in运算符验证一个元素是否是某个对象的属性
        // in返回表示对象在原型链上是否有特定属性的布尔值
        return element in this.items;

        /**
         * Object原型中有hasOwnProperty方法，返回一个对象是否具有特定属性的布尔值
         *  return    Object.prototype.hasOwnProperty.call(this.items, element)
         */
    }
    // 清空集合元素
    clear() {
        this.items = {}
    }
    // 集合的元素数量
    size() {
        return Object.keys(this.items).length

        //   let count = 0;
        //   for (const key in this.items) {
        //       if (this.items.hasOwnProperty(key)) {
        //          count++;
        //       }
        //   }
        //   return  count
    }
    // 返回一个包含集合中所有元素的数组
    values() {
        return Object.values(this.items)
    }
    // 并集
    union = (otherSet) => {
        const unionSet = new _Set();
        this.values().forEach(element => unionSet.add(element));
        otherSet.values().forEach((element) => unionSet.add(element));
        return unionSet;
    }
    // 交集
    intersection(otherSet) {
        // const intersectionSet = new _Set();
        // const values = this.values();

        // for (let index = 0; index < values.length; index++) {
        //     if (otherSet.has(values[index])) {
        //         intersectionSet.add(values[index])
        //     }
        // }

        // return intersectionSet;

        const intersectionSet = new _Set();
        const values = this.values();
        const otherSetValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherSetValues;
        if (otherSetValues.length - values.length) {
            biggerSet = otherSetValues;
            smallerSet = values;
        }
        smallerSet.forEach((value) => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value)
            }
        });
        return intersectionSet
    }
    // 差集
    difference(otherSet) {
        const differenceSet = new _Set();
        this.values().forEach((value) => {
            if (!otherSet.has(value)) {
                differenceSet.add(value)
            }
        })
        return differenceSet;
    }

    // 子集
    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        let isSubset = this.values().every(value => {
            return otherSet.has(value)
        })

        // this.values().every(value => {
        //     if (!otherSet.has(value)) {
        //         isSubset = false;
        //         return false;
        //     }
        //     return true;
        // })

        return isSubset
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const values = this.values();
        let objString = `${values[0]}`;
        for (let i = 1; i < values.length; i++) {
            objString = `${objString},${values[i].toString()}`;
        }
        return objString;
    }
}