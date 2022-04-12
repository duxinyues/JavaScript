function Name(name) {
  this.name = name;
}

Name.prototype.toString = function () {
  return this.name;
}


const newName = new Name("读心");

class Logger {

  constructor() {
    this.printName = (name) => {
      this.print(name)
    }
  }
  printName(name) {
    this.print(name)
  }

  print(text) {
    console.log(text)
  }
}

const logger = new Logger();
console.log(Logger.name); // Logger