console.log(Number(false));   //0

console.log(Number(true));  // 1

console.log(Number(90)); //90

console.log(Number(null)); // 0

console.log(Number(undefined)); // NaN

console.log(Number("string"));  // NaN

console.log(Number("80.999￥")); // NaN

console.log(Number("0x8888")); // 34952 十六进制转换为十进制数字

console.log(Number("6789.90")); //6789.9

console.log(Number("")); // 0

console.log(Number(Symbol));

console.log("===================Boolean========================");

console.log(Boolean(90));// true
console.log(Boolean("duxin"));  // true
console.log(Boolean(undefined)); // false

console.log(Boolean(null)); // false

console.log(Boolean(false)); //false

console.log(Boolean('')); //  false

console.log(Boolean(0));  // false

console.log(Boolean(NaN)); //  false

