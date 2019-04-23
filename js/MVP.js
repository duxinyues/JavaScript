/**
 * MVP模式
 */
~(function(window){
    //MVP构造函数
    var MVP = function(){};
    //数据层
    MVP.model = function(){
        var M ={};
        M.data = {};
        var data = {};
        var conf = {};
        return {
            getData:function(m){
                return M.data[m];
            },
            /**
             * 设置数据
             * @param m 模块名称
             * @param v  模块数据
             */
            setData:function(m,v){
                M.data[m] = v;
                return v;
            },
            getConf:function(c){
                return M.conf[c]
            },

            /**
             * 设置配置
             * @param c 配置项的名称
             * @param v 配置项值
             */
            setConf:function(c,v){
                M.conf[c] = v;
                return v;
            }
        }
    }();
    //视图层
    MVP.view = function(){
        var REPLACEKEY = '__REPLACEKEY__';
        /**
         * 获取完整模板
         * @param {*} str  元素字符串
         * @param {*} type 元素类型
         */
        function getHTML(str,type){
            //只处理字符串中第一个{}中的内容
            return str.replace(/^(\w+)([^\{\}]*)?(\{([@\w]+)\})?(.*?)$/,function(match,$1,$2,$3,$4,$5){
                $2 =$2 || ""; //元素属性参数容错处理
                $3 = $3 ||""; //{元素内容}参数容错处理
                $4 = $4 || ""; //元素内容参数容错处理
                $5 = $5.replace(/\{([@\w]+)\}/g,''); //去除元素内容后面添加的元素属性中的{}内容

                return  type === "in"?
                '<'+$1+$2+$5+'>'+$4+REPLACEKEY+'</'+$1+">" : 
                type === "add" ?
                '<'+$1+$2+$5+">"+$4+"</"+$1+'>'+REPLACEKEY :
                '<'+$1+$2+$5+">"+$4+"</"+$1+">";
            }).replace(/#([@\-\w]+)/g,'  id="$l"') //处理特殊标识 #--id
              .replace(/#([@\-\s\w]+)/g,' class="$l"')//处理特殊标识 #--class
              .replace(/\[(.+)\]/g,function(match,key){//处理其他属性组
                var a = key
                        .replace(/'|"/g,'')//过滤其中的引号
                        .split(" "),//以空格分组
                    h = ""; //属性模板字符串
                for(var j =0,len = a.length;j<len;j++){
                    //处理拼接每一个属性
                    h += ' ' + a[j].replace(/=(.*)/g,'="$l"');
                }
                //返回属性组模板字符串
                return h;
              })
              //处理可以替换内容，
              .replace(/@(\w+)/g,'{#$1#}');
        }
        /**
         * 数组迭代
         * @param arr 数组
         * @param fn 回调函数
         */
        function eachArray(arr,fn){
            for(var i=0,len = arr.length;i<len;i++){
                fn(i,arr[i],len);
            }
        }

        /**
         * 替换兄弟元素模板或者子元素模板
         * @param str 原始字符串
         * @param rep 兄弟元素模板或者子元素模板
         */
        function formateItem(str,rep){
            return str.replace(new RegExp(REPLACEKEY,"g"),rep);
        }

        /**
         * 模板解析
         */
        return function(str){
            var part = str.replace(/^\s+|\s+$/g,"").replace(/^\s(>)\s+$/g,"$l").split(">"),
                html = REPLACEKEY,
                item,
                nodeTpl;
            eachArray(part,function(partIndex,partValue,partLen){
                item = partValue.split("+");
                nodeTpl = REPLACEKEY;
                eachArray(item,function(itemIndex,itemValue,itemLen){
                    nodeTpl = formateItem(nodeTpl,getHTML(itemValue,itemIndex === itemLen - 1 ? (partIndex === partLen -1 ? "":"in"):"add"));
                });
                html = formateItem(html,nodeTpl);
            })
            return html;
        }
    }();
    //管理器层
    MVP.presenter = function(){
        var V = MVP.view;
        var M = MVP.model;
        var C = {
            /***
             * 导航管理
             * @param M 数据层对象
             * @param V 视图对象
             */
            nav:function(M,V){
                var data = M.getData("nav");

                data[0].choose = 'choose';
                data[data.length-1].list = "last";

                var tpl =V('li.@mode @choose @last[data-mode=@mode]>a#nav_@mode.nav-@mode[href=url  title=@text]>i.nav-icon-@mode+span{@text}');
                $.create("ul",{
                    'class':"navigation",
                    "id":"nav"                
                }).html(
                    A.formateString(tpl,data)
                ).appendTo("container");
            }
        };
        return {
            init:function(){
                for(var  i in C){
                    C[i] && C[i](M,V,i)
                }
            }
        }
    }();
    //MVP入口
    MVP.init = function(){
        this.presenter.init()
    }
    //暴露MVP对象。在外部可以访问MVP
    window.MVP = MVP;
})(window);

window.onload = function(){
    MVP.init();
}