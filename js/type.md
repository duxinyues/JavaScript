# 数据强制类型转换
通过自身的方法来进行数据类型的强制转换


# Number();
```
console.log(Number(false));   //0

console.log(Number(true));  // 1

console.log(Number(90)); //90

console.log(Number(null)); // 0

console.log(Number(undefined)); // NaN

console.log(Number("string"));  // NaN

console.log(Number("80.999￥")); // NaN

console.log(Number("0x8888")); // 34952 十六进制转换为十进制数字

console.log(Number("6789.90")); //6789.9

console.log(Number("")); // 0

console.log(Number(Symbol));
```

Number()转换的一些规则：

1. 转换参数是布尔值，true和false分别被转换为1和0；
2. 如果参数是数字，则返回数字本身；
3. 参数是null，返回0；
4. 参数是undefined，返回NaN；
5. 如果参数是字符串，那么分为以下几种：

1)、字符串中只包含数字【或者是0x开头的十六进制】，则返回数字或者十六进制转换成的十进制数；

2)、如果字符串中含有有效的浮点数格式，则返回浮点数值；

3)、如果是空的字符串，则返回是0；

除此之外，其他格式的字符串，都会被转换为NaN。

parseInt();

parseFloat();

toString();

String();

Boolean();

Boolean()方法的类型转换，除了undefined、null、false、''、0（-0或者+0）、NaN转化出来时false以外，其他的都是true