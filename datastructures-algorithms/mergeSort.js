import {
    defaultCompare
} from "../utils/index.js";

function mergeSort(array, compareFn = defaultCompare) {
    if (array.length > 1) {
        const {
            length
        } = array;
        const middle = Math.floor(array.length / 2);
        const left = mergeSort(array.slice(0, middle), compareFn);
        const right = mergeSort(array.slice(middle, length), compareFn);

        array = merge(left, right, compareFn)
    }
    return array;
}

function merge(left, right, compareFn) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        result.push(compareFn(left[i], right[j]) === -1 ? left[i++] : right[j++]);
    }

    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

const arr = [90, 54, 3, 7, 4, 2, 0];
console.log(mergeSort(arr))