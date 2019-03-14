/**
 * 用来枚举属性的对象工具函数
 * 把P的可枚举属性复制到O 中，并且返回 O
 * 若P和O含有同名的属性，则会覆盖O中的属性
 * 这个函数并不处理getter和setter以及复制属性
 */

 function extend(o,p){
     for(const prop in p){
         o[prop] = p[prop];
     }
     return o
 }

 /**
  * 用来枚举属性的对象工具函数
  * 把P的可枚举属性复制到O 中，并且返回 O
  * 若P和O含有同名的属性，O 中的属性不会受到影响
  * 这个函数并不处理getter和setter以及复制属性
  */
 
  function merge(o,p){
      for(const prop in o){
          if(o.hasOwnProperty[prop]){
              continue;
              o[prop] = p[prop];
          }
          return o
      }
  }

  /**
   * 若O中的属性在P中没有同名的属性，则从O中删除该属性
   * 返回O
   */

   function restrict(o,p){
       for(const prop in o){
           if(!(prop in p)){
               delete o[prop]
           }
       }
       return o;
   }

   /**
    * 若O中的属性在P中存在同名属性，那么从O中删除该属性
    * 返回O
    */

    function subtract(o,p){
        for(const prop in p){
            delete o[prop]
        }
        return o
    }
    /**
     * 返回一个新对象，该对象同时拥有O和P的属性
     * 若出现同名属性，则使用P中的属性
     */
    function union(o,p){
        return extend(extend({},o),p);
    }

    /**
     * 返回一个新对象，该对象拥有同时出现在O和P的属性（交集）
     */

    function intersection(o,p){
        return restrict(extend({},o),p);
    }

    /**
     * 返回一个数组，这个数组包含的是O中可枚举发的自有属性的名字
     */
    function keys(o){
        //参数必须是对象
        if(typeof o !== "object"){
            throw TypeError();
        }

        var result = [];
        //遍历所有可枚举的属性
        for(const prop in 0){
            //判断是否有自有属性，将自有属性名添加到数组中
            if(o.hasOwnProperty(prop)){
                result.push(prop);
            }
            return result;
        }
    }

    /**
     * 返回传递给它的人一对象的类属性（ 对象类型信息）的方法
     */
    function  classof(o){
        if (o === null) {
            return "Null";
        }
        if (o === undefined) {
            return "Undefined";
        }
        return Object.prototype.toString.call(o).slice(8,-1);
    }