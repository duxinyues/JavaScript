/*
 * @fileName: 插入排序
 * @Author: duxinyue
 * @Date: 2021-04-29 09:35:50
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-04-29 09:55:29
 * @FilePath: \JavaScript\algorithm\insertSort.js
 */

import {
    arr
} from "../js/array-data.js"

function insertSort(arr) {
    const len = arr.length;
    let current, prev;
    for (let index = 1; index < len; index++) {
        current = arr[index];
        prev = index - 1;

        while (prev >= 0 && arr[prev] > current) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = current
    }
    console.log("排序后的数组==", arr)
    return arr
}

insertSort(arr)