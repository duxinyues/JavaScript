/**
 * MVVM模式
 */

~(function(){
    var window = this || (0,eval)('this');
    var FONTSIZE = function(){
        return parseInt(document.body.currentStyle ? document.body.currentStyle["fontSize"] : getComputedStyle(document.body,false)["fontSize"]);
    }();
    var VM = function(){
        var Method = {
            /**
             * 进度条
             * @param {*} dom  进度条容器
             * @param {*} data  进度条数据模型
             */
            progressbar :function(dom,data){
                var progress = document.createElement("div");
                var param = data.data;
                progress.style.width = (param.progress || 100)+"%";
                dom.className += ' ui-progressbar';
                dom.appendChild(progress);
            },
            /**
             * @name 滑动条组创建方法
             * @param dom  滑动条容器
             * @param data 滑动条数据模型
             */
            slider:function(dom,data){
                var bar  = document.createElement("span"),
                    progress = document.createElement("div"),
                    totleText = null,
                    progressText = null,
                    param = data.data,
                    width = dom.clientWidth,
                    left = dom.offsetLeft,
                    realWidth = (param.position || 100)*width/100;
                dom.innerHTMl = '';
                if(param.totle){
                    text = document.createElement("b");
                    progressText = document.createElement("em");
                    text.innerHTMl = param.totle;
                    dom.appendChild(text);
                    dom.appendChild(progressText);
                }
                setStyle(realWidth);
                dom.className +=" ui-slider";
                dom.appendChild(progress);
                dom.appendChild(bar);

                function setStyle(w){
                    progress.style.width = w+"px";
                    bar.style.left = w-FONTSIZE/2+"px";
                    if(progressText){
                        progressText.style.left = w-FONTSIZE/2*2.4+"px";

                        progressText.innerHTMl = parseFloat(w/width*100).toFixed(2)+"%"
                    };
                }

                bar.onmousedown = function(){
                    document.onmousemove = function(event){
                        var e = event || window.event;
                        var w = e.clientX - left;
                        setStyle(w<width ? (w>0?w:0):width);
                    }
                    document.onselectstart = function(){
                        return false;
                    }
                }
                document.onmouseup = function(){
                    document.onmousemove = null;
                    document.onselectstart = null;
                }
            }
        }

        function getBindData(){}

        return function(){
            var doms = document.body.getElementsByTagName("*"),
                ctx = null;
            for(var i=0;i<doms.length;i++){
                ctx = getBindData(doms[i]);
                ctx.type && Method[ctx.type] && Method[ctx.type](dosm[i],ctx);
            }
        }
    }();
    window.VM = VM;
})();