import {
    defaultCompare
} from "../utils/index.js";

function insertSort(array, compareFn = defaultCompare) {
    let temp;
    for (let index = 1; index < array.length; index++) {
        let key = index;
        temp = array[index];
        while (key > 0 && compareFn(array[key - 1], temp) === 1) {
            array[key] = array[key - 1]
            key--;
        }
        array[key] = temp;
    }

    return array;
}

const arr = [3, 5, 2, 1, 3, 7, 0]
console.log(insertSort(arr))