/**
 * 随机算法
 * @param {*} array 
 */

import {
    swap
} from "../utils/index.js"

function shuffle(array) {
    for (let index = 0; index < array.length; index++) {
        const randomIndex = Math.floor(Math.random() * (index + 1))
        swap(array, index, randomIndex)
    }

    return array;
}

console.log(shuffle([2,354,4,6.5,8]))