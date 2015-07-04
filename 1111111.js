document.write("<script src='http://pv.sohu.com/cityjson?ie=utf-8' type='text/javascript'></script>");
var statIdName = "vlstatId";
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + ";path=/;domain=91160.com";
}
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
function getTimestamp() {
    var timestamp = Date.parse(new Date());
    return timestamp;
}
function genStatId() {
    var cookieId = getTimestamp();
    cookieId = "vlstat" + "-" + cookieId + "-" + Math.round(Math.random() * 3000000000);
    return cookieId;
}
function setStatId() {
    var cookieId = genStatId();
    setCookie(statIdName, cookieId, 365);
}
function getStatId() {
    var statId = getCookie(statIdName);
    if (statId != null && statId.length > 0) {
        return statId;
    } else {
        setStatId();
        return getStatId();
    }
}
function getUA() {
    var ua = navigator.userAgent;
    if (ua.length > 250) {
        ua = ua.substring(0, 250);
    }
    return ua;
}
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
function getPlatform() {
    var ua = navigator.userAgent;
    if (ua.indexOf("Windows NT 5.1") != -1)return "Windows XP";
    if (ua.indexOf("Windows NT 6.0") != -1)return "Windows Vista";
    if (ua.indexOf("Windows NT 6.1") != -1)return "Windows 7";
    if (ua.indexOf("Windows NT 6.2") != -1)return "Windows 8";
    if (ua.indexOf("Windows NT 10.0") != -1)return "Windows 10";
    if (ua.indexOf("iPhone") != -1)return "iPhone";
    if (ua.indexOf("iPad") != -1)return "iPad";
    if (ua.indexOf("Linux") != -1) {
        var index = ua.indexOf("Android");
        if (index != -1) {
            var os = ua.slice(index, index + 13);
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
function createXMLHttpRequest() {
    if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    } else if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
}
$(function () {
    var postdata = {
        'browser': getBrower(),
        'operateSystem': getPlatform(),
        'currentUrl': encodeURIComponent(document.URL),
        'previousUrl': encodeURIComponent(document.referrer),
        'cookieId': getStatId(),
        'currentTime': currentTime(),
        'ip': returnCitySN["cip"],
        'area': returnCitySN["cname"]
    };
    $.ajax({
        type: "get",
        async: false,
        url: "http://collect.91160.com/logStatistics/",
        dataType: "jsonp",
        data: postdata,
        jsonp: "callbackparam",
        jsonpCallback: "success_jsonpCallback"
    });
});