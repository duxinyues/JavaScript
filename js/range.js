/**
 * 实现一个表示值范围的类
 */
function range(from,to){
    this.from = from;
    this.to =to;
}

range.prototype = {
    includes:function(x){
        return this.from <= x && x<= this.to
    },

    foreach:function(f){
        for(var x=Math.ceil(this.from);x<=this.to;x++){
            f(x)
        }
    },
    toString:function(){
        return "("+this.to.from+"..."+this.to+")"
    }
}

