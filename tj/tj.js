//引入第三方IP库
document.write("<script src='http://pv.sohu.com/cityjson?ie=utf-8' type='text/javascript'></script>");
/**
 * Created by Administrator on 2015/6/10.
 */
/**
 * 统计代码
 */
var statIdName = "vlstatId";
//var xmlHttp;
/**
 * 设置cookieId
 */
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + ";path=/;domain=91160.com";
}
/**
 * 获取cookieId
 */
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
/**
 * 获取当前时间戳
 */
function getTimestamp() {
    var timestamp = Date.parse(new Date());
    return timestamp;
}
/**
 * 生成statId
 */
function genStatId() {
    var cookieId = getTimestamp();
    cookieId = "vlstat" + "-" + cookieId + "-" + Math.round(Math.random() * 3000000000);
    return cookieId;
}
/**
 * 设置StatId
 */
function setStatId() {
    var cookieId = genStatId();
    setCookie(statIdName, cookieId, 365);
}
/**
 * 获取StatId
 */
function getStatId() {
    var statId = getCookie(statIdName);
    if (statId != null && statId.length > 0) {
        return statId;
    } else {
        setStatId();
        return getStatId();
    }
}
/**
 * 获取UA
 */
function getUA() {
    var ua = navigator.userAgent;
    if (ua.length > 250) {
        ua = ua.substring(0, 250);
    }
    return ua;
}
/**
 * 获取浏览器类型
 */
function getBrower() {
    var ua = getUA();
    if (ua.indexOf("Opera") != -1) {
        return ('Opera');
    }
    else if (ua.indexOf("MSIE") != -1) {
        return ('Internet Explorer');
    }
    else if (ua.indexOf("Firefox") != -1) {
        return ('Firefox');
    }
    else if (ua.indexOf("Chrome") != -1) {
        return ('Chrome');
    }
    else if (ua.indexOf("Netscape") != -1) {
        return ('Netscape');
    }
    else if (ua.indexOf("Safari") != -1) {
        return ('Safari');
    }
    else {
        return ('无法识别的浏览器。');
    }
}
/**
 * 获取操作系统-详细
 */
function getPlatform() {
    //获取用户代理
    var ua = navigator.userAgent;
    if (ua.indexOf("Windows NT 5.1") != -1) return "Windows XP";
    if (ua.indexOf("Windows NT 6.0") != -1) return "Windows Vista";
    if (ua.indexOf("Windows NT 6.1") != -1) return "Windows 7";
    if (ua.indexOf("Windows NT 6.2") != -1) return "Windows 8";
    if (ua.indexOf("Windows NT 10.0") != -1) return "Windows 10";
    if (ua.indexOf("iPhone") != -1) return "iPhone";
    if (ua.indexOf("iPad") != -1) return "iPad";
    if (ua.indexOf("Linux") != -1) {
        var index = ua.indexOf("Android");
        if (index != -1) {
            //os以及版本
            var os = ua.slice(index, index + 13);

            //手机型号
            var index1 = ua.lastIndexOf(";");

            var index2 = ua.indexOf("Build");
            var type = ua.slice(index1 + 1, index2);
            return type + os;
        } else {
            return "Linux";
        }
    }
    return "Unknow";

}
/**
 * 获取访问时间
 */
function currentTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var currentTime = year + "-" + month + "-" + date + "-" + hours + ":" + minutes + ":" + seconds;
    return currentTime;
}
/**
 * 构造XMLHttpRequest对象
 * @return
 */
function createXMLHttpRequest() {
    if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    } else if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
}

$(function () {
    //  var pre = encodeURIComponent(document.referrer);
    //  alert(pre);
    var postdata = {
        'browser': getBrower(),                                 //浏览器版本
        'operateSystem': getPlatform(),                          //操作系统版本
        'currentUrl': encodeURIComponent(document.URL),         //当前url
        'previousUrl': encodeURIComponent(document.referrer),   //上页url
        'cookieId': getStatId(),                                //cookie
        'currentTime': currentTime(),                           //访问页面时间
        'ip': returnCitySN["cip"],       //访问IP
        'area': returnCitySN["cname"]    //访问IP地区
    };

    $.ajax({
        type: "get",
        async: false,
        url: "http://10.1.1.132:8080/logStatistics/",
        dataType: "jsonp",
        data: postdata,
        jsonp: "callbackparam",//服务端用于接收callback调用的function名的参数
        jsonpCallback: "success_jsonpCallback"//callback的function名称

    });

});
