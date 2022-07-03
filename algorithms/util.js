/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-06-30 23:39:02
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-03 12:25:39
 * @FilePath: \JavaScript\algorithms\util.js
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
const toString = Object.prototype.toString;
// 
export function getTag(value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object null]'
    }
    return toString.call(value)
}

// 检测是否是Symbol类型
export const isSymbol = (value) => {
    const type = typeof value;
    return type == 'symbol' || (type === 'object' && value != null && getTag(value) == '[object Symbol]')
}

// 转化number
export const baseToNumber = (value) => {
    if (typeof value === 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NaN
    }
    return +value;
}

const INFINITY = 1 / 0;
const symbolToString = Symbol.prototype.toString;
export const baseToString = (value) => {
    if (typeof value === 'string') {
        return value
    }
    if (Array.isArray(value)) {
        return `${value.map(baseToString)}`
    }
    if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
    }
    const result = `${value}`;
    return (result === '0' && (1 / value === -INFINITY) ? '-0' : result)
}

const HASH_UNDEFINED = 'hash_undefined';
export class Hash {
    constructor(entries) {
        let index = -1;
        const length = entries === null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
            const entry = entries[index];
            this.set(entry[0], entry[1])
        }
    }
    //    清空hash
    clear() {
        this.__data__ = Object.create(null);
        this.size = 0;
    }
    // 删除key
    delete(key) {
        const result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
    }

    get(key) {
        const data = this.__data__;
        const result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }

    has(key) {
        const data = this.__data__;
        return data[key] !== undefined;
    }

    set(key, value) {
        const data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = value === undefined ? HASH_UNDEFINED : value;
        return this
    }
} 

