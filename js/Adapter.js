/**
 * 适配异类框架
 */

 //自定义框架
 var D  = D || {};

 D.getID = function(id){
     return  document.getElementById(id);
 }

//  //在引入JQuery替换D代码库
//  D.getID = function(id){
//      return  $(id).get(0)
//  }


 //给元素绑定事件
 D.on = function(id,type,fn){
     //传递参数是字符串就以id处理，否则以元素对象处理

     var dom = typeof id === 'string' ? this.getID(id) : id;

     //DOM2级添加事件
     if (dom.addEventListener) {
         dom.addEventListener(type,fn,false);
     }else if (dom.attachEvent) {
         dom.attachEvent('on'+type,fn);
     }else{
         dom['on'+type] = fn;
     }
 }

 /**
  * 参数适配器,当函数需要传入多个参数时，
  * 通常是以一个参数对象的方式传入
  */
  function doSomeThing(obj){
      var _adapter = {
          name:'读心',
          title:"设计模式",
          age:25,
          color:"blue",
          size:50,
          prize:25
      };
      for(var i in _adapter){
          _adapter[i] = obj[i] || _adapter[i]
      }
  }

  /**
   * 数据适配
   */

var arr = ['javascript','book','前端编程语言','2019-4-10'];

//把arr的数据适配成对象的形式，如：
function arrToObjAdapter(arr){
    return{
        name:arr[0],
        type:arr[1],
        title:arr[2],
        data:arr[3]
    }
}

/**
 * 服务器端数据适配
 */

 function ajaxAdapter(data) {
     //处理并且返回新的数据
     return [data['key1'],data['key2']]
 }

 $.ajax({
     url:"",
     success:function(data,status){
         if (data) {
             //使用适配后的数据（返回的对象）
             doSomeThing(ajaxAdapter(data))
         }
     }
 })