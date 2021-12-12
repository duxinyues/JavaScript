<!--
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-12-12 22:18:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-12 22:40:41
 * @Description: 文件描述
-->

NaN与任何值都不相等，就算是和本身相比较，也是不相等的。

NaN是一个Number类型的数值，只是无法用数字来表示。

### isNaN()
用来判断一个变量是否是NaN，方法在执行的时候，会判断入参是否可以转化为数字，是，则返回false，否，返回true。



### Number.isNaN()
这个方法在执行的时候，不会做数据类型转换，当入参是NaN的时候，才会返回“true”，掺入其余类型都会返回false。

