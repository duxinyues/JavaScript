/**
 * 委托模式
 * 统一请求的处理
 */

var Deal = {
    banner:function(){},
    aside:function(){},
    article:function(){},
    memer:function(){},
    message:function(){}
}

$.get("deal.php?",function(res){
    //数据分包
    for(var i in res){
        Deal[i] && Deal[i](res[i])
    }
})