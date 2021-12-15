/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-12-15 21:51:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-15 22:29:01
 * @Description: map和forEach的区别
 */
const  arr=[2,4,3,1,5,6,7,8,90];

arr.forEach(function(item) {
    item = item*10
})
console.log(arr); // [2,4,3,1,5,6,7,8,90]

const  targetArr = arr.forEach((item)=>{return item})

console.log(targetArr); // undefined

const targetArr2 = arr.map(function(item){
    return item *2;
});

console.log(targetArr2,arr);