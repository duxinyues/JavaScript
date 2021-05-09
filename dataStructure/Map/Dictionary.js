/*
 * @FileName: 字典
 * @Author: duxinyue
 * @Date: 2021-05-08 17:50:46
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-09 15:58:14
 * @FilePath: \JavaScript\dataStructure\Map\Dictionary.js
 * @Description: 字典数据结构
 */
import {
    defaultToString
} from "../../utils/util.js"

export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {}; // 字典中的属性
    }
    // 给字典添加元素
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }

        return false;
    }
    //  删除字典中的元素
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    // 检测字典元素
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null
    }
    // 获取某个元素
    get(key) {
        if (this.hasKey(key)) {
            return this.table[this.toStrFn(key)]
        }
        return undefined;
    }
    clear() {
        this.table = {}
    }
    size() {
        return Object.keys(this.table).length
    }
    isEmpty() {
        return this.size()
    }
    keys() {
        return this.keyValues().map((item) => item.key);
    }
    values() {
        return this.keyValues().map((item) => item.value);
    }
    // 以数组的形式返回字典中所有的对象
    keyValues() {
        // return Object.values(this.table);
        const valuePairs = [];
        for (const key in this.table) {
            if (this.hasKey(key)) {
                valuePairs.push(this.table[key]);
            }
        }
        return valuePairs;
    }
    forEach(callbackFn) {
        const valuePairs = this.keyValues();
        for (let index = 0; index < valuePairs.length; index++) {
            const result = callbackFn(valuePairs[index].key, valuePairs[index].value);
            if (result === false) {
                break;
            }
        }
    }
    toString() {
        if (this.isEmpty()) return "";
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let index = 1; index < valuePairs.length; index++) {
            objString = `${objString},${valuePairs[index].toString()}`
        }

        return objString;
    }
}

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString() {
        return `[#${this.key}:${this.value}]`;
    }
}