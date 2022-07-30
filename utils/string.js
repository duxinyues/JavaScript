/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-07-30 12:30:57
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-30 12:43:20
 * @FilePath: \JavaScript\utils\string.js
 * @Description: 字符串处理方法
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
function toThousands(number) {
    number = parseFloat(number.toFixed(3));
    let [integer, decimal] = String.prototype.split.call(number, '.');
    integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,'); // 正则先行断言
    return `${integer}${decimal ? '.' + decimal : ''}`;
  }
  
console.log(toThousands(12300))