/*
 * @fileName: 快速排序
 * @Author: duxinyue
 * @Date: 2021-04-28 17:47:13
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-04-29 09:09:59
 * @FilePath: \JavaScript\algorithm\quickSort.js
 */

import {
    arr
} from "../js/array-data.js"

function quickSort(arr) {
    const quick = function (arr) {
        const len = arr.length;
        if (len <= 1) return arr;
        const index = Math.floor(len >> 1);
        const pivot = arr.splice(index, 1)[0];
        const left = [];
        const right = [];
        for (let i = 0; i <len; i++) {
            if(arr[i]>pivot){
                right.push(arr[i])
            }            
            if(arr[i]<= pivot){
                left.push(arr[i])
            }
        }
        return  quick(left).concat([pivot],quick(right));
    }

    const result = quick(arr);
    console.log(result)
    return result;
}

quickSort(arr)