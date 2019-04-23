/**
 * MVC模式
 */

 window.onload = function(){
     //初始化MVC对象
    var MVC = MVC || {};
    // 初始化MVC数据模型层
    MVC.model = function(){
        //内部数据对象
        var M = {};
        //服务端获取的数据
        M.data = {};
        //配置数据，页面加载时立即提供
        M.conf = {};
        //返回数据模型层对象操作方法
        return {
            //获取服务端数据
            getData:function(m){
                //根据数据字段获取数据
                return M.data[m];
            },
            //获取配置数据
            getConf:function(c){
                //根据配置数据字段获取配置数据
                return M.conf[c]
            },
            //设置服务端数据（通常把服务端异步获取到的数据，更新该数据）
            setData:function(m,v){
                //设置字段m对应数据v
                M.data[m] = v;
                return this;
            },
            //设置配置数据（通常在页面中执行某些操作，为做记录而更配置数据）
            setConf:function(c,v){
                //配置数据字段c对应的配置数据V
                M.conf[c] = v;
                return this;
            }
        }
    }();
    //初始化MVC视图层
    MVC.view = function(){
        //模型数据层对象操作方法引用
        var M = MVC.model;
        //内部视图创建方法对象
        var V = {};
        //获取视图接口方法
        return function(v){
            //根据视图名称返回视图（由于获取的是一个方法，需要将该执行方法执行一遍以获取相应的视图）
            V[v]()
        }
    }();
    //初始化MVC控制器层
    MVC.ctrl = function(){
        //模型数据对象操作方法引用
        var M = MVC.model;
        //视图数据层对象操作方法引用
        var V = MVC.view;

        //控制器创建方法对象
        var C = {};
    }();
 }