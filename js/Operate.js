/**
 * 链模式
 * 元素获取的模式
 * @param  selector 选择符
 * @param context  上下文
 */

var Dom = function(selector,context){
    return new Dom.fn.init(selector,context)
}

Dom.fn = Dom.prototype = {
    constructor:Dom,
    init:function(selector,context){
        //获取元素长度
        this.length = 0;

        context = context || document;
        //若是ID选择符，按位非把-1转化为0，，布尔值false
        if (~selector.indexOf("#")) {
            this[0] = document.getElementById(selector.slice(1));
            this.length = 1;
        }else{
            //是元素名称
            var doms = context.getElementsByTagName(selector);
            var i = 0;
            var len = doms.length;
            for(;i<len;i++){
                this[i] = doms[i];
            }
            this.length = len;
        }
        this.context = context;
        this.selector = selector;
        return this;
    }
}

/**
 * 对象拓展
 */
Dom.extend = Dom.fn.extend = function(){
    //从第二参数开始拓展
    var i =1;
    var len = arguments.length;
    var target = arguments[0];
    var j;
    //只传递 一个参数
    if (i == len) {
        target = this;
        i--;
    }

    for(;i<len;i++){
        for(j in arguments[i]){
            target[j] = arguments[i][j];
        }
    }

    return target

}

Dom.fn.extend({
    //添加事件
    on:(function(){
        if (document.addEventListener) {
            return function(type,fn){
                var i = this.length - 1;
                for(;i>=0;i--){
                    this[i].addEventListener(type,fn,false);
                }
                return this;
            }
        }else if(document.attachEvent){ //IE浏览器的DOM2级事件
            return function(type,fn){
                var  i = this.length - 1 ;
                for(; i>=0;i--){
                    this[i].addEvent("on"+type,fn);
                }
                return this;
            }
        }else{
            return function(type,fn){
                var i = this.length - 1;
                for(;i>=0;i--){
                    this[i]['on'+type] = fn;
                }
                return this;
            }
        }
    })()
})

Dom.extend({
    //把分割线转化为驼峰形式
    camelClass:function(str){
        return str.replace(/\-(\w)/g,function(all,letter){
            return letter.toUpperCase();
        })
    }
});

Dom.extend({
    css:function(){
        var arg = arguments;
        var len = arg.length;
        if (this.length < 1) {
            return this;
        }

        if (len === 1) {
            if (typeof arg[0] ==="string") {
                if (this[0].currentStyle) {
                    return this[0].currentStyle[name];
                }else{
                    return getComputedStyle(this[0],false)[name];
                }
            }else if(typeof arg[0] === "object"){ //设置多个样式  
                for(var i in arg[0]){
                    for(var j = this.length-1;j>=0;j--){
                        this[j].style[Dom.camelClass(i)] == arg[0][i];
                    }
                }
            }
        }else if(len === 2){ //两个参数设置一个参数
            for(var j = this.length-1;j>=0;j--){
                this[j].style[Dom.camelClass(arg[0])] = arg[1]
            }
        }
        return this;
    }
})

/**
 * 获取、设置CSS样式，传递一个参数。如果参数是字符串就返回第一个元素的CSS样式值，如果是对象，那么就为每一个元素设置多个样式；如果传递两个参数，就为每一个元素设置样式
 */
Dom.fn.extend({
    attr:function(){
        var arg = arguments;
        var len = arg.length;
         if (this.length < 1) {
             return this;
         }
         if (len === 1) {
             if (typeof arg[0] === "string") {
                 return this[0].getAttribute(arg[0]);
             }else if(typeof  arg[0] === "object"){
                 for(var i in arg[0]){
                     for(var j = this.length - 1 ;j>=0;j--){
                         this[j].setAttribute(i,arg[0][i]);
                     }
                 }
             }
         }else if(len === 2){
             //两个参数就设置每个元素的单个样式
             for(var j = this.length-1;j>=0;j--){
                 this[j].setAttribute(arg[0],arg[1]);
             }
         }
         return this;
    }
});

/**
 * 获取元素属性
 * 只传递一个参数，，如果参数是字符串就返回第一个元素属性。
 * 如果参数是对象，设置每个元素多个属性值；
 * 传递两个参数，第一个参数为属性名，第二个参数为属性值，设置每个元素的属性
 */
Dom.fn.extend({
   //获取、设置元素的内容
   html:function(){
       var arg = arguments;
       var len = arg.length;
       //没有参数就获取第一个元素的内容
       if (len === 0) {
           return this[0] && this[0].innerHTML;
       }else{
           for(var i = this.length-1;i>=0;i--){
               this[i].innerHTML = arg[0];
           }
       }
       return this;
   } 
})