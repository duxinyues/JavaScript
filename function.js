/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-10-31 16:20:36
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-10-31 16:23:54
 * @FilePath: \JavaScript\function.js
 * @Description: ()()
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
(function(name){
    console.log(name,this)
})("duxin")


const obj = {
    test:function(){
        console.log(this)
    }
}

obj.test()