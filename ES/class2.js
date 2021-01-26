class PersonType {
    constructor(name) {
        this.name = name;
    }
    output() {
        console.log(this.name);
    }
    static create(name) {
        return new PersonType(name);
    }
}

const str1 = new PersonType("读心悦");
console.log(str1.create());

const str2 = PersonType.create("青竹心");
console.log(str2.name)