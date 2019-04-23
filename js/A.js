/**
 * Author  duxin
 * @by 2019-04-23
 */
~(function(window){
    /**
     * @param name 单体对象A
     * @param selector  选择器或者是页面加载回调函数
     * @param context  查找元素上下文
     */
    var A = function(selector,context){
        if (typeof selector == "function") {
            A(window).on("load",selector);
        }else{
            return new A.fn.init(selector,context)
        }
    }

    A.fn = A.prototype = {
        //强化构造函数
        constructor:A,
        init:function(selector,context){
           if (typeof selector === "object") {
               this[0] =  selector;
               this.length = 1;
               return this;
           }
           this.length = 0;
           context = document.getElementById(context) || document;
           //id
           if (~selector.indexOf("#")) {
               this[0] = document.getElementById(selector.slice(1));
               this.length = 1;
           }else if(~selector.indexOf(".")){ //class
                var doms = [],
                    className = selector.slice(1);
                    if (context.getElementsByClassName) {
                        doms = context.getElementsByClassName(className)
                    }else{
                        doms = context.getElementxByTagName("*")
                    }

                    for(var i =0,len = doms.length;i<len;i++){
                        if (doms[i].className && !!~doms[i].className.indexOf(className)) {
                            this[this.length] = doms[i];
                            this.length++
                        }
                    }
           }else{
               var doms = context.getElementxByTagName(selector),
                    i = 0,
                    len = doms.length;
                for(;i<len;i++){
                    this[i] = doms[i];
                }
                this.length = len;
           }

           this.context = context;
           this.selector = selector;
           return this;
        },
        length:0,
        push:[].push,
        splice:[].splice
    }
    //设置构造函数原型
    A.fn.init.prototype = A.fn;
    /**
     * @param name 对象拓展
     * @param [0] 目标对象
     * @param [1,...]拓展对象
     */
    A.extend = A.fn.extend = function(){
        var i = 1,
            len = arguments.length,
            target = arguments[0],
            j;
        if (i==len) {
            target = this;
            i--;
        }

        for(;i<len;i++){
            for(j in arguments[i]){
                //浅复制
                target[j] = arguments[i][j];
            }
        }
        return target;
    }

    //单体对象A方法拓展
    A.extend({
        /**
         * @name 横线式命名转化为驼峰式命名
         * eg: "test-demo" -> "testDemo"
         */
        camelCase: function(str){
            return str.replace(/\-(\w)/g,function(match,letter){
                return letter.toUpperCase();
            });
        },
        /**
         * @name 清除字符串两边的空白
         * eg:" test " ->"test"
         */
        trim:function(str){
            return str.replace(/^\s+|\s+$/g,'')
        },

        /**
         * @param name  创建一个元素并且包装成A对象
         * @param type  元素类型
         * @param value 元素属性对象
         */
        create:function(type,value){
            var dom = document.createElement(type);
            return A(dom).attr(value)
        },

        /**
         * @name 格式化模板
         * @param str 模板字符串
         * @param data 渲染数据
         */
        formateString:function(str,data){
            var html="";
            if (data instanceof Array) {
                for(var i=0,len=data.length;i<len;i++){
                    html += arguments.callee(str,data[i]);
                }
                return html;
            }else{
                return str.replace(/\{#(\w+)#}/g,function(match,key){
                    return typeof data === "string" ? data:(typeof data[key] === "undefined" ? "":data[key])
                })
            }
        }
    });

    var _on = (function(){
        if (document.addEventListener) {
            return function(dom,type,fn,data){
                dom.addEventListener(type,function(e){
                    fn.call(dom,e,data);
                },false);
            }
        }else if(document.attachEvent){
            return function(dom,type,fn,data){
                dom.attachEvent("on"+type,function(e){
                    fn.call(dom,e,data);
                });
            }
        }else{
            return function(dom,type,fn,data){
                dom["on"+type] = function(e){
                    fn.call(dom,e,data);
                };
            }
        }
    })();

    A.fn.extend({
        on:function(type,fn,data){
            var i = this.length;
            for(;--i>=0;){
                _on(this[i],type,fn,data);
            }
            return this;
        },
        css:function(){
            var arg = arguments,
                len = arg.length;
            if (this.length<1) {
                return this;
            }
            if (len ===1) {
                if (typeof arg[0] === "string") {
                    if (this[0].currentStyle) {
                        return this[0].currentStyle(name)
                    }else{
                        return getComputedStyle(this[0],false)[name];
                    }
                }else if ( typeof arg[0] ==="object") {
                    for(var i in arg[0]){
                        for(var j=this.length-1;j>=0;j--){
                            this[j].style[A.camelCase(i)] = arg[0][i];
                        }
                    }
                }
            }else if(len === 2){
                for(var j = tihs.length-1;j>=0;j--){
                    this[j].style[A.camelCase(arg[0])] = arg[1]
                }
            }
            return this
        },
        attr:function(){
            var arg = arguments,
                len = arg.length;
            if (this.length<1) {
                return this;
            }
            if (len === 1) {
                if (typeof arg[0] === "string") {
                    return this[0].getAttribute(arg[0]);
                }else if(typeof arg[0] ==="object"){
                    for(var i in arg[0]){
                        for(var j = this.length-1;j>=0;j--){
                            this[j].setAttribute(i,arg[0][i]);
                        }
                    }
                }
            }else if(len === 2){
                for(var j =this.length-1;j>=0;j--){
                    this[j].setAttribute(arg[0],arg[1]);
                }
            }
            return this;
        },
        html:function(){
            var arg = arguments,
                len = arg.length;
                if (this.length<1) {
                    return this;
                }
                if (len === 0) {
                    return this[0].innerHTML;
                }else if(len === 1){
                    for(var i = this.length-1;i>=0;i--){
                        this[i].innerHTML = arg[0];
                    }
                }else if(len===2 && arg[1]){
                    for(var i = this.length-1;i>=0;i--){
                        this[i].innerHTML += arg[0];
                    }
                }
            return this;
        },
        /**
         * @name 判断类存在
         * @param val 类名
         */
        hasClass:function(val){
            if (!this[0]) {
                return ;
            }

            var value = A.trim(val);
            return this[0].className && this[0].className.indexOf(value) >= 0 ? true :false;
        },
        /**
         * @name 添加类
         * @param val 类名
         */
        addClass:function(val){
            var value = A.trim(val),
                str = "";
            for(var i=0,len=this.length;i<len;i++){
                str = this[i].className;
                if (!str.indexOf(value)) {
                    this[i].className += ' '+value
                }
            }
            return this;
        },

        /**
         * @name 删除类名
         * @param val 类名
         */
        removeClass:function(val){
            var value = A.trim(val),
                classNameArr,
                result;
            for(var i=0,len=this.length;i<len;i++){
                if (this[i].className && ~this[i].className.indexOf(value)) {
                    classNameArr = this[i].className.split(' ');
                    result = "";
                    for (var j = classNameArr.length - 1; j >= 0; j--) {
                        classNameArr[j] = A.trim(classNameArr[j]);
                        result += classNameArr[j] && classNameArr[j] != value ? "" + classNameArr[j] : '';
                    }
                    this[i].className = result;
                }
            }
            return this;
        },
        /**
         * @name 插入元素
         * @param parent 父元素
         */
        appendTo:function(parent){
            var doms = A(parent);
            if (doms.length) {
                for(var j = this.length -1;j>=0;j--){
                    doms[0].appendChild(this[j]);
                }
            }
        },
    });

    /**
     * 运动框架单体对象
     */
    var Tween= {
        timer:0,
        queen:[],
        interval:16,
        easing:{
            def:function(time,startValue,changeValue,duration){
                return changeValue * time/duration+startValue
            },
            easeOutQuart:function(time,startValue,changeValue,duration){
                return -changeValue*((time=time/duration-1)*time*time*time-1)+startValue;
            }
        },
            //添加运动成员
            add:function(instance){
                this.queen.push(instance);
                this.run()
            },
            clear:function(){
                clearInterval(this.timer);
                this.timer = 0;
            },
            run:function(){
                if (this.timer) {
                    return
                }
                this.clear();
                this.timer = setInterval(this.loop,this.interval);
            },
            /**
             * 循环
             */
            loop:function(){
                if (Tween.queen.length === 0) {
                    Tween.clear();
                    return ;
                }
                var now = +new Date();
                for(var i=Tween.queen.length-1;i>=0;i--){
                    var instance = Tween.queen[i];
                    instance.passed = now - instance.start;
                    if (instance.passed<instance.duration) {
                        Tween.workFn( instance);
                    }else{
                        Tween.endFn(instance);
                    }
                }
            },
            /**
             * 运动方法
             */
            workFn:function(instance){
                instacne.twee = this.easing[instacne.type](instance.passed,instacne.form,instance.to-instance.form,instacne.duration);
                this.exec(instance);
            },
            endFn:function(instance){
                instance.passed = instance.duration;
                instance.tween = instance.to;
                this.exec(instance);
                this.distory(instance)
            },
            exec:function(instance){
                try {
                    //执行当前成员的主函数
                    instance.main(instance.dom);
                } catch (e) { }
            },
            distory:function(instance){
                instance.end();
                this.queen.splice(this.queen.indexOf(instance),1);
                for(var i in instance){
                    delete instance[i];
                }
            },
           
    }
     /**
      * 获取当前成员在运动成员中的位置
      */
     Tween.queen.indexOf = function (){
         var that = this;
         return Tween.queen.indexOf || function(instance){
             for(var i = 0,len=that.length;i<len;i++){
                if (that[i]===instance) {
                    return i;
                }
             }
             return -1;
         }
     }();

     A.fn.extend({
         animate:function(obj){
            var obj = A.extend({
                duration:400,
                type:'def',
                form:0,
                to:0,
                start:+new Date(),
                dom:this,
                main:function(){},
                end:function(){}
            },obj);
            Tween.add(obj)
         }
     });

     A.noConfilct = function(library){
         if (library) {
             window.$ = library;
         }else{
             window.$ = null;
             delete window.$;
         }
         return A;
     }
     window.$ = window.A =A;
})(window)