/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-07-25 17:32:16
 * @LastEditTime: 2021-08-23 21:16:30
 * @LastEditors: Please set LastEditors
 * @Description: JavaScript常见的工具类
 * @FilePath: \JavaScript\utils.js
 * 
 */

/**
 * 运算中的精度处理
 */
const operationObj = {
    // 处理传入参数，都统一处理为数组
    getParam(args) {
        return Array.prototype.concat.apply([], args)
    },

    // 获取每个数的乘数因子
    multiplier(x) {
        let parts = x.toString().split(".");
        return parts.length < 2 ? 1 : Math.pow(10, parts[1].length)
    },

    // 多个数中的最大乘数因子
    correctionFactor() {
        let args = Array.prototype.slice.call(arguments);
        let argArr = this.getParam(args);
        return argArr.reduce((accum, next) => {
            let num = this.multiplier(next);
            return Math.max(accum, num)
        }, 1)
    },
    /**
     * 加法运算
     * @param  {...any} args 
     */
    add(...args) {
        let calArr = this.getParam(args);
        let corrFactor = this.correctionFactor(calArr);
        let sum = calArr.reduce((accum, curr) => {
            return accum + Math.round(curr * corrFactor);
        }, 0);

        return sum / corrFactor;
    },
    /**
     * 减法
     * @param  {...any} args 
     */
    subtract(...args) {
        let calArr = this.getParam(args);
        let corrFactor = this.correctionFactor(calArr);
        let diff = calArr.reduce((accum, curr, curIndex) => {
            if (curIndex === 1) {
                return Math.round(accum * corrFactor - Math.round(curr * corrFactor));
            }
            return Math.round(accum) - Math.round(curr * corrFactor)
        })

        return diff / corrFactor;
    },
    /**
     * 乘法
     * @param  {...any} args 
     */
    multiply(...args) {
        let calArr = this.getParam(args);
        let corrFactor = this.correctionFactor(calArr);
        calArr = calArr.map((item) => {
            return item * corrFactor;
        });

        let multi = calArr.reduce((accum, curr) => {
            return Math.round(accum) * Math.round(curr);
        }, 1);

        return multi / Math.pow(corrFactor, calArr.length)
    },

    /**
     * 除法
     * @param  {...any} args 
     */
    divied(...args) {
        let calArr = this.getParam(args);
        let quotient = calArr.reduce((accum, curr) => {
            let corrFactor = this.correctionFactor(accum, curr);
            return Math.round(accum * corrFactor) / Math.round(curr * corrFactor)
        });
        return quotient;
    }
}
console.log(operationObj.add(0.1, 0.2))
console.log(0.1 + 0.2);

/**
 * 判断两个数是否相等
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
export function defaultEquals(a, b) {
    return a === b;
}

