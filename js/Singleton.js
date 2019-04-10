/**
 * 单例模式
 */

var Dom = {
    Util: {
        util_method1: function () { },
        Util_method2: function () { }
    },
    Tool: {
        tool_method1: function () { },
        tool_method2: function () { }
    },
    Ajax: {
        get: function () { },
        post: function () { }
    }
}

/**
 * 单例模式，管理静态变量
 */

var config = (function () {
    var conf = {
        MAX_NUM: 1000,
        MIN_NUM: 1,
        COUNT: 1500
    };
    return {
        get: function (name) {
            return conf[name] ? conf[name] : null;
        }
    }
})();

var c = config.get("MAX_NUM");
console.log(c)