
const map = new Map();
const text = { name: "duxin" }
map.set(text, 90)
map.set(90, 1000)
console.log(map.get(90));// 1000
console.log(map.get(text));// 90

/**
 * Map结构属性和方法
 * 
 * size   Map结构成员总数
 * 
 * set(key, value) ，设置Map的键值，如果key已经存在则更新，否则新增。
 */