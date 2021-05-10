/*
 * @FileName: 递归
 * @Author: duxinyue
 * @Date: 2021-05-09 23:32:23
 * @LastEditors: duxinyue
 * @LastEditTime: 2021-05-09 23:48:56
 * @FilePath: \JavaScript\algorithm\recursive.js
 * @Description: 斐波那契数列
 */
// 0、1、1、2、3、5、8、13、21、34等数组成的序列
function recursive(num) {
    if (num < 1) return 0;
    if (num <= 2) return 1;

    return recursive(num - 1) + recursive(num - 2);

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

/**
 * 记忆化斐波那契数
 * @param {*} num 
 * @returns 
 */
function recursiveMemoization(num) {
    const memo = [0, 1];
    const memoization = (num)=>{
        if(memo[num] != null)return memo[num];

        return memo[num] = memoization(num-1,memo)+memoization(num-2,memo);
    }
    return memoization(num)
}

console.log(recursiveMemoization(7))