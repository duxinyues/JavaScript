//1.获取轮播数据列表

function getBannerList() {

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            reject('banner')

        }, 300)

    })

}

//2.获取店铺列表

function getStoreList() {

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            reject('store')

        }, 500)

    })

}

//3.获取分类列表

function getCategoryList() {

    return new Promise((resolve, reject) => {

        setTimeout(function () {
            reject("失败了")
            // resolve('category')

        }, 700)

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

initLoad()


//请求某个图片资源

function requestImg() {

    var p = new Promise(function (resolve, reject) {

        var img = new Image();

        img.onload = function () { resolve(img); }

        img.src = 'http://www.baidu.com/img/flexible/logo/pc/result.png';

    });

    return p;

}

//延时函数，用于给请求计时

function timeout() {

    var p = new Promise(function (resolve, reject) {

        setTimeout(function () { reject('图片请求超时'); }, 5000);

    });

    return p;

}

Promise.race([requestImg(), timeout()])

    .then(function (results) {

        console.log(results);

    })

    .catch(function (reason) {

        console.log(reason);

    });
