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
    constructor() {
        super();
        console.log(super.getInfo()) //{ name: undefined, num: undefined }
    }
}

const text = new Children('duXin', 90, 12)
console.log(text.getInfo());  // { name: undefined, num: undefined }