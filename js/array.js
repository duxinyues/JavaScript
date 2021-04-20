const arr = new Array(10, 2, 1, 2, 3);
console.log(arr);

console.log(Array.of("90")); // [ '90' ]
console.log(Array.of(9.00));//[ 9 ]

const obj = { 0: "a", 1: "b", 2: "c", length: 3 }
const arr1 = Array.from(obj, (value) => {
    return value.repeat(3)
}, obj)


console.log(arr1);//[ 'aaa', 'bbb', 'ccc' ]


function func(name, age, height) {
    console.log(arguments);//[Arguments] { '0': 'duxin', '1': 18, '2': 168 }
    const arr = [...arguments]
    console.log(arr); // [ 'duxin', 18, 168 ]
    const arr1 = Array.from(arguments);
    console.log(arr1);//[ 'duxin', 18, 168 ]
}

func("duxin", 18, 168)

// 递归实现
const arr3 = [1, 2, [43, 5, 6, [100, 102, 104]]];

// function  flatten(arr){
//     let result =[];
//     for (let index = 0; index < arr.length; index++) {
//         if(Array.isArray(arr[index])){
//             console.log(arr[index])
//             result = result.concat(flatten(arr[index]));
//         } else{
//             result.push(arr[index])
//         }       
//     }

//     return  result;
// }

// function flatten(arr){
//     return arr.reduce(function(prev,next){
//         return prev.concat(Array.isArray(next)?flatten(next):next)
//     },[])
// }

// function flatten(arr){
//    while(arr.some((item)=>Array.isArray(item))){
//        arr = [].concat(...arr)
//    }

//    return arr
// }

// function flatten(arr){
//    return  arr.toString().split(",");
//  }

// function flatten(arr) {
//     return arr.flat(Infinity)
// }

function flatten(arr) {
    let str = JSON.stringify(arr);
    str = str.replace(/(\[|\])/g,'');
    str = '['+str+']';
    return JSON.parse(str)
}
console.log(flatten(arr3));//[ 1,   2,  43,5,6, 100, 102, 104 ]
