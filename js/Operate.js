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
            for(;i<doms.length;i++){
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
    on:(function(){
        if (document.addEventListener) {
            return function(type,fn){
                var i = this.length - 1;
                for(;i>=0;i--){
                    this[i].addEventListener(type,fn,false);
                }
                return this;
            }
        }else if(document.attachEvent){
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