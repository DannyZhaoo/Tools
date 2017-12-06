/**
 * @file 动态加载工具
 */

export default class Load {

    /**
     * 异步加载js文件
     * @param {string} url 
     * @param {function} callback 
     */
    static loadScript(url, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';

        if (script.readyState) {    // IE
            script.onreadystatechange = function () {
                if (script.readyState === 'loaded' || script.readyState === 'complete') {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {    // 其他浏览器
            script.onload = function () {
                callback();
            };
        }
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    /**
     * 异步加载css文件
     * @param {string} url
     */
    static loadCss(url) {
        var css = document.createElement('link');
        css.type = 'text/css';
        css.href = url;
        document.getElementsByTagName('head')[0].appendChild(css);
    }

}