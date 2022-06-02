/**
 * 桶排序
 */
import {
    insertSort
} from "./insertSort.js";

function bucketSort(array, size = 5) {
    if (array.length < 2) {
        return array;
    }

    const buckets = createBuckets(array, size);

    return sortBuckets(buckets);
}

// 创建桶
const createBuckets = (arr, size) => {
    let minValue = arr[0];
    let maxValue = arr[0];

    arr.forEach((item, key) => {
        if (arr[key] < minValue) {
            minValue = arr[key];
        } else if (arr[key] > maxValue) {
            maxValue = arr[key]
        }
    });
    // 桶的基数
    const bucketCount = Math.floor((maxValue - minValue) / size) + 1;

    const buckets = [];
    for (let index = 0; index < bucketCount; index++) {
        buckets[index] = [];
    }

    arr.forEach((item, index) => {
        const bucketIndex = Math.floor((arr[index] - minValue) / size);
        buckets[bucketIndex].push(arr[index]);
    })

    return buckets
}
// 对桶进行排序
const sortBuckets = (buckets) => {
    const sortArray = [];
    buckets.forEach((item, index) => {
        if (buckets[index] != null) {
            insertSort(buckets[index]);
            sortArray.push(...buckets[index])
        }
    })

    return sortArray
}

console.log(bucketSort([43,65,2,1,678,3,54,0]))