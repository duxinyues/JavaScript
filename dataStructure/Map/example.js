/*
 * @FileName: 
 * @Author: duxinyue
 * @Date: 2021-05-08 17:52:16
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-09 16:03:59
 * @FilePath: \JavaScript\dataStructure\Map\example.js
 * @Description: 
 */

import Dictionary from "./Dictionary.js"

const dictionary = new Dictionary()
const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sum.map((item, key) => {
    dictionary.set(key, item * 2)
})
console.log(dictionary.size())
console.log(dictionary.keys())
console.log(dictionary.keyValues())