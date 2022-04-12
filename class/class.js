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
console.log(text);  // { name: undefined, num: undefined }