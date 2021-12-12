/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-09-13 22:53:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-06 22:14:54
 * @Description: 文件描述
 */
// 深拷贝
const obj = [
    { name: "duxin" },
    { name: "qingzhuxin" },
    { name: "duxin" },
    { name: "qingzhuxin" },
    { name: "duxin" },
    { name: "qingzhuxin" },
    { name: "duxin" },
    { name: "qingzhuxin" },
    { name: "duxin" },
    { name: "qingzhuxin" },
    { name: "duxin" },
    { name: "qingzhuxin" },
    { name: "duxin" },
    { name: "qingzhuxin" }
]
console.log("原数组长度", obj.length);
const objSort = (arr) => {
    arr.forEach((element, index) => {
        if (index === arr.length - 1) return;
        const sliceArr = arr.slice(index)
        sliceArr.map((item) => {
            if (element.name === item.name) {
                const ii = arr.findIndex((items) => items.name === item.name);
                arr.splice(ii, 1);
                arr.splice(index + 1, 0, item);
            }
        })
    });
    console.log(arr)
}
objSort(obj)
