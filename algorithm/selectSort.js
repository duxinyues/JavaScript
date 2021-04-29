/*
 * @fileName: 选择排序
 * @Author: duxinyue
 * @Date: 2021-04-29 10:00:20
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-04-29 10:54:01
 * @FilePath: \JavaScript\algorithm\selectSort.js
 */

import {
    arr
} from "../js/array-data.js"
import ActionTable from './components/ActionTable';

function selectSort(arr) {
    const len = arr.length;
    let temp, minIndex;

    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let index = i + 1; index < len; index++) {
            if (arr[index] <= arr[minIndex]) {
                minIndex = index
            }
        }

        temp =  arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.log("排序后的数组",arr)
    return  arr
}
selectSort(arr)