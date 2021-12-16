/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-12-16 21:30:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-16 21:38:22
 * @Description: 通用的数据类型判断的方法
 */
function getType(obj){
    let type = typeof obj;
    if(type !=='object'){
        return type;
    }

    return  Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/,'$1')
}

console.log(getType([]))