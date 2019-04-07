//原型继承
function inheritObject(o) {
    function F() { }
    F.prototype = o;
    return new F();
}



/**
 * 寄生式继承
 * 寄生式继承就是对原型式继承的封装，在封装过程中对继承的对象进行拓展。
 */
//
var bookA = {
    name: "js",
    alikeBook: ['html', 'css']
}
function createBook(obj) {
    //通过原型继承的方式来创建新的对象
    var o = new inheritObject(obj);

    //拓展新对象
    o.getName = function () {
        console.log(name)
    }
    return o;
}

/**
 * 寄生组合式继承
 * 终极继承者
 * 参数  subClass 子类
 * 参数 superClass 父类
 */

 function inheritPrototype(subClass,superClass){
        
        var p = inheritObject(superClass.prototype);

        //防止在重写子类原型导致子类的constructor属性被修改
        p.constructor = subClass;

        //设置子类原型
        subClass.prototype = p;
 };

 /**
  * 类似的多继承
  * 单继承 属性复制
  * 浅复制过程，只能复制值类型的属性，对于引用类型就无能为力。
  */

  var extend = function(target,source){
      //遍历源对象中的属性
      for(var property in source){
          target[property] = source[property];
      }
      return target;
  };

  /**
   * 多继承 属性复制
   * 把传入的多个对象属性复制到源对象中，
   */

   var mix = function(){
       var i = 1,
           len = arguments.length,
           target = arguments[0],
           arg;
        
           //遍历被继承的对象
           for(;i < len;i++){
               //缓存当前的对象
               arg = arguments[i];

               //遍历被继承对象的属性
               for(var property in arg){
                   target[property] = arg[property];
               }
           }
        return  target
   };

   Object.prototype.mix = function(){
       var i = 0 ,
           len = arguments.length,
           arg;
        for(;i<len;i++){
            for(var property in arg){
                this[property] = arg[property]
            }
        }
   }
