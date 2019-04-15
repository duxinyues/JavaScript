/**
 * 页面返回跳转特定连接
 */
function pushHistory() {
    var state = {
        title: "index",
        url: "http://4g.anslp.net/2018/home/"
    };
    window.history.pushState(state, "index", location.href);
    state = {
        title: "index",
        url: ""
    };
    window.history.pushState(state, "index", "");
}

pushHistory();
    window.addEventListener("popstate", function (e) {
        if (window.history.state != null && window.history.state.url != "") {
            location.href = window.history.state.url;
        }
    });
