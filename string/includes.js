/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-07-18 23:41:22
 * @LastEditTime: 2021-07-18 23:48:03
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: 
 * @FilePath: \JavaScript\string\includes.js
 * 
 */

const str = "dbvdjkfvdf";
// indexOf()确定一个字符串是否包含有另一个字符串。
console.log(str.indexOf("v"));
// includes(), 返回一个布尔值，确定是否找到参数字符串
console.log(str.includes("f"));
// startWuth()，给定参数是否在字符串的头部
console.log(str.startsWith("f"));
//  endWith()，给定参数是否在字符串的尾部
console.log(str.endsWith("b"));