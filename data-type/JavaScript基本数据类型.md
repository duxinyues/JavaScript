<!--
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-07-24 14:02:58
 * @LastEditTime: 2021-09-08 10:40:19
 * @LastEditors: 1638877065@qq.com
 * @Description: 数据类型
 * @FilePath: \JavaScript\data-type\JavaScript基本数据类型.md
 * 
-->

JavaScript的数据类型可分为基本数据类型和引用数据类型：
基本数据类型：undefined、null、Boolean、Number、string、symbol、BitInt
引用数据类型：Object、Function、Array和Date

## 基本数据类型

##### 1、Undefined
Undefined只有一个字面值：undefined，代表的是一个变量不存在。

•  只声明却未初始化的变量，会出现“undefined”；

•  获取一个不存在的对象属性，返回“undefined”；

•  函数没有明确的返回值，但却调用了返回值，这时会返回“undefined”；

• 函数定义多个形参，但是调用时传参数量少于形参数量，那么没有匹配上的形参就为“undefined”；
##### 2、Null
Null也是只有一个字面值，表示是一个空指针对象，因为是一个对象，所有使用typeof来检测null的数据类型的时候会返回“object”。

• 如果声明变量为了保存后面的某个值的时候，应该在声明该变量的时候赋值为“null”；

• JavaScript在获取DOM元素的时候，如果没有指定元素对象，则会返回“null”；

• 正则在捕获的时候，没有捕获到结果，也会返回null；

undefined和null在转为Boolean值的时候，都是false。

Undefined是派生自Null类型的，所以在非严格相等的情况下，这两者是相等的：
```
undefined == null ;  // true
```

null是JavaScript的关键字，undefined是JavaScript中的一个全局变量，是挂载window对象上的一个变量。

#### 3、Boolean
• 字符串""或者''会转为false；

• 任何非空字符串转为true，包括" "；

• 0和NaN会转为false，除此之外任何的数字都转为true

• Object为null时，会转为false，其余都可以转为true，包含{}

• Undefined类型只有一个undefined值，会转换为false


#### 4、Number
  • true转为1，false转为0

• Null转为0

• undefined转为NaN

• string转为Number类型：

• 如果字符串只包含数字，则会换成十进制数，如果前面含有0，会直接忽略掉；浮点数也一样

• 如果字符串包含有效的十六进制数，会转换为十进制数

• 空字符串会转为0

• 其他字符会转为NaN

• Object转为Number类型，会先调用valueOf方法返回键值对的value值，再次进行转换，如果值是NaN，则调用toString()方法返回值重新进行转换。

转换为Number类型的三个方法：Number()、parseInt()、parseFloat()

1、Number()，将任何类型转换为Number类型，用以上的规则进行转换

2、parseInt()，用来解析一个字符串， 返回指定基数对应的整数值，但是如果该字符串 不能转换为Number类型的，就会返回NaN

3、parseFloat()，解析一个字符串，返回一个浮点数

 Number()函数转换的是传入的整个值，并不是像parseInt()函数和parseFloat()函数一样会从首位开始匹配符合条件的值。如果整个值不能被完整转换，则会返回“NaN”。

 isNaN()函数在判断是否为NaN时，需要先进行数据类型转换，只有在无法转换为数字时才会返回“true”；Number.isNaN()函数在判断是否为NaN时，只需要判断传入的值是否为NaN，并不会进行数据类型转换。
#### 5、String

#### 6、Symbol

#### 7、BigInt

## 应用数据类型（Object）

1. Array数组对象
2. Function函数对象
3. Date内置日期对象
4. Math数学对象
5. RegExp正则对象


基础数据类型是存储在栈内存，被引用或者拷贝的时候，会在内存创建完全相等的变量。

引用数据类型是存储在堆内存，存储的一个地址，被引用或者拷贝的时候，会指向同一个地址。