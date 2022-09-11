/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-07-30 12:30:57
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-09-11 14:53:43
 * @FilePath: \JavaScript\utils\string.js
 * @Description: 字符串处理方法
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
// 千分符号
function toThousands(number) {
  number = parseFloat(number.toFixed(3));
  let [integer, decimal] = String.prototype.split.call(number, '.');
  integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,'); // 正则先行断言
  return `${integer}${decimal ? '.' + decimal : ''}`;
}

// 统计每个字符出现的次数
const strCount = function (s) {
  const json = {};
  let max = 0;
  let maxStr = '';
  let min = 0;
  let minStr = '';
  s.replace(/(\w{1})/g, function (item) {
    json[item] ? json[item] += 1 : json[item] = 1
  });
  for (const key in json) {
    if (json[key] > max) {
      maxStr = key;
      max = json[key];
    }
    if (json[key] == 1) {
      minStr = key;
      min = json[key];
    }
  }
  return { max, maxStr, min, minStr ,json};
};

console.log(strCount("IVIIIIdsdvdddvaaaaaVa"))