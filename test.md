目前有这个数据类型：undefined、 null、boolean、string、number、BigInt、Symbol、object。

# object 

引用数据类型，例如:Array、RegExp、Date、Math 和 Function

基础数据类型存储在栈内存中，被引用或者拷贝的时候，就会创建一个完全相等的变量；

引用数据类型存储在堆内存中，存储的是地址，多个引用指向同一个地址。

```
let str = {
    age:10,
    name:"duxin"
};

let str1 = str;
console.log(str.name); // 打印是  duxin

str1.name = "qingzhuyue";
console.log(str.name); // 打印是  qingzhuyue
console.log(str1.name);// 打印是  qingzhuyue
```

这就是引用类型的数据具有“共享”的特征了，两个值同时存在一块内存中，当一个值发生变化的时候，另一个也跟着变化。

```
let obj = {
    name:"duxin111",
    age:10
};

function  change(o){
    o.age = 24;
    o ={
        name:"qingzhuyue222",
        age:27
    }

    return o;
}

let  obj1 = change(obj)
console.log("obj==",obj);
console.log("obj1==",obj1);
```

# 数据类型检测

1. 使用typeof来判断数据类型，但是typeof用来检测基础数据类型还可以，一旦用来检测引用数据类型的话，就会容易出现错误。
```
console.log(typeof 1); // number
console.log(typeof "1"); // string
console.log(typeof undefined); // undefined
console.log(typeof true); // boolean
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof console); // object
console.log(typeof console.log); // function
```
null本身不是对象也不是引用数据类型，所以在判断是否为null的时候，直接使用“===null”。

所以typeof不能检测所有的引用数据类型，除了function以外。

2. instanceof，判断该对象是否是原先的构造函数生成的对象，

instanceof可以准确的判断出复杂的引用数据类型，但是不能正确判断基础数据类型

typeof可以判断出基础数据类型【null除外】，却无法判断引用数据类型【function除外】
```
function myInstanceof(left, right) {
    if (typeof left !== 'object' || left === null) return false;
    //getPrototypeOf是Object自带的一个API，可以获取参数的原型对象
    let proto = Object.getPrototypeOf(left);

    while(true){
        // 一直往下查询，直到找到相同的原型对象
        if(proto ===null) return false;
        if(proto === right.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}
console.log("--=-=-=-=-=-=-=-=-=-=-");
console.log(myInstanceof(new Number(123),Number)); //true

console.log(myInstanceof(123,Number)); // false
```


3. Object.prototype.toString，toString()是Object的原型方法，直接调用就会返回[object Object]，对于其他对象来说，使用call调用，才可以返回正确的数据类型。

// 通用的数据类型判断方法

function getType(obj){
    // 判断该数据的是否是基础数据类型，如果是，则直接返回
    let type = typeof obj;

    if(type !== 'object'){
        return type
    }

    return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/,'$1')
}

console.log(getType([]));
console.log(getType(null));
console.log(getType('12345'));
console.log(getType(/1234/g))