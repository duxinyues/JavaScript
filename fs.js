/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-09-16 15:24:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-16 15:25:40
 * @Description: 文件描述
 */
// test.js
const fs = require("fs")

// 异步读取
fs.readFile('fs.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: " + data);
});

// 同步读取
const data = fs.readFileSync('fs.txt');
console.log("同步读取: " + data);

