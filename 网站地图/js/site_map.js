
$(function(){
		$("div.nav_common>ul>li:first-child").css("border-top","none");
		$("div.a_content>a:last-child").css("border-right","none");
		$("div.floor_nav_fix>ul>li:last-child").css("border-bottom","none");

    //右侧列表点击折叠
    $(".common_title .tt_btn").bind("click",
        function () {
            var t_box = $(this).parents(".nav_common");
            var t_con = $(this).parent().next(".common_con");
            var t_tit_h = $(this).parent().height();
            var t_con_h = t_con.height();
            var t_box_h = t_tit_h + t_con_h;
            if (t_con.is(":hidden")) {
                $(this).removeClass("close");
                t_con.css("display", "block");
                t_box.animate({height: t_box_h}, 300);
            } else {
                $(this).addClass("close");
                t_con.css("border", "none")
                t_box.animate({height: t_tit_h}, 300, function () {
                    t_con.css("display", "none");
                });
            }
        }
    );
	})
//$(".floor_nav_fix li").hover(function(){
//    $(".floor_nav_fix li").find("a").removeClass("curr");
//    $(this).find("a").addClass("curr");
//})


jQuery(document).ready(function($) {
	try{
	var f1 = $('.floor[data-slide="1"]').offset().top;
	var fs = $('.floor_nav_fix').children().size();
	var fss = new Array();
	for (i = 0; i < fs; i++) {
		j = i + 1;
		fss[i] = $('.floor[data-slide="' + j + '"]').offset().top - 39;
	}

    function docScroll (){
        var currentTOP = $(window).scrollTop();
        var skipfloorTop = $(window).scrollTop() + 20 - f1;
        var isIE=!!window.ActiveXObject;
        var isIE6=isIE&&!window.XMLHttpRequest;
        var f_pos = $("#footer").offset().top;
        var t_pos = f_pos - $('#skipfloor').height() - 39;

        if(currentTOP > f1){    //垂直滚动条钓offset 大于90时。
            if(currentTOP > t_pos){
                $('#skipfloor').css("position","absolute")
                $('#skipfloor').css("top", t_pos + 34)
            }else{
                if (isIE6){
                    $('#skipfloor').css("top", skipfloorTop + f1 + 19)
                }else{
                    $('#skipfloor').css("position","fixed")
                    $('#skipfloor').css("top", "38px")
                }

            }
        }else{
            $('#skipfloor').css("position","absolute")
            $('#skipfloor').css("top",f1 + 39)
        }
    }
        docScroll ()
	$(window).scroll(function(){
        docScroll ()
	});

}catch(e){
	console.log(e);
}

});

function gotop() {
	$('body,html').animate({
		scrollTop : 0
	}, 200);
}
function gotofloor(thiz) {
	dataslide = $(thiz).attr('data-slide');
	var pos = $('.floor[data-slide="' + dataslide + '"]').offset().top;
	$("html,body").animate({
		scrollTop : pos+1
	},200);
	$(".floor_nav_fix li").find('a').removeClass('curr');
	$(thiz).find('a').addClass('curr');
}