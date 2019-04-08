/**
 * 登陆模块
 */

//  /**
//   * 简单工厂模式
//   */

var PopFactory = function(name){
    switch (name) {
        case 'alert':
            return new LoginAlert();
        case "confirm":
            return new loginFailConfirm();
        case 'prompt':
            return new LoginPrompt();
    }
};



function createPop(type,text){
    //创建一个对象，并进行拓展属性和方法
    var o = new Object();
    o.content = text;
    o.show = function(){
        //显示的方法
    };

    if (type =='alert') {
        //警示框差异部分
    }

    if (type =='prompt') {
        //提示框差异部分
    }

    if (type == 'confirm') {
        //确认框差异部分
    }
    return o;
}

/**
 * 安全模式创建的工厂类
 */

 var Factory = function(type,content){
     if (this instanceof Factory) {
         var s = new this[type](content);
         return s
     }else{
         return new Factory(type,content);
     }
 }

 //在工厂原型中设置创建所有类型数据对象的基类
 Factory.prototype = {
     Java:function(content){

     },
     javascript:function(content){

     },
     php:function(content){

     },
     UI:function(content){
        this.content = content;
        (function(content){
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.border = '1px solid red';
            document.getElementById('container').appendChild(div)
        })(content);
     }
 };


/**
 * 抽象工厂方法
 * 参数subType  子类
 * 参数superType  父类
 */

var VehicleFactory = function(subType,superType){
    //判断抽象工厂中是否有该抽象类
    if (typeof VehicleFactory[superType] === 'function') {
        //缓存类
        function F(){};

        //继承父类属性和方法
        F.prototype = new VehicleFactory[superType]();

        //把子类的constructor指向子类
        subType.constructor = subType;

        //子类继承父类
        subType.prototype = new F();
    }else{
        throw new Error("未创建该抽象类");
    }
}
