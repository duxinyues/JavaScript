/*
 * @fileName: 冒牌排序
 * @Author: duxinyue
 * @Date: 2021-04-28 16:41:00
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-04-28 17:41:47
 * @FilePath: \JavaScript\算法\bubbleSort.js
 */
import {arr} from "../js/array-data.js";
function bubbleSort(array) {
    console.log("排序之前的",array)
    const len = array.length;
    if (len < 1) return array;
    for (let index = 0; index < len; index++) {
       for (let key = 0; key < index; key++) {
          if(array[key]>array[index]){
              const temp = array[key];
              array[key] = array[index];
              array[index] = temp
          } 
       }
    }
console.log("排序后的数列=",array)  
}
bubbleSort(arr);