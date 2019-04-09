/**
 * 图片轮播类
 */

var LoopImages = function(imgArr,container){
    this.imagesArray = imgArr;
    this.container = container;
}

LoopImages.prototype = {
    //创建轮播图
    createImage:function(){},

    //切换图片
    changeImage:function(){}
}
LoopImages.prototype.getImageLength = function(){
    return this.imagesArray.length;
}

//上下切换类
var SlideLoopImg = function(imgArr,container){
    //构造函数继承图片轮播类
    LoopImages.call(this,imgArr,container);
}

SlideLoopImg.prototype = new LoopImages();
SlideLoopImg.prototype.changeImage = function(){

}

//渐隐切换

var FadeLoopImg = function(imgArr,container,arrow){
    LoopImages.call(this,imgArr,container);
    this.arrow = arrow;
}
FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage = function(){

}
FadeLoopImg.prototype.getContainer = function(){
    return this.container;
}



/**
 * 测试
 */

var fadeImg = new FadeLoopImg(
    ['img.jpg','img1.png'],'slide',['left.png','right.png']
);

console.log(fadeImg.container); //silde
console.log(fadeImg.getContainer()); // slide

console.log(fadeImg.getImageLength());



/**
 * 原型对象的复制方法
 * 基于已存在的模板对象克隆出新的对象模式
 * @param arguments[0]   模板对象
 * 
 * 对模板引用类型的属性本质上是浅复制（引用类型属性共享）
 */

function prototypeExtend(){
    var F = function(){};
    var args = arguments; //模板对象参数序列
    var i = 0;
    var len = args.length;

    for(;i<len;i++){
        //遍历每个模板中的属性
        for(var j in args[i]){
            //把属性复制到缓存类中
            F.prototype[j] = args[i][j];
        }
    }
    return new F();
}