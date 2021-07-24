<!--
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-07-24 14:02:58
 * @LastEditTime: 2021-07-24 14:50:01
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: 数据类型
 * @FilePath: \JavaScript\data-type\JavaScript基本数据类型.md
 * 
-->

JavaScript的数据类型可分为基本数据类型和引用数据类型：
基本数据类型：undefined、null、Boolean、Number、string、symbol
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

#### Boolean
• 字符串""或者''会转为false；

• 任何非空字符串转为true，包括" "；

• 0和NaN会转为false，除此之外任何的数字都转为true

• Object为null时，会转为false，其余都可以转为true，包含{}

• Undefined类型只有一个undefined值，会转换为false


#### Number
  

## 应用数据类型   