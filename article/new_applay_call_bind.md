## new关键词
JavaScript中的new关键词是什么意思呢？

new关键词是用来执行一个构造函数的、返回一个实例对象。如下代码：

```
function  Func(){
    this.name = "duxinyue";
}

const f1 = new Func();

console.log(f1); // { name: 'duxinyue' }
```
通过构造函数Func生成一个实例对象f1，

生成实例对象的流程大致如下：

1. 创建一个新对象；
2. 把构造函数的作用域赋值给新的对象【this指向新对象】；
3. 执行构造函数，这一步是给新对象添加属性；
4. 返回新对象。


## 那如果不用new关键词会怎样呢？？？

首先理解一下JavaScript下的this，默认的情况下，它是指向window的。那不用new关键词，直接把构造函数赋值给f2，在打印f2的时候就报错了，直接打印name，结果为“duxinyue”。如下：

```
const  f2 = Func();
console.log(f2);//undefined
console.log(name);//duxinyue
console.log(f2.name); //'name' of undefined
```

如果在构造函数中return一个值的话，就是另一种情况了：

```
function  Func(){
    this.name = "duxinyue";
    return {money:100}
}
const  f2 = Func();
console.log(f2);//{ money: 100 }
console.log(name);//duxinyue
console.log(f2.name); //undefined
```

> 如果构造函数return一个和this无关的对象时，new命令就直接返回该对象，而不是返回通过new执行生成的对象。

> 如果构造函数返回的不是对象，那么还是回按照new命令执行的步骤，返回生成的实例对象,就像一下案例：
>```
>function Func1(){
>    this.name = "qingzhuyue";
>    return "duxinyue"
>}
>const f3 = new Func1();
>console.log(f3);//{ name: 'qingzhuyue' }
>```

**那总的来说，new关键词执行构造函数后，会返回一个对象，不是实例对象就是return语句指向的对象**

## apply、call和bind的联系

apply、call和bind都是挂在Function对象上的，因此也只有函数才能调用这三个方法，它们的作用就是改变函数的this指向。
语法：
```
Func1.call(thisArg,p1,p2,p3);
Func1.apply(thisArg,[p1,p2,p3]);
Func1.bind(thisArg,p1,p2,p3)
```

>apply、call和bind的区别：bind虽然改变了函数的this指向，但它并没有立即执行，而apply和call在改变this指向后就立即执行了。

