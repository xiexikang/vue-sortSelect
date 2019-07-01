// 控制移动端布局
!function (window) {
    /*移动端设计稿宽度*/
    var docWidth = 750,
        doc = window.document,
        docEl = doc.documentElement,
        rsizeEvt = 'orientationchange' in  window ? 'orientationchange' : 'resize';
    var recalc = (function refreshnRem() {
        var clientWidth = docEl.getBoundingClientRect().width;
        /*大于一定的尺寸之后不再缩放*/
        docEl.style.fontSize = Math.max(Math.min(20 * (clientWidth/docWidth),11.2),8.55)*5 + 'px';
        return refreshnRem;
    })();
    docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi)? window.devicePixelRatio:1);
    if(/iP(hone|od|ad)/.test(window.navigator.userAgent)){
        doc.documentElement.classList.add('ios');
        if(parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1],10 >=8)){
            doc.documentElement.classList.add('hairline');
        }
        if(!doc.addEventListener) return;
        window.addEventListener(rsizeEvt,recalc,false);
        doc.addEventListener('DOMContentLoaded',recalc,false);
    }
}(window);



// 防止浏览器不支持console报错(IE)
if (!window.console) {
    (function () {
        window.console = {};
        var funs = ["profiles", "memory", "_commandLineAPI", "debug", "error", "info", "log", "warn", "dir", "dirxml", "trace", "assert", "count", "markTimeline", "profile", "profileEnd", "time", "timeEnd", "timeStamp", "group", "groupCollapsed", "groupEnd"];
        for (var i = 0; i < funs.length; i++) {
            console[funs[i]] = function () {};
        }
    })();
}