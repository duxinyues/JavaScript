继承，是面向对象的，通过继承，我们更好的服用以前的代码，提升开发的效率和缩短开发的周期

其实，继承就是让子类具有父类的各种方法和属性，而不需要在子类中重新定义和父类一样的方法和属性。当然，在子类中是可以定义一些父类本身没有的属性和方法的。继承在编程中并不难理解。

1. 那么在JavaScript中的继承，有多少中方式呢？
2. es6的extends关键字使用了哪一种继承方式呢？

# 第一种继承方式：原型链继承

在原型链继承里涉及到构造函数、原型和实例；

构造函数都有一个原型对象，而原型对象又包含了一个指向构造函数的指针。
如下代码：

```
function SuperType() {
    this.name = "duxinyue"
    this.property = "SuperType";
}
SuperType.prototype.getSupertyValue = function () {
    return this.property;
}

function SubType() {
    // this.name = "qingzhuyue"
    this.subproperty = "SubType";
}

// 继承SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
    return this.subproperty;
}

const instance = new SubType();
const instance1 = new SuperType();
instance1.name = "镀锌不得不"
console.log(instance.getSupertyValue()); // SuperType
console.log(instance.getSubValue());

console.log(instance.name);

console.log(instance1.name);
```

# 第二种方式：构造函数继承（借助call）

```
function Parent1() {
    this.name = "读心悦";
}

Parent1.prototype.getName = function () {
    return this.name;
}

function Child1() {
    Parent1.call(this);
    this.type = "child1";
}

const  child1 = new Child1();
console.log(child1); //  { name: '读心悦', type: 'child1' }
console.log(child1.getName()) //  child1.getName is not a function

```

在构造函数继承中，child1继承了Parent的那么属性。但是Parent原型对象上的方法却没办法继承。

# 第三种方式：组合继承（原型继承和构造函数继承的组合）
```
function Parent(){
    this.name = "duxinyue";
    this.play = [1,2,3];
}

Parent.prototype.getName = function(){
     return this.name;
}

function Child(){
    Parent.call(this)
    this.type = "child3"
}

Child.prototype = new Parent();
// 指向自己的构造函数
Child.prototype.constructor = Child;
// 构造函数继承（借助call）

const c1 = new Child();
const c2 = new Child();

c1.play.push(5);
console.log("c1==",c1);
console.log("c2==",c2);
console.log(c1.getName())
console.log(c2.getName())
```

# 第四种方式：原型式继承
Object.create()，接受两个参数，第一个参数是作为新对象原型的对象，第二个参数是新对象定义额外的属性的对象。

```
const parent = {
    name:"读心悦",
    play:[1,2,3,4],
    getName:function(){
        return this.name;
    }
};

console.log(parent.getName());

const p0 = Object.create(parent);
p0.name = "青竹悦";
p0.play.push(90);
console.log(p0.name);//青竹悦
console.log(p0.play);//[ 1, 2, 3, 4, 90 ]

const p1 = Object.create(parent);
console.log(p1.name);//读心悦
console.log(p1.play);//[ 1, 2, 3, 4, 90 ]

console.log(p0.play === p1.play); // true
```
Object.create()实现继承，会有一个缺点，那就是，有一些实例的应用类型属性指向相同的内存，正如以上代码中的p0和p1的play就是指向相同的内存，当p0的play发生改变的时候，p1的play也会跟着更新。这就存在篡改的可能了。


# 第五种方式：寄生式继承
在原型式继承的基础上，增强它的浅拷贝能力，添加一些方法，这就是寄生式继承。
```
const parent1 = {
    name:"duxinyue",
    play:[1,2,3],
    getName:function(){
        return  this.name;
    }
}

function clone(original){
    const clone = Object.create(original);
    clone.getPlay = function(){
        return this.play;
    }

    return clone;
}

const p2 = clone(parent1);
const p3 = clone(parent1);
p2.play.push(100)
console.log(p2.getName()); // duxinyue
console.log(p2.getPlay()); // [ 1, 2, 3, 100 ]
console.log(p3.play);//[ 1, 2, 3, 100 ]
```

# 寄生组合继承

```
function clone(parent,child){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function Parent5(){
    this.name = 'duxinyue';
    this.play = [1,2,3];
}

Parent5.prototype.getName = function(){
    return this.name;
}

function Child5(){
    Parent5.call(this);
    return type = "child5";
}

clone(Parent5,Child5);
Child5.prototype.getPlay = function(){
    return this.play;
}

let person1 = new Child5();
let person2 = new Child5();
person2.name = "kkk"
console.log(person1);// { name: 'duxinyue', play: [ 1, 2, 3 ] }
console.log(person2); //  { name: 'kkk', play: [ 1, 2, 3 ] }
```
