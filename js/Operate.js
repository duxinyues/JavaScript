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