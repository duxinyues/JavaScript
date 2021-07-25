/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-07-25 17:32:16
 * @LastEditTime: 2021-07-25 17:39:37
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: JavaScript常见的工具类
 * @FilePath: \JavaScript\utils.js
 * 
 */

export const operationObj = {
    getParam(args) {
        return Array.prototype.concat.apply([], args)
    }
}  