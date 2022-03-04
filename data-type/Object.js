const userInfo = {
    count: 100,
    num: null,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. ${this.count},${this.num}-${this.age}`);
    }
}

const me = Object.create(userInfo);
me.name = "duxin";
me.age = 28;
console.log(me.printIntroduction())

console.log('================')

const targetObj = Object.assign({}, userInfo)
console.log("targetObj", targetObj);

console.log('================')

Object.defineProperties(targetObj, {
    'useNames': {
        value: '9000000'
    }
})
Object.defineProperty(targetObj, 'property1', {
    value: 42,
    writable: false
});
console.log(targetObj.property1)

console.log('============>>>>>>>')
for (const [key, value] of Object.entries(targetObj)) {
    console.log(key,value)
}

console.log(Object.fromEntries(Object.entries(targetObj)))

console.log(Object.getOwnPropertyDescriptors(targetObj))

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}