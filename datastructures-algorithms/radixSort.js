/**
 * 基数排序
 */

function radixSort(arr, radixBase = 10) {
    if (arr.length < 2) {
        return arr;
    }

    const minValue = findMinValue(arr);
    const maxValue = findMaxValue(arr);

    let significantDigit = 1;
    while ((maxValue - minValue) / significantDigit >= 1) {
        arr = countSortForRadix(arr, radixBase, significantDigit, minValue);
        significantDigit *= radixBase;
    }

    return arr;
}

// 有效位【基数】排序
function countSortForRadix(arr, radixBase, significantDigit, minValue) {
    let bucketsIndex;
    const buckets = [];
    const aux = [];
    for (let index = 0; index < radixBase; index++) {
        buckets[index] = 0;
    }

    for (let index = 0; index < arr.length; index++) {
        bucketsIndex = Math.floor(((arr[index] - minValue) / significantDigit) % radixBase);
        buckets[bucketsIndex]++;
    }

    for (let i = 1; i < radixBase; i++) {
        buckets[i] += buckets[i - 1]
    }

    for (let index = arr.length - 1; index >= 0; index--) {
        bucketsIndex = Math.floor(((arr[index] - minValue) / significantDigit) % radixBase);
        aux[--buckets[bucketsIndex]] = arr[index];
    }

    for (let index = 0; index < arr.length; index++) {
        arr[index] = aux[index];
    }


    return arr
}

function findMaxValue(array) {
    let max = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index] > max) {
            max = array[index]
        }
    }
    return max;
}

function findMinValue(array) {
    let min = array[0];
    for (let index = 0; index < array.length; index++) {
        if (array[index] < min) {
            min = array[index]
        }
    }
    return min;
}


console.log(radixSort([324,32,0,21,6,343,256,23,10]))