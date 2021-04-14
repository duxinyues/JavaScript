let str = {
    age: 10,
    name: "duxin"
};

let str1 = str;
console.log(str.name); // 打印是  duxin

str1.name = "qingzhuyue";
console.log(str.name); // 打印是  qingzhuyue
console.log(str1.name);// 打印是  qingzhuyue

console.log("=============================================")

let obj = {
    name: "duxin111",
    age: 10
};

function change(o) {
    o.age = 24;
    o = {
        name: "qingzhuyue222",
        age: 27
    }

    return o;
}

let obj1 = change(obj)
console.log("obj==", obj);
console.log("obj1==", obj1);

console.log("---------------------------------------------");

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


console.log("---000---0000---00--0-23r-34-34-4-4-4-4-4-4----");


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