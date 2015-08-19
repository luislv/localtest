$(function () {
    //弹出回复框
    $(".refund").on("click", function () {
        var pTop = $(window).height() - $("#float_box").height();
        var mLeft = $("#float_box").width() / 2;
        $("#float_box").css({"top": pTop / 2, "margin-left": -mLeft, "display": "block"});
        $("body").append("<div class='float_bg'></div>");
        $("html").css("overflow", "hidden");
    })
    //图片弹出框
    $(".openImg").on("click", function () {
        var imgSrc = $(this).find("img").attr("src");
        $("#float_box3 img").attr("src", imgSrc);
        var pTop = $(window).height() - $("#float_box3").height();
        var mLeft = $("#float_box3").width() / 2;
        $("#float_box3").css({"top": pTop / 2, "margin-left": -mLeft, "display": "block"});
        $("body").append("<div class='float_bg'></div>");
        $("html").css("overflow", "hidden");
    });
    //关闭回复框
    $(".float_box .close").on("click", function () {
        $(".float_box").css("display", "none");
        $(".float_bg").remove();
        $("html").css("overflow", "");
    })
    //忽略按钮
    $(".ignore").on("click", function () {
        $(this).parents("tr").remove();
    })
    //tab 切换
    $(".tab_t span").bind("click", function () {
        var tabEq = $('.tab_t span').index($(this));
        var tabBox = $(this).parents(".tab");
        $(".tab_t span").removeClass("active");
        $(this).addClass("active");
        tabBox.find(".tab_c").css("display", "none");
        tabBox.find(".tab_c").eq(tabEq).css("display", "block")
    });
    //大标题tab 切换
    $(".tab_box_t span").bind("click", function () {
        var tabEq = $('.tab_box_t span').index($(this));
        var tabBox = $(this).parents(".tab_box");
        //   var tVal = $(this).text();
        $(".tab_box_t span").removeClass("active");
        $(this).addClass("active");
        tabBox.find(".tab_box_c").css("display", "none");
        tabBox.find(".tab_box_c").eq(tabEq).css("display", "block");
        //   $(".help_tit").text(tVal);
    });

    //全选时禁用表单

    $("#ch_all").click(
        function () {
            if (this.checked) {
                $("#form1").addClass("bg_dis");
                $("#form1 select").attr("disabled", true);
                $("#form1 input").attr("disabled", true);
            } else {
                $("#form1").removeClass("bg_dis");
                $("#form1 select").attr("disabled", false);
                $("#form1 input").attr("disabled", false);
            }
        }
    );
    //预览标题
    $("#tw_tit").change(function () {
        var tit_con = $(this).val();
        $(".tit_box h1").text(tit_con);

    });

});
//实时时间
$(function () {
    setInterval("getTime();", 1000);

})
//取得系统当前时间
function getTime() {
    var myDate = new Date();
    var date = myDate.toLocaleDateString();
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var seconds = myDate.getSeconds();
    $("#nowTime").html(date + " " + hours + ":" + minutes); //将值赋给div
}
//弹出层
function showTxt() {
    var pTop = $(window).height() - $("#float_box2").height();
    var mLeft = $("#float_box2").width() / 2;
    $("#float_box2").css({"top": pTop / 2, "margin-left": -mLeft, "display": "block"});
    $("body").append("<div class='float_bg'></div>");
    $("html").css("overflow", "hidden");
}
function showSend() {
    var pTop = $(window).height() - $("#float_box1").height();
    var mLeft = $("#float_box1").width() / 2;
    $("#float_box1").css({"top": pTop / 2, "margin-left": -mLeft, "display": "block"});
    $("body").append("<div class='float_bg'></div>");
    $("html").css("overflow", "hidden");
}

//弹出图片