import {
    defaultCompare,
    swap
} from "../utils/index.js";

function selectionSort(array, compareFn = defaultCompare) {
    let indexMin;
    for (let i = 0; i < array.length - 1; i++) {
        indexMin = i
        for (let index = i; index < array.length; index++) {
            if (compareFn(array[indexMin], array[index]) === 1) {
                indexMin = index
            }
        }
        if (i !== indexMin) {
            swap(array, i, indexMin)
        }
    }

    return array;
}

const arr = [5,4,3,2,1];
console.log(selectionSort(arr))