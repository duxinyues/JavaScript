/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-07-03 12:38:21
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-03 12:42:38
 * @FilePath: \JavaScript\algorithms\create.js
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
export default function create(prototype, properties) {
    prototype = prototype === null ? null : Object(prototype);
    const result = Object.create(prototype);
    return properties == null ? result : Object.assign(result, properties);
}

console.log(create({name:"dsv",age:"5435"}))