//返回一个继承自原型对象p的属性的新对象
function createObj(p) {
    if (p == null) throw TypeError();
    // p是一个对象，但不能是null
    if (Object.create)
        // 如果Object.create（）存在
        return Object.create(p);
    // 直接使用它
    var t = typeof p;
    // 否则进行进一步检测
    if (t !== "object" && t !== "function") throw TypeError();

    function f() { };
    // 定义一个空构造函数
    f.prototype = p;
    //将其原型属性设置为p
    return new f();                        
    //使用f（）创建p的继承对象
}