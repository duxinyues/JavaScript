import {
    defaultCompare
} from "../utils/index.js";
import {
    quickSort
} from './quickSort.js'

function binarySearch(arr, value, compareFn = defaultCompare) {
    const sortArray = quickSort(arr);
    let low = 0;
    let high = sortArray.length - 1;
    while (lesserOrEquals(low, high, compareFn)) {
        const mid = Math.floor((low + high) / 2);
        const element = sortArray[mid];
        if (compareFn(element, value) === -1) {
            low = mid + 1;
        } else if (compareFn(element, value) === 1) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return "DOES_NOT_EXIST";
}

function lesserOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === -1 || comp === 1
}

const arr = [4,3,2,1,6,8,34,43,23,55,54,45,4,23,2];

console.log(binarySearch(arr,90))