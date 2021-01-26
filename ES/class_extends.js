// 函数继承
function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function () {
    return this.length * this.width;
}


function Square(length) {
    Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        value: Square,
        enumerable: true,
        writable: true,
        configurable: true
    }
});

var square = new Square(3);


console.log(square.getArea());
console.log(square instanceof Square);
console.log(square instanceof Rectangle);




// 类的继承

class Rectangle1 {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    getArea1() {
        return this.length * this.width;
    }
}

class  Square1 extends  Rectangle1{
    constructor(length){
        super(length,length);
    }
}