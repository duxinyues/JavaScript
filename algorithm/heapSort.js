/*
 * @fileName: 堆排序
 * @Author: duxinyue
 * @Date: 2021-04-29 10:59:49
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-04-29 11:20:37
 * @FilePath: \JavaScript\algorithm\heapSort.js
 */

import {
    arr
} from "../js/array-data.js"

function heapSort(arr) {
    const len = arr.length;
    const k = 0;

    function swap(i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function max_heapify(start, end) {
        const dad = start;
        let son = dad * 2 + 1;
        if (son >= end) return;
        if (son + 1 < end && arr[son] < arr[son + 1]) {
            son++
        };
        if (arr[dad] <= arr[son]) {
            swap(dad, son);
            max_heapify(son, end);
        }
    }

    for (let index = Math.floor(len / 2) - 1; index >= 0; index--) {
        max_heapify(index, len);
    }

    for (let index = len - 1; index > k; index--) {
        swap(0, index);
        max_heapify(0, index)
    }


    console.log("排序后的数组", arr);
    return arr;
}


heapSort(arr)