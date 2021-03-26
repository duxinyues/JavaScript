当通过使用逻辑运算符【&&、||、!】,运算符（+、-、*、/），关系运算符（>,<,<=,=>）,相等运算符（==），if/while条件操作的时候，碰到了两个数据类型不一致的情况下，就会出现隐式类型转换。为什么是隐式类型转换呢？因为它们在做数据类型转换的时候，非常隐蔽，我们很难发现。


# == 的转换

1. 两个类型相同，不需要做类型转换；

2. 如果一边是null或者是undefined，那么另一边也必须是null或者是undefined，才会返回true；

3. 如果一个是Symbol类型，那么只能返回false；

4. 如果两个操作值的类型分别是String和Number，那么String会转换为Number；

5. 一个操作值是Boolean，就会转换为对应的Number类型，例如true==1，最终打印为true。因为true对应的Number是1，false对应的Number是0；

6. 一个操作值是Object，另一个是String、Number或者是Symbol类型，那么Object就会转换为原始类型后再进行判断，这个转换过程中会调用Object的valueOf或者toString方法进行转换。


```
console.log(null == undefined); // true

console.log("90" == 90); // true


console.log(true == 100); // false

console.log(null == 0); // false

console.log(null == 1); // false
console.log('' == null);  // false

console.log('' == 0); //  true
console.log(true == 1); // true

console.log(false == 0); // true

const a = {
    value: 0,
    valueOf: function () {
        this.value++;
        return this.value
    }
}
console.log("=======================")
console.log(a == 1);//  true
```


# + 隐式类型转换

“+”可以作为数字相加，也可以作为字符串拼接。如果两个操作值都是Number类型的时候，就会对两个数字相加；如果两个操作值都是字符串的时候，就会拼接字符串。

1. 如果一个是字符串，一个是数字的时候，则会按照拼接字符串进行拼接；

2. 如果一个是数字，另一个是null、undefined、布尔值或者数字,则直接将其转化为数字，再进行加减运算；
```
console.log(90+"90");// 9090

console.log(90+"duxinyue"); // 90duxinyue

console.log(90+null);// 90

console.log(90+undefined);//NaN

console.log(90+true); // 91

console.log(90+false); // 90
```

3. 一个是字符串，另一个是undefined、null、布尔值，会调用toString()方法进行字符字符串拼接；如果是纯粹的数组、对象、正则，这时会默认调用对象的转换方法，然后再进行拼接；

# object 转换

如果部署了Symbol.toPrimitive,就会优先调用它；如下代码：

```
const  obj = {
    value:12,
    valueOf(){
        return 20;
    },
    toString(){
        return "30";
    },
    [Symbol.toPrimitive](){
        return  40;
    }
}

console.log(obj+1);
```

console.log(obj+1);打印的是41。

