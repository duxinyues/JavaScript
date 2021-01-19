var objArr = [
    {
        name: "读心",
        age: 29
    },
    {
        name: "读心",
        age: 29
    },
    {
        name: "qingzhuyue",
        age: 24
    }, {
        name: "读心悦",
        age: 20,
        borth: "1994-11-25"
    }, {
        name: "青竹心",
        age: 18,
        mon: 90
    },
];

var obj = {};
objArr = objArr.reduce(function (item, next) {

    obj[next.id] ? '' : obj[next.id] = true && item.push(next);

    return item;

}, []);

console.log(objArr)