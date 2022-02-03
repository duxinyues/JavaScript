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

const form = new Form("duxin",90)

console.log(form.getInfo()) ; // {name:'duxin,num:90}