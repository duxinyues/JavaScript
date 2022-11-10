/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2022-03-07 22:03:41
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2022-11-08 19:43:25
 * @FilePath: \JavaScript\promise\index.js
 * @Description: 
 * Copyright (c) 2022 by duxinyues email: yongyuan253015@gmail.com, All Rights Reserved.
 */
const promise = new Promise((resolve, rejected) => {
    resolve(1);
})

const p1 = new Promise((resolve, reject) => {
}).then(res => res).catch(err => err)

const p2 = new Promise((resolve, reject) => {
    reject("失败了")
}).then(res => res).catch(err => err)

// const p = Promise.all([p1, p2]);
// p.then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })
// [ 'success',  Error: 报错 ]

// const race = Promise.race([p1, p2]);
// race.then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })

//1.获取轮播数据列表

function getBannerList() {
    return new Promise((resolve, reject) => {
        reject('banner')
    })
}

//2.获取店铺列表

function getStoreList() {
    return new Promise((resolve, reject) => {
        reject('store')
    })
}

//3.获取分类列表

function getCategoryList() {
    return new Promise((resolve, reject) => {
        reject("失败了")
    })
}

function initLoad() {

    Promise.any([getBannerList(), getStoreList(), getCategoryList()])

        .then(res => {

            console.log(res)

        }).catch(err => {

            console.log(err)

        })

}
initLoad(); // [AggregateError: All promises were rejected]
