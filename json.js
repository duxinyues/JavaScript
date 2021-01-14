const  _json = {
   name:"duxin",
   age:28
}
// JSON.parse(_json)
 const _json1 =  JSON.stringify(_json,["name"])
console.log(_json);

console.log(_json1)