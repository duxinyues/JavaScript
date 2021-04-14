const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum0 = 0;

for (let index = 0; index < arr.length; index++) {
    sum0 = sum0 + arr[index];
}
console.log(sum0)
const sum = arr.reduce((pre, cur, index, arr) => {
    // console.log(index);   // 012345678
    // console.log(arr)
    return pre + cur
});
console.log(sum)   // 55


const sum1 = arr.reduceRight((pre, cur, index, arr) => {

    console.log(index)//876543210
    return pre + cur
})

console.log(sum1)