/**
 * 深浅拷贝
 */

// 浅拷贝：需要自己创建一个新的对象来接受要重新复制或者引用的对象。如果对象属性是基本数据类型，那么就是复制基本类型的值给新对象；如果对象属性是引用类型，那么就是复制内存中的地址，要是其中一个对象改变了内存中的地址，那也会影响到另一个对象。

 // Object.assign()

let obj = {};

let obj2 = {
    name:"duxin"
};

Object.assign(obj,obj2);

console.log(obj); //{ name: 'duxin' }

/**
 * 1、Object.assign不会拷贝对象的继承属性；
 * 2、Object.assign不会拷贝对象的不可枚举属性；
 * 3、Object.assign拷贝Symbol类型的属性。
 * 
 * 
 * Object.assign循环遍历原来对象的属性，通过复制的方式把它的属性值赋值给目标对象的相应属性。
 */

