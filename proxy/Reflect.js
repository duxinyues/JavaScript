function fn(name){
    console.log("Name:",name)
}
Reflect.apply(fn,undefined,["duxin"]); // Name: duxin