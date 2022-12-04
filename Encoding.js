/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-12-03 21:54:00
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-12-04 17:10:49
 * @FilePath: \JavaScript\Encoding.js
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
const textEncoder = new TextEncoder();
const fooArr = new Uint8Array(3);
const barArr = new Uint8Array(2);
const fooResult = textEncoder.encodeInto('foo', fooArr);
const barResult = textEncoder.encodeInto('bar', barArr);
// console.log(fooArr);     // Uint8Array(3) [102, 111, 111]
// console.log(fooResult); // {read: 3, written: 3}
// console.log(barArr);     // Uint8Array(2) [98, 97]
// console.log(barResult); // {read: 2, written: 2}

const  textDecoder = new TextDecoder();
const encodeText = textEncoder.encode("foo");
const decoderText = textDecoder.decode(encodeText);
console.log("解码：",decoderText)