import {
    swap,
    defaultCompare
} from "../utils/index.js";

export function quickSort(array, compareFn = defaultCompare) {
    // left指向数组首位，right指向数组末位
    return quick(array, 0, array.length - 1, compareFn)
}

function quick(array, left, right, compareFn) {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right, compareFn);
        if (left < index - 1) {
            quick(array, left, index - 1, compareFn);
        }

        if (index < right) {
            quick(array, index, right, compareFn)
        }
    }
    return array
}

// 划分
function partition(array, left, right, compareFn) {
    const pivot = array[Math.floor(right + left) / 2];
    let i = left;
    let j = right;
    while (i <= j) {
        while (compareFn(array[i], pivot) === -1) {
            i++;
        }
        while (compareFn(array[j], pivot) === 1) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    return i
}

const arr = [9, 8, 7, 6, 4];

console.log(quickSort(arr))