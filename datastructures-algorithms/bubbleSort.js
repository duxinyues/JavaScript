import {
    defaultCompare
} from "../utils/index.js";

function bubbleSort(array, compareFn = defaultCompare) {
    for (let index = 0; index < array.length; index++) {
        for (let key = 0; key < array.length - 1 - index; key++) {
            if (compareFn(array[key], array[key + 1]) === 1) {
                swap(array, key, key + 1)
            }
        }
    }
    return array;
}

function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}
console.log(bubbleSort([123, 0, 2, 1, 3]))