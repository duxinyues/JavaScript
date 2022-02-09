### class
class，用来声明一个类，也可以说是定义一个对象，这个对象可以被继承：
```javascript
class Form {
    pubilcCount = 10; // 原型属性
    constructor(name, num) {
        // 实例属性
        this.name = name;
        this.num = num;
    }

    getInfo() {
        return {
            name: this.name,
            num: this.num
        }
    }
}

const form = new Form("duxin", 90)
console.log(form); // Form { pubilcCount: 10, name: 'duxin', num: 90 }
console.log(form.getInfo()); // {name:'duxin,num:90}
```

当有一个子类要继承该父类时：
```javascript
class Children extends Form {
    constructor(name, num, age) {
        super(name, num);
        this.age = age;
    }
}

const text = new Children('duXin', 90, 12)
console.log(text); // Children { pubilcCount: 10, name: 'duXin', num: 90, age: 12 }
```

ES6继承的本质，先创造一个父类的实例对象this，然后再用子类的构造函数修改this。所以子类在继承父类的时候，需要调用super方法。

如果子类没有定义构造函数时 ，会默认添加上。但是这样就没办法对父类实例进行修改了。
```javascript
class Children extends Form {
    constructor(...args) {
        super(...args);
    }
}
```
### super关键字
super可以有两个用处：
1. 作为函数调用，表示父类的构造函数，ES6的要求在子类中需要执行一次super，否则有时候JavaScript引擎会报错。虽然super表示父类的构造函数，返回的是子类的实例，super内部的this指向的是子类，就像`Form.prototype.constructor.call(this)`

2. super作为对象的时候，指向的是父类的原型对象，在静态方法中指向父类，所以定义在父类实例上的属性和方法都不能通过super调用
