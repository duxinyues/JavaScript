/*
 * @FileName: 
 * @Author: 1638877065@qq.com
 * @Date: 2021-06-20 22:38:23
 * @LastEditors: 1638877065@qq.com
 * @LastEditTime: 2021-06-20 22:41:47
 * @FilePath: \JavaScript\index.js
 * @Description: 
 */

import {HashTable}  from "./dataStructure/Map/hashTable"

const  hash = new HashTable()
hash.put("duxin","1638877065@qq.com");

console.log(hash.hashCode("duxin"))