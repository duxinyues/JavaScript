<!--
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-09-15 10:13:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-16 11:26:31
 * @Description: 数组总汇
-->

1. 数组的构造函数有几种
2. 哪些是改变数组自身的方法
3. 哪些是不改变自身的方法
4. 数组遍历有哪些方法

##  数组构造器

#### 1. Array
Array用来创建一个新的数组，当然，我们也可以使用字面量的方式来定义数组，比如：

```
const  arr = []
```
等价于
```
const  arr = Array()
```

但是，如果我们要定义一个有长度的数组，例如数组长度为10，这样使用字面量的方式定义新的数组就有点吃力了。

那么直接使用Array()构造函数定义新的数组：
```
const arr = Array(10); // 定义长度为10的空数组
```

当然在JavaScript中的数组的长度也不是无限大的，要小于2的32次方，即Math.pow(2,32)。如果数组的长度大于或者等于2的32次方，就会抛出RangeError的异常。


***

#### 2.Array.of 和 Array.from

Array.of()，会依次把参数转化为数组的一项，然后返回该数组，和Array构造函数类似，只是在处理单个参数的有点不一样，Array.of()是直接把单个参数转化为数组后返回；而Array()是会把单个参数作为新数组的长度，数组的每一项都为空。

Array.from，是把类数组对象转化为数组，不会修改原对象，只返回新数组。

Array.from可以接受三个参数：

1. 类似数组并且可迭代的对象；
2. 加工函数【可选】；
3. this，表示加工函数执行时this的指向。

## 判断一个变量是否为数组的几种方式

```
var arr = [];

// 1.基于instanceof
arr instanceof Array;

// 2.基于constructor
arr.constructor === Array;

// 3.基于Object.prototype.isPrototypeOf
Array.prototype.isPrototypeOf(arr);

// 4.基于getPrototypeOf
Object.getPrototypeOf(arr) === Array.prototype;

// 5.基于Object.prototype.toString
Object.prototype.toString.apply(arr) === '[object Array]';

```
## 改变数组自身的方法
pop、push、reverse、shift、sort、splice、unshift、copyWithin 和 fill

## 不改变数组自身的方法
concat、join、slice、toString、toLocaleString、indexOf、lastIndexOf、includes

## 遍历数组的方法
forEach、every、some、filter、map、reduce、reduceRight、entries、find、findIndex、keys、values


## 类数组
函数的参数对象arguments就是一个类数组。

## 数组扁平化
1. reduce

    ```
    const arr00 = [1, [4, 4, [54, 65]]];
    function flatArr(arr) {
        return arr.reduce(function (prev, curr) {
            return prev.concat(Array.isArray(curr) ? flatArr(curr) : curr)
        }, [])
    }
    ```
    
2. 扩展运算符
   ```
    const arr00 = [1, [4, 4, [54, 65]]];
    function flatArr(arr) {
        while (arr.some(function (item) { return Array.isArray(item) })) {
            arr = [].concat(...arr)
        }
        return arr
    }

    console.log(flatArr(arr00))
   ```

3. split()和toString()
   ```
    const arr00 = [1, [4, 4, [54, 65]]];
    function flatArr(arr) {
        retutn arr.toString().split(",")
    }

    console.log(flatArr(arr00))
   ```
