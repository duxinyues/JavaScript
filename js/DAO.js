/**
 * 本地存储类
 * @param  perId   本地存储数据前缀
 * @param timeSign   时间戳和存储数据之间的拼接符
 */
var BaseLocalStorage = function(preId,timeSign){
    //定义本地存储数据库的前缀
    this.preId = preId;
    this.timeSign = timeSign || '|-|';
}

//本地存储类原型方法
BaseLocalStorage.prototype = {
    status :{
        SUCCSS:0,   //成功
        FAULURE:1,  //失败
        OVERFLOW:2,  //溢出
        TIMEOUT:3  //过期
    },

    //保存本地数据
    storage:localStorage || window.localStorage,
    getKey:function(key){
        return this.preId+key;
    },
    /**
     * 添加（修改）数据
     * @param {*} key 数据字段标识
     * @param {*} value  数据值
     * @param {*} callback  回调函数
     * @param {*} time  添加时间
     */
    set:function(key,value,callback,time){
        //默认操作状态成功
        var status = this.status.SUCCSS;
        var key = this.getKey(key);

        try {
            //时间参数获取时间戳
            time = new Date().getTime(key) || time.getTime();
        } catch (e) {
            //传入时间参数或者时间参数有误时，默认时间为一个月
            time = new Date().getTime() + 31 * 24 * 60 * 60 * 1000;
        }

        try {
            //向数据库中添加数据
            this.storage.setItem(key,time+this.timeSign + value);
        } catch (e) {
            //溢出失败，返回溢出状态
            status = this.status.OVERFLOW;
        }
        //有回调函数就执行回调函数并且传入参数操作状态。。真实数据字段标识以及存储数据值
        callback && callback.call(this,status,key,value);
    },
    /**
     * 获取数据
     * @param {*} key 数据字段标识 
     * @param {*} callback  回调函数
     */
    get:function(key,callback){
        //默认操作状态是成功的
        var sattus = this.status.SUCCSS;
        var key = this.getKey(key);
        var value = null;
        //拼接符的长度
        var timeSignLen = this.timeSign.length;

        //缓存当前对象
        var that = this;
        //时间戳和存储数据拼接的起始位置
        var index;
        var time;
        var result;

        try {
            value = that.storage.getItem(key);
        } catch (e) {
            result = {
                status:that.status.FAULURE,
                value:null
            };
            callback && callback.call(this,result.status,result.value);
            return result
        }
        if (value) {
            index = value.indexOf(that.timeSign);
            time = +value.slice(0,index);
            if (new Date(time).getTime() > new Date().getTime() || time == 0) {
                value = value.slice(index+timeSignLen);
            }else{
                value = null;
                status = that.status.TIMEOUT;
                that.remove();
            }
        }else{
            //未获取数据字符串状态为失败状态
            status = that.status.FAULURE;
        }
        result = {
            status:status,
            value:value
        };
        callback && callback.call(this,result.status,result.value);
        return result
    },
    /**
     * 删除数据
     * @param {*} key 数据字段标识
     * @param {*} callback  回调函数
     */
    remove:function(key,callback){
        var status = this.status.FAULURE;
        var key = this.getKey(key);
        var value = null;

        try {
            value = this.storage.getItem(key);
        } catch (e) {}
        if (value) {
            try {
                this.storage.removeItem(key);

                status = this.status.SUCCSS
            } catch (e) {}
        }
        callback && callback.call(this,status,status>0 ? null : value.slice(value.indexOf(this.timeSign) + this.timeSign.length))
    }
}

/**
 * 在NodeJS的配置项中设置
 * config.js
 */

module.exports = {
    DB:{
        db:"demo",
        host:"localhost",
        port:3306
    }
}

/**
 * db.js
 * 引用mongodb模块
 */
var mongodb = require("mongedb");
var config = require("./config").DB;

var d = new mongodb.Db(
    config.db,  //数据库名
    new mongodb.Server(
        config.host,  //主机
        config.port, //端口号
        {auto_reconnect:true}  //自动连接
    ),
    {safe:true}
);

exports.DB = function(DB){
    return {
        /**
         * 插入数据
         * @param data
         * @param success
         * @param fail  
         */
        insert:function(data,success,fail){
            connect(col,function(col,db){
                col.insert(data,function(err,docs){
                    if(err){
                        fail && fail(err);
                    }else{
                        success && success(docs);
                    }
                    db.close();
                });
            });
        },
        /**
         * 删除数据
         * @param data
         * @param success 
         * @param faill
         */
        remove:function(data,success,fail){
            connect(col,function(col,db){
                col.remove(data,function(err,len){
                    if(err){
                        fail && fail(err);
                    }else{
                        success && success(len);
                    }
                    db.close()
                })
            })
        },
        /**
         * 更新数据
         * @param con 
         * @param doc
         * @param success 
         * @param faill
         */
        update:function(con,doc,success,fail){
            connect(col,function(col,db){
                col.update(con,doc,function(err,len){
                    if(err){
                        fail && fail(err);
                    }else{
                        success && success(len)
                    }
                    db.close();
                })
            })
        },
        /**
         * 查找数据
         * @param con
         * @param success
         * @param fail
         */
        find:function(con,success,fail){
            connect(col,function(col,db){
                col.find(con).toArray(function(err,docs){
                    if(err){
                        fail && fail(err)
                    }else{
                        success && success(docs);
                    }
                    db.close();
                })
            })
        }
    }
}

/**
 * 打开数据库，操作集合
 * @param col  集合明个
 * @param fn  操作方法
 */
function connect(col,fn){
    d.open(function(err,db){
        if(err){
            throw err;
        }else{
            db.collection(col,function(err,col){
                if(err){
                    throw err;
                }else{
                    fn && fn(col,db);
                }
            });
        }
    });
}

//test
var book = DB("book");
book.insert({title:"java",type:"js"})