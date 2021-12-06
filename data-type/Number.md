<!--
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-12-06 22:16:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-06 22:53:53
 * @Description: 文件描述
-->
最基本的数据是用十进制表示的，也可以使用八进制或者十六进制表示。

#### 八进制

八进制表示一个数的话，那么首位必须以0开始，其余位数以0~7来组织，形成一个八进制的数字。

要是后面的位数出现大于7的数字，那么会忽略首位的0，当成十进制来处理。


#### 十六进制

用十六进制表示一个数值，则前两位必须是0x，其他位必须是十六进制序列【0~9，a~f或者A~F】如果超出十六进制序列就会抛出异常。

### 转换

###### Boolean转Number

1. true为1
2. false为0

######  Null类转Number

Null只有一个字面值，直接转换为0。

###### Undefined类型转Number
Undefined也是只有一个字面值，会转化为NaN。

######  String类型转为Number类型
1. 字符串全部为数字，直接转为十进制，首位是0的话，忽略掉。
2. 字符串含有浮点数，也是直接转为十进制数。
3. 字符串是十六进制，转为十进制数
4. 空字符串转为0
5. 含有其他字符的话，会直接返回NaN


######  Object类型转为Number类型

优先调用valueOf()函数，通过valueOf()函数返回值，再转化为Number类型。

要是转化结果为NaN，那就调用toString()函数，用toString()的返回值来转换。

## Number()函数

可以直接用于任何类型转为Number，有以下几个规定：
1. 转化内容是数字，会按照对应的进制格式来转化
2. Boolean类型，true为1，false为0
3. null为0
4. undefined为NaN

## parseInt()函数

## parseFloat()函数