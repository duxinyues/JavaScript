// 递归
function test(num) {
    console.trace()
    if (num === 0 || num === 1) return 1;
    return num * test(num - 1)
}


function fn(num) {
    if (num < 1) return 0;
    if (num <= 2) return 1;
    return fn(num - 1) + fn(num - 2)
}