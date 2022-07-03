/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-06-30 23:52:15
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-07-01 22:42:15
 * @FilePath: \JavaScript\algorithms\add.js
 * @Description: 求和
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
import createMathOperation from "./createMathOperation.js";
const add = createMathOperation((augend, addend) => augend + addend, 0)
console.log(add(0.1,0.2))
const sub = createMathOperation((minuend, reduction) => minuend - reduction, 0);
console.log(sub(908, 8))

const multiplication = createMathOperation((num1, num2) => num1 * num2, 0);
console.log(multiplication("2","3"))