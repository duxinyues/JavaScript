const set = new Set([1, 2, 3, 4, 5, 6, 7, 9])
console.log(Array.from(set.keys()))
console.log(Array.from(set.values()))
console.log(Array.from(set.entries()))

console.log("===========WeakSet==========")
const arr = [[[1,2],[5,0]]]
const weakSet = new WeakSet(arr);


console.log("===========WeakSet==========")