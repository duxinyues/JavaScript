var Flyweight = function(){
    var created = [];
    function create(){
        var dom = document.createElement("div");
        document.getElementById("container").appendChild(dom);

        created.push(dom);

        return dom;
    }
    return {
        getDiv:function(){
            if (created.length<5) {
                return create();
            }else{
                var div = created.shift();
                created.push(div);
                return div;
            }
        }
    }
}();


/**
 * 简单的新闻分页
 */
var paper = 0;
var num = 5;
//新闻总条数
var len = article.length;
for(var i =0;i<5;i++){
    if(article[i]){
        Flyweight.getDiv().inerHTML = article[i];
    }
}

//下一页
document.getElementById("next_page").onclick = function(){
    if(article.length < 5) return;

    var n = ++paper * num % len;
    var j = 0;

    for(;j<5;j++){
        if(article[n+j]){
            Flyweight.getDiv().innerHTML = article[n+j];
        }else if(article[n+j-len]){
            Flyweight.getDiv().innerHTML = article[n+j-len];
        }else{
            Flyweight.getDiv().innerHTML = "";
        }
    }
}