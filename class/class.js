class Form {
    pubilcCount = 10; // 原型属性
    constructor(name, num) {
        // 实例属性
        this.name = name;
        this.num = num;
    }

    getInfo() {
        return {
            name: this.name,
            num: this.num
        }
    }
}


class Children extends Form {
    constructor(name, num) {
        // 继承父类的name、num属性
        super(name, num);
    }
}

const text = new Children('duXin', 90);
text.count = 100;

class Obj {
    constructor() {
        this.name = null;
        this.age = 1;
    }

    getInfo(param) {
        return {
            name : param.name,
            age: param.age
        }
    }
}

const createUser =new Obj().getInfo({ name: '读心', age: 18 })
const createUser1 =new Obj().getInfo({ name: '读心1', age: 181 })
createUser1.name="907"
console.log(createUser)
console.log(createUser1)