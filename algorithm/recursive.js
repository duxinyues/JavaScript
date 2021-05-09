/*
 * @FileName: 递归
 * @Author: duxinyue
 * @Date: 2021-05-09 23:32:23
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-09 23:39:23
 * @FilePath: \JavaScript\algorithm\recursive.js
 * @Description: 斐波那契数列
 */

function recursive(num) {
    if (num < 1) return 0;
    if (num <= 2) return 1;

    let n1 = 0;
    let n2 = 1;
    let sum = 0;

    for (let index = 2; index <= num; index++) {
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }

    return sum
}


console.log(recursive(7))