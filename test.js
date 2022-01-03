/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-12-06 22:14:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-12 23:53:50
 * @Description: 文件描述
 */
var twoSum = function (nums, target) {
    const arr = [];
    nums.map((item, index) => {
        nums.map((its, i) => {
            if (index == i) return;
            if (item + its == target) {
                arr.push(index);
                arr.push(i);
            }
        })
    })

    return [...new Set(arr)]
};

console.log(twoSum(
    [3, 2, 3],
    6));



var longestPalindrome = function (s) {
      s = s.toLowerCase();
      const arr = s.split('');
      const reverS = arr.reverse();
};