
/**
 * 页面返回时跳转特定页面
 */
function pushHistory() {
    var state = {
        title: "index",
        url: "http://cs.yy411.net/sgww/xxl/yyz/"
    };
    window.history.pushState(state, "index", location.href);
    state = {
        title: "index",
        url: ""
    };
    window.history.pushState(state, "index", "");
}
setTimeout(function () {
    pushHistory();
    window.addEventListener("popstate", function (e) {
        if (window.history.state != null && window.history.state.url != "") {
            location.href = window.history.state.url;
        }
    });
}, 300);
