const _json = {
   name: "读心悦",
   lat: "",
   age: 28,
   mon: [120, 234, 31, 654, 90],
   test: {
      name: "青竹心"
   },
}
const _json1 = JSON.stringify(_json)
const _json2 = JSON.parse(_json1, function (key, value) {
   if(key=="name"){
      console.log("909090")
   }
})
console.log(_json2); 