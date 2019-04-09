var Human = function(param){
    this.skill = param && param.skill || "保密";
    this.hobby = param && param.hobby || "保密";
}

Human.prototype = {
    getSkill:function(){
        return  this.skill;
    },
    getHobby:function(){
        return this.hobby;
    }
}

//姓名实例化
var Named = function(name){
 var that = this;
 (function(name,that){
     that.name = name;
     if (name.indexOf(' ') > -1) {
         that.FirstName = name.slice(0,name.indexOf(" "));
         that.secondName = name.slice(name.indexOf(' '))
     }
 })(name,that);
}

//职位实例化
var Work = function(work){
    var that = this;

    (function(work,that){
        switch (work) {
            case 'code':
                that.work = "工程师";
                that.workDescript = "编程";
                break;
            case 'UI':
            case 'UE':
                that.work = '设计师';
                that.workDescript = "艺术";
            case "teach":
                that.work = "教室";
                that.workDescript = "分享";
                break;
            default:
                that.work = work;
                that.workDescript = "不清楚相关的描述"
                break;
        }
    })(work,that);
}

//修改期望职位
Work.prototype.changeWork = function(work){
    this.work = work;
}
Work.prototype.changeDescript = function(setence){
    this.workDescript = setence
}



/**
 * 测试
 * @param name :姓名（全名）
 * @param work :期望职位
 */

var Person = function(name,work){
    var _person = new Human();
    _person.name = new Named(name);
    _person.work = new Work(work);
    return _person;
}


var person1 = new Person("读 心","code");
console.log(person1.skill);
console.log(person1.name.FirstName);
console.log(person1.work.work);
console.log(person1.work.workDescript);
person1.work.changeDescript("每天沉迷于编程");
console.log(person1.work.workDescript)