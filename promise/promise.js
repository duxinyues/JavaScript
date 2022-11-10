/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-11-08 19:43:40
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-11-08 20:33:33
 * @FilePath: \JavaScript\promise\promise.js
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
const promise = new Promise((resolve, reject) => {
    resolve(20)
})
promise.then(21)
    .then(res => {
        console.log('then', res)
    })
    .then(Promise.resolve(34))
    .catch(err => {
        console.log("Error", err)
    })