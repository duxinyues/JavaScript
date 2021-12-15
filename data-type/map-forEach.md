<!--
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-12-15 21:56:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-15 22:30:37
 * @Description: map和forEach的区别
-->
## forEach()
对数组的每一个元素执行一次callback函数，总是返回undefined值，不能链式调用，就是遍历一次。不会改变原来数组。

1. 无法终止forEach循环；
2. 数组在迭代的时候，被修改，其他则直接跳过其他元素。

```
const  arr=[2,4,3,1,5,6,7,8,90];

arr.forEach(function(item) {
    item = item*10
})
console.log(arr); // [2,4,3,1,5,6,7,8,90]

const  targetArr = arr.forEach((item)=>{return item})

console.log(targetArr); // undefined
```

## map()
可以遍历数组，同时创建新的数据，新数组的元素是该数组的元素通过回调函数后的返回值。

如果不想产生多余的数组时，最好通过forEach或者for-of来遍历数组。map的设计初衷就是可以在遍历的同时创建新的数组。

```
const targetArr2 = arr.map(function(item){
    return item *2;
});

console.log(targetArr2,arr);
```
原数组没有改变。