/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-06-30 23:42:00
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-01 00:00:02
 * @FilePath: \JavaScript\algorithms\createMathOperation.js
 * @Description: 对数学运算中的参数处理
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import {
    baseToNumber,
    baseToString
} from "./util.js"

/**
 * 
 * @param {*} operator 处理函数
 * @param {*} defaultValue 默认值
 * @returns 
 */
export default function createMathOperation(operator, defaultValue) {
    return (value, other) => {
        if (value === undefined && other === undefined) {
            return defaultValue;
        }

        if (value !== undefined && other === undefined) {
            return value;
        }
        if (value === undefined && other !== undefined) {
            return other;
        }
        if (typeof value === 'string' || typeof other === 'string') {
            value = baseToString(value);
            other = baseToString(other);
        } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
        }

        return operator(value, other)
    }
}