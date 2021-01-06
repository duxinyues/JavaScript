function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    this.sayName = function () {
        console.log(this.name)
    }
};


var person1 = new Person("读心悦", 30, "前端开发")
person1.sayName()
console.log(person1.job)

// const str = "duxin,duxinyue";
const  str = ["duxin","90"]
const str1 = str.join(",");
console.log(str1)