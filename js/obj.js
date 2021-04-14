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
const str = ["duxin", "90"]
const str1 = str.join(",");
console.log(str1)

const book = {};
Object.defineProperties(book, {
    _year: {
        writable: true,
        value: 2021
    },

    edition: {
        writable: true,
        value: 1
    },
    year: {
        get: function () {
            return this._year
        },
        set: function (newValue) {
            if (newValue > 2021) {
                this._year = newValue;
                this.edition += newValue - 2021;
            }
        }
    }
})

const  descriptor = Object.getOwnPropertyDescriptor(book,"edition");
console.log(descriptor.value)