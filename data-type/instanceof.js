/*
 * @Author: 1638877065@qq.com
 * @Date: 2021-09-08 09:40:35
 * @LastEditTime: 2021-09-08 11:12:35
 * @LastEditors: 1638877065@qq.com
 * @Description: instanceof 运算符
 * @FilePath: \JavaScript\data-type\instanceof.js
 */
const type = [String, Array, Function, RegExp, Math]
const str = new String("duxinyue");
console.log(str instanceof Array);
console.log(typeof str);

const func = new Function()
console.log(typeof func);
console.log(func instanceof Function);

console.log(typeof []);
console.log(typeof {});
/**
 * instanceof 运算符用于检测构造函数的prototype是否出现在实例上
 */