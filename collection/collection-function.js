/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-08-01 22:59:12
 * @LastEditTime: 2021-08-01 23:39:16
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: 函数实现集合
 * @FilePath: \JavaScript\collection\collection-function.js
 * 
 */
function Set() {
    let items = {};

    this.has = function (value) {
        return items.hasOwnProperty(value)
    }

    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    }

    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }

        return false
    }

    this.clear = function () {
        items = {}
    }

    this.size = function () {
        return Object.keys(items).length;
    }

    this.values = function () {
        return Object.values(items)
    }
    // 并集
    this.union = function (otherSet) {
        const unionSet = new Set();

        this.values().map((item) => {
            unionSet.add(item)
        })

        otherSet.values().map((item) => {
            unionSet.add(item)
        })

        return unionSet
    }
    // 交集
    this.intersection = function (otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();

        let biggerSet = values;
        let smallerSet = otherValues;

        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }

        smallerSet.map((item) => {
            if (biggerSet.includes(item)) {
                intersectionSet.add(item)
            }
        })

        return intersectionSet;
    }
    // 差集
    this.difference = function (otherSet) {
        const differenceSet = new Set();
        this.values().map((item) => {
            if (!otherSet.has(item)) {
                differenceSet.add(item);
            }
        });
        return differenceSet;
    }
    // 子集
    this.isSubsetOf = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }

        let isSubset = this.values().every((value) => otherSet.has(value));

        return isSubset
    }
}


const set = new Set();
set.add(1);
set.add(2);
set.add(31);
set.add(0);
console.log(set.values());
console.log(set.has(3));
console.log(set.size());

const setB = new Set();

setB.add(10);
setB.add(0);
console.log(set.union(setB).values());
console.log(set.intersection(setB).values());
console.log(set.difference(setB).values());
console.log(set.isSubsetOf(setB));