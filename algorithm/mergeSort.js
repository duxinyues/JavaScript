/*
 * @fileName:归并排序
 * @Author: duxinyue
 * @Date: 2021-04-29 11:35:40
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-04-29 11:49:15
 * @FilePath: \JavaScript\algorithm\mergeSort.js
 */

import {
    arr
} from "../js/array-data.js";

function mergeSort(arr) {
    console.log("排序前的数组", arr)
    const merge = (left, right) => {
        const result = [];
        let il = 0;
        let ir = 0;
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++])
            } else {
                result.push(right[ir++])
            }
        }

        while (il < left.length) {
            result.push(left[il++])
        }

        while (ir < right.length) {
            result.push(right[ir++])
        }

        return result;
    }
    const mergeSort = (arr) => {
        if (arr.length == 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid, arr.length);

        return merge(mergeSort(left), mergeSort(right))
    }
    console.log("排序后的数组", mergeSort(arr))
    return mergeSort(arr)
}

mergeSort(arr);