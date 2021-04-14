console.log(null == undefined); // true

console.log("90" == 90); // true


console.log(true == 100); // false

console.log(null == 0); // false

console.log(null == 1); // false
console.log('' == null);  // false

console.log('' == 0); //  true
console.log(true == 1); // true

console.log(false == 0); // true

const a = {
    value: 0,
    valueOf: function () {
        this.value++;
        return this.value
    }
}
console.log("=======================")
console.log(a == 1);//  true


console.log("++++++++++++++++++++++++");
console.log(90+"90");// 9090

console.log(90+"duxinyue"); // 90duxinyue

console.log(90+null);// 90

console.log(90+undefined);//NaN

console.log(90+true); // 91

console.log(90+false); // 90

console.log("==============object================")


const  obj = {
    value:12,
    valueOf(){
        return 20;
    },
    toString(){
        return "30";
    },
    [Symbol.toPrimitive](){
        return  40;
    }
}

console.log(obj+1);