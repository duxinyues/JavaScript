// 寄生组合继承
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
// 寄生式继承
return;
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

// 原型式继承
return ;
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

// 组合继承
return;
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
return;
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

// 原型链继承
return;
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

