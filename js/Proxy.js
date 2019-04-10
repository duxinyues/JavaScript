/**
 * jQuery核心中的jQuery.proxy()方法
 */

//把函数绑定到上下文（context）上
var jQuery = {
    proxy:function(fn,context){
        if (typeof context === "string") {
            var tmp = fn[context];
            context = fn;
            fn = tmp;
        }
        if (!jQuery.isFunction(fn)) {
            return undefined;
        }

        //模拟绑定
        var args = slice.call(arguments,2);
        var proxy = function(){
            return fn.applay(context,args.context(slice.call(arguments)));
        };

        proxy.guid = fn.guid = fn.guid || proxy.guid || jQuery.guid++;
        return proxy;
    }
}

