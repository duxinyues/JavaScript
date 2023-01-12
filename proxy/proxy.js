const proxy_get = new Proxy({ name: "duXin", count: 90 }, {
    // get: () => {
    //     return 100
    // },
    set:()=>{
        name:"234"
    }
})

console.log(proxy_get.name)



// const proxy_set = new Proxy({}, {
//     set: function (target, prop, value, receiver) {
//         target[prop] = value;
//         console.log('property set: ' + prop + ' = ' + value);
//         return true;
//     }
// })

// console.log("======proxy_set=======")
// console.log('name' in proxy_set); // false
// proxy_set.name = 'duXin'; // property set: name = duXin

// console.log('name' in proxy_set); // true

// console.log("======proxy_has=======")
// const targetObj = {
//     _secret: 'easily scared',
//     eyeCount: 4
// };
// const proxy_has = new Proxy(targetObj, {
//     has: (target, key) => {
//         console.log("key==", key)
//         if (key.includes('_')) {
//             return false;
//         }
//         return key in target;
//     }
// })

// console.log('eyeCount' in targetObj); // true
// console.log('_secret' in proxy_has); // false

// console.log("======proxy_construct=======")


// function proxy_construct_obj(disposition) {
//     this.disposition = disposition;
// }
// const proxyConstruct = new Proxy(proxy_construct_obj, {
//     construct: function (target, args) {
//         return new target(...args);
//     }
// })

// console.log(new proxyConstruct("duXinYue").disposition)

// console.log("======proxy_apply=======")

// function sum(a, b) {
//     return a + b;
// }

// const proxy_apply = new Proxy(sum, {
//     apply: (target, thisArg, argumentsList) => {
//         console.log("target", target, thisArg, argumentsList)
//         return target(argumentsList[0], argumentsList[1]) * 10;
//     }
// })

// console.log(proxy_apply(1, 2))

// console.log("======proxy_defineProperty=======")
// var desc = { configurable: true, enumerable: true, value: 10 };
// var defineProperty = new Proxy(desc, {
//     defineProperty: function (target, prop, descriptor) {
//         console.log('called: ' + prop);
//         Reflect.defineProperty(target, prop, descriptor);
//     }
// });

// defineProperty.value = "908"
// console.log("obj", defineProperty); // { configurable: true, enumerable: true, value: 10, name: '908' }


// console.log("======proxy_delete=======")
// var p = new Proxy({}, {
//     deleteProperty: function (target, prop) {
//         console.log('called: ' + prop);
//         return true;
//     }
// });

// delete p.a; // "called: a"

// console.log(p)