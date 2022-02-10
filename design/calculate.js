let calculate = function (performanceLevel, salary) {
    if (performanceLevel == "S") return salary * 5;
    if (performanceLevel == 'B') return salary * 4;
    if (performanceLevel == "A") return salary * 3
}

console.log(calculate('S', 100))


class performanceA {
    calculate(salary) {
        return salary * 5
    }
}

class performanceB {
    calculate(salary) {
        return salary * 4
    }
}