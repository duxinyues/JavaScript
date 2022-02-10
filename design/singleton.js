class Singleton {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }
    getName() { return this.name; }
    static getInstance(name) {

        if (!this.instance) {
            console.log("==", this.instance)
            this.instance = new Singleton(name);
        }

        return this.instance;
    }
}

console.log(Singleton.getInstance("duXin")) //  { name: 'duXin', instance: null }
console.log(Singleton.getInstance("duXin0"))// { name: 'duXin', instance: null }

// 把变量封装在闭包中
let user = (function () {
    let _name = 'duXin';
    return {
        getUserName: () => {
            return _name
        }
    }
})()

console.log(user.getUserName())