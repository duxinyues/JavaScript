/**
 * Decorator 装饰者模式
 * 新功能装饰构造函数
 */

 //车辆构造函数
 function vehicle(vehicleType){
     this.vehicleType = vehicleType || 'car';
     this.model = 'default';
     this.license = "00000-000";
 }

 var test = new vehicle("car");
 console.log(test);

 var truck = new vehicle("truck");

 //添加功能
 truck.setModel = function(modelName){
     this.model = modelName;
 }

 truck.setModel("CAT");


 console.log(truck);
 
 var test1 = new vehicle('car');
 console.log(test1)


 /**
  * 被装饰的对象构造函数
  */

function MacBook(){
    this.cost = function(){return 997;}
    this.screenSize = function(){return 14;}
}

function Memory(macbook){
    var v = macbook.cost();
    macbook.cost = function(){
        return v + 75;
    };
}


function  Engraving(macbook){
    var v = macbook.cost();
    macbook.cost = function(){
        return v + 200;
    };
}

function Insurance(macbook){
    var v = macbook.cost();
    macbook.cost = function(){
        return v + 250;
    }
}

var mb = new MacBook();

Memory(mb);

console.log(mb.cost());

console.log(mb.screenSize());


/**
 * 接口
 */

var reminder = new Interface('List',["summary","placeOrder"]);

var properties = {
    name: "duxin",
    data:"2019/04/11",
    actions:{
        summary:function(){
            return "remember"
        },
        placeOrder: function () {
            return "Ordering "
        }
    }
};

function Todo(config){
    Interface.ensureImplements(config.reminder);
    this.name = config.name;
    this.methods =config.actions;
}

//Todo实例
var todoItem = Todo(properties);

console.log(totItem.methods.summary())
