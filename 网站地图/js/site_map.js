$(function(){
		$("div.nav_common>ul>li:first-child").css("border-top","none");
		$("div.a_content>a:last-child").css("border-right","none");
		$("div.floor_nav_fix>ul>li:last-child").css("border-bottom","none");


		// $("div.floor_nav_fix>ul>li>a").click(function(event) {
		// 		$(this).addClass('fix_bg').parent().siblings().find('a').removeClass('fix_bg');
		// 	});
	})
jQuery(document).ready(function($) {
	try{
	var f1 = $('.floor[data-slide="1"]').offset().top;
	var fs = $('.floor_nav_fix').children().size();
	var fss = new Array();
	for (i = 0; i < fs; i++) {
		j = i + 1;
		fss[i] = $('.floor[data-slide="' + j + '"]').offset().top;
	}
	$(window).scroll(function(){
		var currentTOP = $(window).scrollTop();
		if(currentTOP>f1-30){
			$("#skipfloor").addClass('nav_fix');
		}else{
			$("#skipfloor").removeClass('nav_fix');
		}
		if (currentTOP <= f1) {
			$('.floor_nav_fix li').find('a').removeClass('curr');
			$('.floor_nav_fix li[data-slide="1"]').find('a').addClass('curr');
			return;
		}else{
			changefl(getFloor(currentTOP));
		}
	});
	function getFloor(fh){
		if(fs==0||fh<=f1){
			return 1;
		}
		if(fh>=fss[fs-1]){
			return fs;
		}
		for (k=0; k<fs;k++) {
			if(fh>fss[k]&&fh<fss[k+1]){
				return k+1;
			}
		}
	}
	function changefl(fno){
		$('.floor_nav_fix li').find('a').removeClass('curr');
		$('.floor_nav_fix li[data-slide="'+fno+'"]').find('a').addClass('curr');
	}
}catch(e){
	console.log(e);
}
 //   $(".floor_nav_fix li").click(function(){
 //       $(".floor_nav_fix li").find('a').removeClass('curr');
 //       $(this).find('a').addClass('curr');
  //  });
});
function gotop() {
	$('body,html').animate({
		scrollTop : 0
	}, 800);
}
function gotofloor(thiz) {
	dataslide = $(thiz).attr('data-slide');
	var pos = $('.floor[data-slide="' + dataslide + '"]').offset().top;
	$("html,body").animate({
		scrollTop : pos+1
	}, 400,function(){
        $(".floor_nav_fix li").find('a').removeClass('curr');
        $(thiz).find('a').addClass('curr');
    });

}