/**
 * 寄生式继承
 */
//原型继承
function inheritObject(o) {
    function F() { }
    F.prototype = o;
    return new F();
}
/**
 * 寄生组合式继承
 * 终极继承者
 * 参数  subClass 子类
 * 参数 superClass 父类
 */

function inheritPrototype(subClass, superClass) {

    var p = inheritObject(superClass.prototype);

    //防止在重写子类原型导致子类的constructor属性被修改
    p.constructor = subClass;

    //设置子类原型
    subClass.prototype = p;
};


/**
 * 组合模式
 * 新闻模块的实例
 */
var News = function(){
    this.children = [];
    this.element = null;
}

News.prototype = {
    init:function(){
        console.log("暂停服务")
    },
    add:function(){
        console.log("方法")
    },
    getElement:function(){
        console.log("重构方法")
    }
} 

//容器类的构造函数
var Container = function(id,parent){
    News.call(this);
    this.id = id;
    this.parent = parent;

    this.init();
}

//寄生式继承父类原型方法
inheritPrototype(Container,News);

//构建方法
Container.prototype.init = function(){
    this.element = document.createElement("ul");
    this.element.id = this.id;
    this.element.className = "new-container";
}

Container.prototype.add = function(child){
    this.children.push(child);

    this.element.appendChild(child.getElement());
    return this;
}

Container.prototype.getElement = function(){
    return this.element;
}

//显示方法
Container.prototype.show = function(){
    this.parent.appendChild(this.element);
}

//下层级的行成员集合，新闻组合体类的实现方法

var Item = function(classname){
    News.call(this);
    this.classname = classname || "";
    this.init();
}

inheritPrototype(Item,News);
Item.prototype.init = function(){
    this.element = document.createElement("li");
    this.element.className = this.classname;
}

Item.prototype.add = function(child){
    //在子元素中插入元素
    this.children.push(child);

    //插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;
}

Item.prototype.getElement = function(){
    return this.element;
}


var NewsGroup = function(classname){
    News.call(this);
    this.classname = classname || "";
    this.init();
}

inheritPrototype(NewsGroup,News);

NewsGroup.prototype.init = function(){
    this.element = docuemnt.createElement("div");
    this.element.classname = this.classname;
}

NewsGroup.prototype.add = function(child){
    this.children.push(child);

    this.element.appendChild(child.getElement());
    return this;
}

NewsGroup.prototype.getElement = function(){
    return this.element;
}

var ImageNews = function(url,href,classname){
    News.call(this);
    this.url = url || '';
    this.href = href || "#";
    this.classname = classname || "normal";
    this.init();
}

inheritPrototype(ImageNews,News);
ImageNews.prototype.init = function(){
    this.element = document.createElement("a");
    var img = new Image();
    img.src = this.url;
    this.element.appendChild(img);
    this.element.className = "image-news "+tis.classname;
    this.element.href = this.href;
}

ImageNews.prototype.add = function(){}
ImageNews.prototype.getElement = function(){
    return this.element;
}

//基类新闻
var IconNews = function(text,href,type){
    News.call(this);
    this.text = text || "";
    this.href = href || "#";
    this.type = type || "video";
    this.init();
}

inheritPrototype(IconNews,News);
IconNews.prototype.init = function(){
    this.element = document.createElement("a");
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = "icon "+this.type
}

IconNews.prototype.add = function(){}
IconNews.prototype.getElement = function(){
    return this.element;
}

var EasyNews = function(text,href){
    News.call(this);
    this.text = text || "";
    this.href = href = href || "";
    this.init();
}

inheritPrototype(EasyNews,News);
EasyNews.prototype.init = function(){
    this.element = document.createElement("a");
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = "text";
}

EasyNews.prototype.add = function(){}
EasyNews.prototype.getElement = function(){
    return this.element;
}

var TypeNews = function(text,href,type,pos){
    News.call(this);
    this.text = text || "";
    this.href = href || "";
    this.typs = type || "";
    this.pos = pos || "left";
    this.init();
}
inheritPrototype(TypeNews,News);
TypeNews.prototype.init = function(){
    this.element = document.createElement("a");
    if (this.pos === "left") {
        this.element.innerHTML = '['+this.type+']'+this.text;
    }else{
        this.element.innerHtml = this.text +' ['+this.type+']';
    }

    this.element.href = this.href;
    this.element.className = "text"
}

TypeNews.prototype.add = function(){}
TypeNews.prototype.getElement = function(){
    return this.element;
}


//测试
var new1 = new Container("news",document.body);

new1.add(
    new Item("normal").add(
        new IconNews("xdghdgfh","#","video")
    )
).add(
    new Item("normal").add(
        new IconNews("fgbkjdfh","#","live")
    )
)