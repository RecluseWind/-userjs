// ==UserScript==
// @name         微博 HTML5版 去除广告
// @namespace    https://github.com/RecluseWind/userjs
// @version      0.1.4
// @description  weibo html5 no-ad
// @author       RecluseWind
// @match        https://m.weibo.cn/*
// @include      https://m.weibo.cn/*
// @grant        none
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js
// @updateURL    https://github.com/RecluseWind/userjs/raw/master/src/weibo-html5-noad.js
//@license       MIT
// ==/UserScript==
//参考：https://blog.csdn.net/weixin_43897573/article/details/106462979
jQuery.noConflict();
(function($) {
    'use strict';
	//在dom加载完毕后执行方法
    $(document).ready(function() {
        refresh()
        var url=window.location.href;
        setInterval(function(){
            if(window.location.href!=url){
                url=window.location.href;
                refresh();
            }
            refresh();
        }, 1000);
		//清理广告方法
        function refresh(){
            setTimeout(function(){
            //判断每个div.wb-item-wrap,是否有后代元素div.m-ctrl-box
                $("div.wb-item-wrap").each(function() {
                    if ($(this).find("div.m-ctrl-box").length>0) {
                        $(this).remove();
                        //console.log("清除广告微博成功");
                    }
                })
            }, 1000);
        };
    });
})(jQuery);