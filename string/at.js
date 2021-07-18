/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-07-18 16:26:37
 * @LastEditTime: 2021-07-18 23:40:50
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description:
 * @FilePath: \JavaScript\string\at.js
 * 在ES5提供chartAt()方法，返回字符串给定位置的字符，但是它不能识别大于0xFFFF的字符
 * ES6 提供的at()，但是有些浏览器还暂时不支持该方法
 */

const str = "𠮷";
console.log(str.charAt(0))