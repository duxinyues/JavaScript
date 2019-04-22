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

    /**
     * 检测类数组对象
     * 判定O是否是一个类数组对象
     * 字符串和函数有length属性，可以通过typeof检测将其排除
     * 客户端的JavaScript中的DOM文本节点也有length属性，通过O.nodeType != 3 将其排除
     */
    function isArrayLike(o){
        if (o && typeof o === 'object' && isFinite(o.length) && o.length>=0 && o.length === Math.floor(o.length) && o.length < 4294967296) {
            return  true
        }else{
            return false;
        }
    }


Array.join = Array.join || function(a,sep){
    return Array.prototype.join.call(a, sep);
};
Array.slice = Array.slice || function (a, sep){
    return Array.prototype.slice.call(a, sep);
};
Array.map = Array.map || function (a, sep){
    return Array.prototype.map.call(a, sep);
}

/**
 * 模板方法模式
 */

//模板类  提示框data渲染数据
var Alert = function(data){
    if (!data) {
        return;
    }
    //内容
    this.content = data.content;
    //提示面板
    this.panel = document.createElement("div");
    //提示内容组件
    this.contentNode = document.createElement("p");
    //确定按钮组件
    this.confirmBtn = document.createElement("span");
    //关闭按钮组件
    this.closeBtn = document.createElement("b");

    this.panel.className = "alert";
    this.closeBtn.className = "a-close";
    this.confirmBtn.className = "a-confirm";
    this.confirmBtn.innerHTML = data.confirm || "确认";
    this.contentNode.innerHTML = this.content;
    this.success = data.success || function(){};
    this.fail = data.fail || function(){};
}

//提示框原型
Alert.prototype = {
    init:function(){
        this.panel.appendChild(this.closeBtn);
        this.panel.appendChild(this.contentNode);
        this.panel.appendChild(this.confirmBtn);

        document.body.appendChild(this.panel);
        this.bindEvent();
        this.show()
    },
    bindEvent:function(){
        var that = this;
        this.closeBtn.onclick = function(){
            that.success();
            that.hide();
        }

        this.confirmBtn.onclick = function(){
            that.success();
            that.hide();
        }
    },
    hide:function(){
        this.panel.style.dispaly = "none";
    },

    show:function(){
        this.panel.style.dispaly = "block";
    }
}


/**
 * 观察者模式
 */

 //把观察者放到闭包中，页面加载就立即执行
 var Observer = (function(){
     var __messages = {};
     return {
         /**
          * 注册信息的接口，把订阅者注册的消息推入消息队列中
          * @param {*} type  消息类型
          * @param {*} fn 相应的处理动作
          */
         regist:function(type,fn){
             //如果消息不存在，则是创建一个该消息类型
             if(typeof __messages[type]==='undefined'){
                 //把动作放入该消息对应的动作执行队列中
                 __messages[type] = [fn];
             }else{
                 //如果该消息不存在，则把动作方法加入该消息对应的动作执行序列中
                 __messages[type].push(fn);
             }
         },
         /**
          * 发布信息接口，观察者发布消息时，订阅者订阅的消息一次执行，
          * @param {*} type 消息类型
          * @param {*} args 动作在执行时需要的参数
          */
         fire:function(type,args){
             //消息没有被注册，则返回
            if (!__messages[type]) {
                return ;
            }
                //定义消息信息
                var events = {
                    type:type,
                    args:args || {} //消息中携带的数据
                };
                var i = 0;
                var len = __messages[type].length;
                for(;i<len;i++){
                    //依次执行注册的消息对应的动作序列
                    __messages[type][i].call(this,events);
                }
         },
         /**
          * 移除信息接口，订阅者注销的消息从信息队列中移除，需要两个参数。其中先检验该消息是否存在
          * @param type  消息的类型
          * @param fn  某一个动作的方法
          *  */
         remove:function(type,fn){
             //
             if (__messages[type] instanceof Array) {
                 //从最后一个消息动作开始遍历
                var i = __messages[type].length - 1;
                for(;i>=0;i--){
                    //该动作存在，则在信息动作序列中移除
                }
             }
         }
     }
 })();

 
 /**
  * 状态模式
  * 一个投票结果状态的实例
  */

  //投票结果状态对象
  var ResultState = function(){
      //把结果保存在内部状态中
      var State = {
          //每一一种状态作为一个独立的方法保存
          state0:function(){
              console.log("状态1");
          },
          state1:function(){
              console.log("状态2");
          }
      }

       function show(result){
           State['state'+result] && State["state"+result]();
       }

       return {
           show:show
       }
  }();

  ResultState.show(0);//状态1

  /**
   * 
   */

   var  MarryState = function(){
       //内部私有变量
       var _currentState = {},
       states = {
           jump:function(){
               console.log("跳跃");
           },
           move:function(){
               console.log("移动");
           },
           shoot:function(){
               console.log("射击");
           },
           squat:function(){
               console.log("蹲下");
           }
       };

       //动作控制类
       var Action = {
           changeState:function(){
               //组合动作通过传递的多个参数来实现
               var arg = arguments;

               //重置内部状态
               _currentState = {};

               //如果有动作，则添加动作
               if (arg.length) {
                   //遍历动作
                   for(var i =0,len=arg.length;i<len;i++){
                       //向内部状态添加动作
                       _currentState[arg[i]] = true;
                   }
               }
               return this;
           },
           goes:function(){
               console.log("触发一次动作");

               //遍历内部状态保存的动作
               for(var i in _currentState){
                   states[i] && states[i]();
               }
               return this;
           }
       }

       //返回接口change,goes
       return {
           change:Action.changeState,
           goes:Action.goes
       }
   }

   var m = new MarryState();
   m.change("jump","move")
   .goes()
   .goes()
   .change("shoot")
   .goes();
   
/**
 * 商品促销活动中的策略模式
 */

 var PriceStrategy = function(){
     //内部算法
     var stragtagy = {
         //100返39
         return39:function(price){
             return +price + parseInt(price/100)*39;
         },
         //100返50
         return50:function(price){
             return +price + parseInt(price/100)*50;
         },

         //9折
         percent90:function(price){
             return  price * 9/10
         },

         //8折
         percent80:function(price){
             return price*8/10
         },

         //5折
         percent50:function(price){
             return price*5/10;
         }
     }

     //策略算法调用接口
     return function(algorithm,price){
         return stragtagy[algorithm] && stragtagy[algorithm](price)
     }
 }();

 var p = PriceStrategy("return50","200");
 console.log(p);


 /**
  * 表单验证
  */

  var InputStrategy = function(){
      var strategy = {
          //判断是否为空
          notNull:function(value){
              return /\s+/.test(value) ? "请输入内容" : " "
          },
          //Number
          number:function(value){
              return /^[0-9]+(\.[0-9]+)?$/.test(value) ? '' : "请输入数字";
          },
          //phone
          phone:function(value){
              return /^\d{3}\-\d{8}$|^\d{4}\-\d{7}$/.test(value) ? "":"请正确输入电话号码格式，如001-12345678或者0418-1234567"
          }
      }

      return {
          //验证接口
          check:function(type,value){
              value = value.replace(/^\s+|\s+$/g,"");
              return strategy[type] ? strategy[type](value) : "没有该类型的检测方法"
          },
          //添加策略
          addSrategy:function(type,fn){
              strategy[type] = fn;
          }
      }
  }();

  //拓展策略
  InputStrategy.addSrategy("nickname",function(value){
      return /^[a-zA-Z]\w{3,7}$/.test(value) ? "" : "请输入4-8位昵称！"
  });

  /**
   * 外观模式简化元素的获取
   */
   function $(id){
       return document.getElementById(id);
   }
   function $tag(tag,context){
       context = context || document;
       return context.getElementsByTagName(tag);
   }


   /**
    * 异步请求对象（简化版本）
    * @param data  请求数据
    * @param dealType  响应数据处理对象
    * @param dom  事件源
    */

    var sendData = function(data,dealType,dom){
        var xhr = new XMLHttpRequest();
        var url = "路径";

        xhr.onload = function(event){
            if ((xhr.status >=200 && xhr.status<300) || xhr.status == 304) {
                dealData(xhr.responseText,dealType,dom);
            }else{
                console.log("请求失败");
            }
        };

        for(var i in data){
            url += '&'+i+"="+data[i];
        }

        //发送异步请求
        xhr.open("get",url,true);
        xhr.send(null);
    }

    /**
     * 处理响应数据
     * @param data 响应数据
     * @param dealType  响应数据处理对象
     * @param dom  事件源
     */
    var dealData = function(data,dealType,dom){
        var dataType = Object.prototype.toString.call(data);

        switch (dealType) {
            case "sug":
                if (dataType === "[object Array]") {
                    //创建提示按钮
                    return createSug(data,dom);
                }
                if (dataType === "[object Object]") {
                    var newData = [];
                    for(var i in data){
                        newData.push(data[i]);
                    }
                    //提示创建按钮组件
                    return createSug(newData,dom);
                }
                return createSug([data],dom);
                break;
            case 'validate':
                //创建校验组件
                return createValidataResult(data,dom);
                break;
        }
    }

    /**
     * 创建提示框组件
     * @param  data 响应适配数据
     * @param dom 事件源
     */

     var createSug = function(data,dom){
         var i = 0;
         var len = data.length;
         var html = "";
         for(;i<len;i++){
             html += '<li>'+data[i]+'</li>';
         }

         dom.parentNode.getElementsByTagName("ul")[0].innerHTML = html
     }

     /**
      * 创建校验组件
      * @param  data 响应适配数据
      * @param dom  事件源
      */

      var createValidataResult = function(data,dom){
          //显示验证结果
          dom.parentNode.getElementsByTagName("span")[0].innerHTML = data;
      }


      //单元测试
        var createSug = function (data, dom) {
            console.log(data, dom, "createSug");
        }
        var createValidataResult = function (data, dom) {
            console.log(data, dom, "createValidataResult");
        }

    
    /**
     * 动态创建视图
     * 命令模式
     */

    var viewCommand = (function(){
        var tpl = {
            //展示图片结构模板
            product:[
                `<div>
                    <img src="{#src#}" />
                    <p>{#text#}</p>
                 </div>`
            ].join(''),

            //展示标题结构
            title:[
                `<div class="title">
                    <div class="main">
                        <h2>{#title#}</h2>
                        <p>{#tips#}</p>
                    </div>
                 </div>`
            ].join("")
        };
        
        var  html = '';
        function  formateString(str,obj){
            //替换{##}之间的字符串
            return str.replace(/\{#(\w+)#\}/g,function(match,key){
                return obj[key]
            })
        }

        //方法集合
        var Action = {
            create:function(data,view){
                if (data.length) {
                    for(var i = 0,len=data.length;i<len;i++){
                        html += formateString(tpl[view],data[i])
                    }
                }else{
                    html += formateString(tpl[view],data);
                }
            },
            display:function(container,data,view){
                //传入数据
                if (data) {
                    this.create(data,view);
                }

                //展示模块
                document.getElementById(container).innerHTML = html;
                //展示之后清空缓存的字符串
                html = '';
            }
        }
        //命令接口
        return function excute(msg){
            //若msg.param不是数组，则将其转化为数组，因为apply方法要求第二个参数为数组
            msg.param = Object.prototype.toString.call(msg.param) === "[object Array]" ? msg.param : [msg.param];
            //Action内部调用的方法引用this，确保作用域的this传入Action中
            Action[msg.command].apply(Action,msg.param);
        }
    })();


    /**
     * 访问者模式
     */
    var  Visitor = (function(){
        return {
            // 截取方法
            splice:function(){
                var args = Array.prototype.splice.call(arguments,1);
                return Array.prototype.splice.apply(arguments[0],args);
            },
            //追加数据的方法
            push:function(){

                var len = arguments[0].length || 0;
                //从原参数的第二个元素开始添加
                var args = this.splice(arguments,1);

                arguments[0].length = len + arguments.length - 1;
                return Array.prototype.push.apply(arguments[0],args);
            },
            pop:function(){
                return Array.prototype.pop.apply(arguments[0]);
            }
        }
    })();

    var s = new Object();
    Visitor.push(s,1,3,8,4)
    console.log(s.length)


    /**
     * 中介者模式
     */
    var Mediator = function(){
        //消息对象
        var _msg = {};
        return {
            /**
             * 订阅消息的方法
             * @param type 消息名称
             * @param action 消息回调函数
             */
            register:function(type,action){
                //检测该消息是否存在，若在则直接存入回调函数；若不存在该消息，则新建一个容器，再存放入回调函数中
                if (_msg[type]) {
                    _msg[type].push(action);
                }else{
                    _msg[type] = [];
                    _msg[type].push(action);
                }
            },
            /**
             * 发布信息
             * @param type  消息名称
             */
            send:function(type){
                //若已经被订阅了
                if (_msg[type]) {
                    for(var i =0,len = _msg[type].length;i<len;i++){
                        _msg[type][i] && _msg[type][i]();
                    }
                }
            }
        }
    }();

    Mediator.register("dome",function(){
        console.log(156484)
    });

    Mediator.send("dome");


    /**
     * 显示隐藏导航组件
     * @param mod 模块
     * @param tag  操作的标签
     * @param showOrHide  显示或者隐藏
     */

    var showHideNavWidget = function(mod,tag,showOrHide){
        var mod = document.getElementById(mod);
        var tag = mod.getElementsByTagName(tag);
        var showOrHide = (!showOrHide || showOrHide === 'hide') ? "hidden" : "visible";
        //隐藏这些标签，但是依旧占据位置
        for(var i=tag.length-1;i>=0;i--){
            tag.style.visibility = showOrHide;
        }
    };

    /**
     *  test
     */
    (function(){
        //隐藏
        Mediator.register('hideAllNavNum',function(){
            showHideNavWidget("collection_nav",'b',false);
        });
        //显示
        Mediator.register("showAllNavNum",function(){
            showHideNavWidget("collection_nav",'b',true);
        })
    })();




/**
 * 备忘录模式
 * 缓存数据
 */
var Page = function(){
    //信息缓存
    var cache = {};
    /**
     * @param page 页码
     * @param fn 成功回调函数
     */
    return function(page,fn){
        //判断该页数据是否在缓存中
        if (cache[page]) {
            showPage(page,cache[page]);
            fn &&　fn();
        }else{
            //不存在则请求数据
            $.post('./data/getdata.php',{
                page:page
            },function(res){
                if (res.errNo == 0) {
                    showPage(page,res.data);
                    cache[page] = res.data;
                    fn && fn();
                }else{

                }
            })
        }
    }
}();

//test 点击下一页
$("$next_page").click(function(){
    var news = $("#news_content"),
    page = $news.data("page");

    Page(page,function(){
        $news.data("page",page+1);
    })
});

/**
 * 迭代器模式中的焦点轮播图
 */
//迭代器
var Iterator = function(items,container){
    //获取父容器
    var container = container && document.getElementById(container) || document;

    var items = container.getElementsByTagName(items);
    var length = items.length;
    var index = 0;
    var splice=[].splice();
    return {
        first:function(){
            //获取第一个元素
            index = 0;
            return items[index];
        },
        last:function(){
            //获取最后一个元素
            index = length-1;
            return items[index];
        },
        pre:function(){
            //获取上一个元素
            if (--index > 0) {
                return items[index]
            }else{
                index = 0;
                return null;
            }
        },
        next:function(){
            //获取下一个元素
            if (++index<length) {
                return items[index];
            }else{
                index = length -1;
                return null;
            }
        },
        //获取元素
        get:function(num){
            index = num  >= 0 ? num % length : num % length + length;
        },
        //对每一个元素执行某一种方法
        dealEach:function(fn){
            var args = splice.call(arguments,1);
            for(var i=0;i<length;i++){
                fn.apply(items[i],args);
            }
        },
        //针对某一个元素执行某一个方法
        dealItem:function(num,fn){
            fn.apply(this.get(num),splice.call(argsuments,2));
        },
        //排他方式处理某一个元素
        exclusive:function(num,allFn,numFn){
            this.dealEach(allFn);
            if(Object.prototype.toString.call(num)==="[object ,Array]"){
                for(var i=0,len=num.length;i<len;i++){
                    this.dealItem(num[i],numFn);
                }
            }else{
                this.dealItem(num,numFn);
            }
        }
    }
}

var dom = new Iterator('li','container');
console.log(dom.first());


/**
 * 数组迭代器
 */

  var eachArray = function(arr,fn){
      var i = 0 ;
      var len = arr.length;
      for(;i<len;i++){
          if(fn.call(arr[i],i,arr[i]) === false){
              breack;
          }
      }
  }
/**
 * 对象迭代器
 */

 var eachObject = function(obj,fn){
     for(var i in obj){
        if(fn.call(obj[i],i,obj[i])=== false){
            breack;
        }
     }
 }

/**
 * 同步变量迭代器
 */

var A ={
    common:{},

    client:{
        user:{
            username:"读心",
            uid:"123"
        }
    },
    server:{}
}

var AGetter = function(key){
    if(!A){
        return  undefined;
    }
    var result = A;
    key = key.split(".");
    for(var i = 0,len=key.length;i<len;i++){
            if(result[key[i]]!== undefined){
                result = result[key[i]];
            }else{
                return undefined;
            }
    }
    return result;
}

/**
 * 使用canvas处理图片像素数据
 */

 window.onload = function(){
     var canvas = document.getElementsByTagName("canvas")[0];
     var img = document.images[0];
     var width = (canvas.width = img.width*2)/2;
     var height = canvas.height = img.height;
     var ctx = canvas.getContext("2d");

     ctx.drawImage(img,0,0);

     function dealImage(){};
     dealImage('gray',0,0,width,height,255);

 }

 /**
  * 解释器模式
  * 获取兄弟元素
  */

var Interpreter = (function(){
     function getSublingName(node) {
         if (node.previousSibling) {
             var name = "", //兄弟元素名称
                 count = 1,//相邻兄弟元素中相同名称的元素个数
                 nodeName = node.nodeName,//原始节点
                 sibling = node.previousSibling; //上一个兄弟元素
             while (sibling) {
                 //如果节点是元素，并且该节点类型和上一个兄弟元素的类型相同，并且上一个兄弟元素存在
                 if (sibling.nodeType == 1 && sibling.nodeType === node.nodeType && sibling.nodeType) {
                     //
                     if (nodeName == sibling.nodeName) {
                         name += ++count;
                     } else {
                         count = 1;
                         name += "|" + sibling.nodeName.toUpperCase();
                     }
                 }
                 sibling = sibling.previousSibling;
             }
             return name;
         } else {
             return "";
         }
     }

     /**
      * @param node  目标节点
      * @param wrap  容器节点
      */
     return  function(node,wrap){
         var path = [];
         var wrap = wrap || document;
          if (node === wrap) {
              //容器节点为元素
              if (wrap.nodeType == 1) {
                  path.push(wrap.nodeName.toUpperCase());
              }
              return path;
          }
          //当前节点的父元素不等于容器节点
          if (node.parentNode !== wrap) {
              //对当前节点的父节点进行遍历
              path = arguments.callee(node.parentNode,wrap);
          }else{
              if (wrap.nodeType == 1) {
                  path.push(wrap.nodeName.toUpperCase());
              }
          }

          //获取元素的兄弟元素名称统计
          var sublingName = getSublingName(node);

          //节点为元素
          if (node.nodeType == 1) {
              //当前节点元素名称以及前面的兄弟元素名称统计
              path.push(node.nodeName.toUpperCase() + sublingName);
          }

          return path;
     }
 })();

 /**
  * 节流模式
  * 对于重复业务逻辑进行节流控制，执行最后一次操作，
  * 并且取消其他的操作，从而提高性能
  * 如下：
  */
//节流器
var throttle = function(){
    //获取第一个参数
    var isClear = arguments[0];
    var fn;

    if (typeof isClear === "boolean") {
        fn = arguments[1];
        fn.__throttleID && clearTimeout(fn.__throttleID);
    }else{
        fn = isClear;
        param = arguments[1];
        var  p = extend({
            context:null,
            args:[],
            time:300,
        },param);

        arguments.callee(true,fn);
        fn.__throttleID = setTimeout(() => {
            fn.apply(p.context,p.args);
        }, p.time);
    }
}

/**
 * 创建浮层类
 * 鼠标滑过时，显示对应的二维码图片
 */
var Layer = function(id){
    this.container = $(id);
    this.layer = $tag("div",container)[0];

    this.lis = $tag("li",this.container);
    this.imgs = $tag("img",this.container);
    //绑定事件
    this.bindEvent();
}

layer.prototype = {
    //交互事件
    bindEvent:function(){
        //缓存当前对象
        var that = this;
        function hiddeLayer(){
            that.layer.className = "";
        }
        function showLayer(){
            that.layer.className = "show";
        }

        that.on(that.container,'mouseenter',function(){
            throttle(true,hiddeLayer);
            throttle(showLayer);
        }).on(that.container,"mouseleave",function(){
            //延迟浮层隐藏
            throttle(hiddeLayer);
            //清除显示浮层方法计时器
            throttle(true,showLayer);
        });
    },

    //事件绑定的方法
    on:function(ele,type,fn){
        ele.addEventListener ? ele.addEventListener(type,fn,false) : ele.attachEvent("on"+type,fn);
        return this;
    }
}

/**
 *简单模板模式,就是字符串拼接
 网站活动主题模板实例
 */
//命名空间
var D = D || {};
//主体展示区容器
var root = document.getElementById("container");

D.templateString = function(str,data){
    return str.replace(/\{#(\w+)#\}/g,function(match,key){return typeof data[key] === undefined ? "" : data[key]});
}
//模板生成器
D.View = function(name){
    var v = {
        code:`<pre><code>{#code#}</code></pre>`,
        img:`<img src="{#src#}" alt="{#alt#}" title="{#title#}"/>`,
        part:`<div id="{#id#}" class="{#class#}">{#part#}</div>`,
        theme:[
            `<div>
                <h1>{#title#}</h1>
                {#content#}
            </div>`
        ].join('')
    }
    if(Object.prototype.toString.call(name) === "[Object Array]"){
        var tpl = "";
        for(var i=0,len=name.length;i<len;i++){
            tpl += arguments.callee(name[i]);
        }

        return tpl;
    }else{
        return v[name] ? v[name] : ('<'+name+'>{#'+name+'#></'+name+'>');
    }
}
//创建视图的方法集合
D.strategy = {
    "listPart":function(data){
       var s = document.createElement("div"),
       ul = "",
       ldata = data.data.li,
       tpl = D.view(['h2','p','ul']),

       liTpl = D.templateString(D.View("li"),{li:D.View(['strong','span'])});

       data.id && (s.id = data.id);
       for(var i =0,len = ldata.length;i<len;i++){
           if(ldata[i].em || ldata[i].span){
               ul += D.templateString(liTpl,ldata[i]);
           }
       }

       data.data.ul = ul;
       s.innerHTML = D.templateString(tpl,data.data);

       D.root.appendChild(s)
    },
    "codePart":function(){},
    "onlyTitle":function(){},
    "guide":function(){}
}
//视图入口
D.init = function(){
    //根据传输的视图类型创建视图
    this.strategy[data.type](data);
}

/**
 * 惰性模式：减少每执行时的重复分支判断，通过对对象重定义来屏蔽原对象中的分支判断。
 * 
 */
//单体模式定义命名空间

var A = {};

A.on = function(dom,type,fn){
    if (document.addEventListener) {
        return function(dom,type,fn){
            document.addEventListener(type,fn,false);
        }
    }else if(document.attachEvent){
        return function(dom,type,fn){
            dom.attachEvent("on"+type,fn)
        }
    }else{
        return function(dom,type,fn){
            dom["on"+type] = fn;
        }
    }
    A.on(dom, type, fn)
};

//第二种方式
A.on = function (dom, type, fn) {
    if (document.addEventListener) {
        return function (dom, type, fn) {
            document.addEventListener(type, fn, false);
        }
    } else if (document.attachEvent) {
        return function (dom, type, fn) {
            dom.attachEvent("on" + type, fn)
        }
    } else {
        return function (dom, type, fn) {
            dom["on" + type] = fn;
        }
    }
}();
//两种方式都是让不必要的分支判断得到剥离。

/**
 * 创建XHR对象实例
 */
function createXHR(){
    if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    }else if (typeof ActiveXObject != "undefined") {
        if (typeof arguments.callee.activeXString != "string") {
            var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],
                    i=0;
                    len = versions.length;
            for(;i<len;i++){
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex) {}
            }
        }
    }else{
        throw new Error("您的浏览器并不支持Ajax");
    }
}

//第一种优化方案
var createXHR = (function(){
    if (typeof XMLHttpRequest != "undefined") {
        return function(){
            return new XMLHttpRequest();
        }
    }else if (typeof ActiveXObject != "undefined") {
        if (typeof arguments.callee.activeXString != "string") {
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
                i = 0;
            len = versions.length;
            for (; i < len; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex) { }
            }
        }
    }else{
        return function(){
            throw new Error("您的浏览器并不支持Ajax")
        }
    }
})();

//第二种优化方案
function  createXHR(){
    if (typeof XMLHttpRequest !="undefined") {
        createXHR = function(){
            return new XMLHttpRequest();
        }
    }else if(typeof ActiveXObject != "undefined"){
        createXHR = function(){
            if (typeof arguments.callee.activeXString != "string") {
                var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
                    i = 0;
                len = versions.length;
                for (; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (ex) { }
                }
            }
        }
    }else{
        createXHR = function(){
            throw new Error("您的浏览器并不支持Ajax")
        }
    }
    return createXHR;
}


/***
 * 参与者模式
 */
var B = {};

B.event.on = function(dom,type,fn,data){
    if (dom.addEventListener) {
        dom.addEventListener(type,function(){
            fn.call(dom,e,data);
        },false);
    }else if (dom.attachEvent) {
        dom.attachEvent("on" + type, function () {
            fn.call(dom, e, data);
        });
    }
}

//函数绑定
function bind(fn, context) {
    var Slice = Array.prototype.slice,
        args = Slice.call(arguments, 2);
    return function () {
        var addArgs = Slice.call(arguments),
            AllArgs = addArgs.concat(args);

        return fn.apply(context, AllArgs);
    }
}


//函数柯里化
function curry(fn){
    var Slice = Array.prototype.slice,
        args = Slice.call(arguments, 2);
    return function () {
        var addArgs = Slice.call(arguments),
            AllArgs = addArgs.concat(args);

        return fn.apply(context, AllArgs);
    }
}

/***
 * 等待者模式
 */

//等待对象
var Waiter = function(){
    var dfd = [],
        doneArr = [],
        failArr = [],
        slice = Array.prototype.slice,
        that = this;

        //监控对象
    var Primise = function(){
        //监控对象是否解决成功状态
        this.resolved = false;
        //监控对象是否解决失败状态
        this.rejected = false;
    }
    //监控对象
    Primise.prototype = {
        resolve:function(){
            //设置当前的监控对象解决成功
            this.resolved = true;
            //没有监控对象就是直接取消执行
            if (!dfd.length) {
                return;
            }
            //遍历所有注册的监控对象
            for(var i = dfd.length-1;i>=0;i--){
                //要是任意一个监控对象没有被解决或者解决失败没救返回
                if (dfd[i]&&!dfd[i].resolved || dfd[i].rejected) {
                    return;
                }
                //清除监控对象
                dfd.splice(i,1);
            }
            //执行解决成功回调函数
            _exec(doneArr);
        },
        reject:function(){
            //设置当前监控对象解决失败
            this.rejected = true;
            //不存在监控对象就取消执行
            if (!dfd.length) {
                return;
            }
            dfd.slice(0);
            _exec(failArr)
        }
    }
    //创建监控对象
    that.Deferred = function(){
        return new Primise();
    }
    //回调执行方法
    function _exec(arr){
        var i =0,
            len = arr.length;
        for(;i<len;i++){
            try {
                arr[i]  && arr[i]();
            } catch (e) {}
        }
    }
    //监控异步方法
    that.when = function(){
        dfd = slice.call(arguments);
        var i = dfd.length;
        for(--i;i>=0;i--){
            if (!dfd || dfd[i].resolved || dfd[i].rejected || !dfd[i] instanceof Primise) {
                dfd.splice(i,1)
            }
        }
        return that;
    };
    //解决成功回调函数添加方法
    that.done = function(){
        doneArr = doneArr.concat(slice.call(arguments));
        return that;
    };
    //解决失败回调函数添加方法
    that.fail = function(){
        failArr = failArr.concat(slice.call(arguments));
        return that;
    };
}

//把原生ajax方法封装成等待者模式
var ajaxGet = function(url,success,fail){
    var xhr = new XMLHttpRequest();
    var dtd = waiter.Deferred();
    xhr.onload =   function(event){
        if ((xhr.status>=200 && xhr.status<300) || xhr.status == 304) {
            success && success()
            dtd.resolve();
        }else{
            dtd.reject();
            fail && fail();
        }
    };
    xhr.open("get",url,true);
    xhr.send(null);
}


/***
 * 同步模块模式
 */
//定义模块管理单体对象
var F = F || {};

/**
 * 定义模块方法
 * @param str 模块路由
 * @param fn 模块方法
 */

 F.define = function(str,fn){
    //解析路由
    var parts = str.split('.'),
        old = parent = this, //old为当前模块的祖父模块。parent是当前模块的父模块
        i =len = 0;
        //第一个模式是模块管理器单体对象，则移除
        if (parts[0]==="F") {
            parts = parts.slice(1);
        }
        //屏蔽对define和Module模块方法的重写
        if (parts[0] === "define" || parts[0] === "module") {
            return;
        }

        //遍历路由模块并且定义每层模块
        for(len=parts.length;i<len;i++){
            if (typeof parent[parts[i]] === "undefined") {
                parent[parts[i]] = {};
            }
            //缓存下一层级的祖父模块
            old = parent;

            //缓存下一层级的父模块
            parent = parent[parts[i]];
        }
        if (fn) {
            old[parts[--i]] = fn();
        }
        return this;
 }

 //创建模块

 F.define("string",function(){
     return {
         trim:function(str){
             return str.replace(/^\s+|\s+$/g,"")
         }
     }
 });
//获取元素方法dom(),html()设置元素内容
 F.define("dom",function(){
     var $ = function(id){
         $.dom = document.getElementById(id);
         return $;
     }
     $.html = function(html){
         if (html) {
             this.dom.innerHTML = html;
             return this;
         }else{
             return this.dom.innerHTML;
         }
     }
     return $;
 });

 //添加addclass方法
 F.dom.addClass = function(type,fn){
     return  function(className){
         if (!~this.dom.className.indexOf(className)) {
             this.dom.className += " " + className;
         }
     }
 }();

//模块调用方法
F.module = function(){
    var args = [].slice.call(arguments),
        fn = args.pop(),
        parts = args[0] && args[0] instanceof Array ? args[0] : args,
        modules =[],
        modIDs = '',
        i=0,
        ilen = parts.length,
        parent,j,jlen;

        while (i<ilen) {
            if (typeof parts[i] === "string") {
                parent = this;
                modIDs = parts[i].replace(/^F\./,"").split('.');
                for(j=0,jlen=modIDs.length;j<jlen;j++){
                    parent = parent[modIDs[j]] || false;
                }

                modules.push(parent);
            }else{
                modules.push(parts[i]);
            }
            i++;
        }
        fn.apply(null,modules);
}

/***
 * 异步模块
 */
//在闭包中传入模块管理器对象F
~(function(F){
    //模块缓存器，存储已经创建的模块
    var moduleCache = {}
})((function(){
    return window.F = {};
})());

/***
 * 创建或者调用模块方法
 * @param url  参数为模块的url
 * @param deps  参数为依赖模块
 * @param callback  参数为模板主函数
 */
F.module = function(url,modDeps,modCallback){
    //把参数转化为数组
    var args =[].slice.call(argsuments),
        //获取模块构造函数（参数数组中最后一个参数成员）
        callback = args.pop(),
        //获取依赖模块（紧邻回调函数参数，，且数据类型为数组）
        deps =(args.length && args[args.length-1] instanceof Array) ? args.pop() :[],
        //模块url（模块ID）
        url = args.length ? args.pop() : null,
        //依赖模块序列
        params = [],
        //未加载的依赖模块数量统计
        depsCount = 0,
        //依赖模块序列的索引
        i = 0,
       // 依赖模块序列的长度
        len;

        if (len = deps.length) {
            //遍历依赖模块
            while (i<len) {
                //闭包保存i
                (function(i){
                    //增加未加载的依赖模块
                    depsCount++;
                    loadModule(deps[i],function(mod){
                        //依赖模块序列中添加依赖模块接口引用
                        params[i] = mod;
                        //依赖模块加载完成，依赖模块数量统计减一
                        depsCount--;

                        //若依赖模块全部加载
                        if (depsCount===0) {
                            //在模块缓存器中矫正该模块，并且执行构造函数
                            setModule(url,params.callback);
                        }
                    });
                })(i)
                i++;
            }
        }else{
            setModule(url,[],callback)
        }
}

var moduleCache = {},
    setModule = function(moduleName,params,callback){},
    /***
     * 异步加载依赖模块所在文件
     * @param moduleName  模块；路径（ID）
     * @param callback  模块加载完成回调函数
     */
    loadModule = function(moduleName,callback){
        var _module ;
        if (moduleCache[moduleName]) {
            _module = moduleCache[moduleName];
            if (_module.status === "loaded") {
                setTimeout(callback(_module.exports), 0);
            }else{
                _module.onload.push(callback);
            }
        }else{
            moduleCache[moduleName] = {
                moduleName : moduleName,
                status:'loading',
                exports:null,
                onload:[callback]
            };
            loadScript(getUrl(moduleName));
        }
    },
    //获取文件路径
    getUrl = function(moduleName){
        return String(moduleName).replace(/\.js$/g,"")+".js";
    },
    loadScript = function(src){
        var _script = document.createElement("script");
        _script.type = "text/script";
        _script.charset = "utf-8";
        _script.async = true;
        _script.src = src;
        document.getElementsByTagName("head")[0].appendChild(_script);
    };

    /**
     * 设置模块并且执行模块构造函数
     * @param moduleName  模块ID名称
     * @param params  依赖模块
     * @param callback  模块构造函数
     */