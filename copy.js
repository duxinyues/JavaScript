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


// 扩展运算符方式：在构造对象的同时完成了浅拷贝的功能，如果属性都是基本类型的值，那么使用运算符进行浅拷贝就很方便

let str = {name:"duxinyue",age:19};
let str1 = {...str};
console.log("扩展运算符浅拷贝==",str1);

// concat，拷贝数组，也就是之前理解的连接两个数组了

// slice，拷贝数组。slice也是比较局限性的，因为它只针对数组类型，只能拷贝一层对象



// 浅拷贝的封装
/**
 * 要求：1、对基础类型做一个最基本的拷贝
 * 2、对引用类型设置一个新的存储，并且拷贝一层对象的属性
 * @param {*} target 
 * @returns 
 */

const shallowClone =(target)=>{
    if(typeof target === 'object' && target!== null){
        const  cloneTarget = Array.isArray(target) ? [] : {};
        for(let prop in target){
            if(target.hasOwnProperty(prop)){
                cloneTarget[prop] = target[prop]
            }
        }

        return  cloneTarget;
    }else{
        return target
    }
}

console.log("很浅的拷贝==",shallowClone(str));


// 那怎么理解深拷贝呢
/**
 * 首先是把对象从内存中完整的拷贝给另一个目标对象，并且在内存中重新开出一个地址来存放目标对象，
 * 且目标对象的改动并没有影响到原对象
 * 
 * 在内存中这两个对象是相互独立，互不影响的。
 */

// 常见的深拷贝方法：

// 1、JSON.stringify()
/**
 * 1、拷贝对象的值含有undefined、Symbol类型的，通过JSON.stringify()序列化后的字符串中该键值会消失；
 * 2、拷贝Date引用类型会变成字符串；
 * 3、不能拷贝无法枚举的属性；
 * 4、不能拷贝对象的原型链；
 * 5、拷贝RegExp引用类型会变成空对象；
 * 6、拷贝对象中含有NaN、Infinity，-Infinity，JSON序列化后该值变为null
 * 7、不能拷贝对象中的循环应用
 */
