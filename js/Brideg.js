/**
 * 桥接模式
 */

 function  changeColor(dom,color,bg){
     //设置元素的字体颜色
     dom.style.color = color;

     //设置元素的背景颜色
     dom.style.background = bg;
 }

 //测试

 span[0].onmouseout = function(){
     changeColor(this,"#ddd","#909");
 }

 span[1].onmouseover =function(){
     changeColor(this.getElementsByTagName("strong")[1],"#000","red")
 } 

 /**
  * 实例
  */

function Speed(x,y) {
    this.x = x;
    this.y = y;
}

Speed.prototype.run = function(){
    console.log("开始走动");
}

function Color(cl){
    this.color = cl;
}

Color.prototype.draw = function(){
    console.log("绘制色彩");
}

function Shape(sp){
    this.shape = sp;
}

Shape.prototype.change = function(){
    console.log("边形")
}

//创建一个类
function Ball(x,y,c){
    this.speed = new Speed(x,y);
    this.color = new Color(c);
}

Ball.prototype.init = function(){
    this.speed.run();

    this.color.draw()
}

