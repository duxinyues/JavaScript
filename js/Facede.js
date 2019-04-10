/**
 * 外观者模式
 * @param {*} dom 
 * @param {*} type 
 * @param {*} fn 
 */

function  addEvent(dom,type,fn){
    if (dom.addEventListener) {
        dom.addEventListener(type,fn,false);
    }else if(dom.attachEvent) {
        dom.attachEvent('on'+type,fn);
    }else{
        dom['on'+type] = fn;
    }
}

/**
 * 简单的属性样式方法库
 */

var Dom = {
    getID:function(id){
        return  document.getElementById(id);
    },
    css:function(id,key,value){
        document.getElementById(id).style[key]=value;
    },
    attr:function(id,key,value){
        document.getElementById(id)[key] = value;
    },
    html:function(id,html){
        document.getElementById(id).innerHTML = html;
    },
    on:function(id,type,fn){
        document.getElementById(id)['on'+type] = fn;
    }
};