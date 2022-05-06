function getRandomArray(max, min, length) {
  var arr = []; // 定义一个空数组来存储随机数
  for (let index = 0; index < length; index++) {
    arr.push(Math.floor(Math.random() * (max - min) + min))
  }

  return arr.sort((a, b) => (a - b))  // 排序后返回数组
}


var a = 0;

function foo() {
  if (!a) {
    console.log(!a)
    var a = 2;
  }

  console.log(a)
}

foo();