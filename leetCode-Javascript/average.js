var average = function (salary) {
    let arr = salary.filter(function (item) {
        return item !== Math.max(...salary) && item !== Math.min(...salary)
    })
    let sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    console.log('sss', sum / arr.length)
};