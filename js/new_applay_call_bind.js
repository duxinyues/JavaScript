// return;
// function Func1(){
//     this.name = "qingzhuyue";
//     return "duxinyue"
// }
// const f3 = new Func1();
// console.log(f3);//{ name: 'qingzhuyue' }



// function  Func(){
//     this.name = "duxinyue";
//     return {money:100}
// }

// const f1 = new Func();

// // console.log(f1); // { name: 'duxinyue' }

// const  f2 = Func();
// console.log(f2);//undefined
// console.log(name);//duxinyue
// console.log(f2.name); //'name' of undefined

function _new(ctor,...args){
    if(typeof ctor !== 'function'){
        throw 'ctor must be a function';
    }
    let obj =new Object();
    obj._proto_ = Object.create(ctor.prototype);
    let res = ctor.apply(obj,[...args]);
    let isObject = typeof res ==='object' && res !== null;
    let isFunction = typeof res ==='function';
    return isObject || isFunction? res:obj;
}

function  Func(){
    this.name = "duxinyue";
    return {money:100}
}

const f1 = _new(Func)

console.log(f1); // { money: 100 }