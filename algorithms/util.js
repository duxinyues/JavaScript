/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-06-30 23:39:02
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-06-30 23:41:10
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

console.log(getTag(875))

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