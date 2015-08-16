$(function () {
    $(".fileupload").wrap("<form class='myupload' action='js/action.php' method='post' enctype='multipart/form-data'></form>");
    $(".fileupload").change(function () {  //选择文件
        var upBox = $(this).parents(".tab_c");
        var showimg = upBox.find(".showimg");
        var bar = upBox.find('.bar');
        var percent = upBox.find('.percent');
        var progress = upBox.find(".progress");
        var files = upBox.find(".files");
        var btn = upBox.find(".btn").find("span");
        var delimg = upBox.find(".delimg");
        var myupload = upBox.find(".myupload");
        myupload.ajaxSubmit({
            dataType: 'json',    //数据格式为json
            beforeSend: function () {   //开始上传
                showimg.empty();        //清空显示的图片
                progress.show();        //显示进度条
                var percentVal = '0%';   //开始进度为0%
                bar.width(percentVal);    //进度条的宽度
                percent.html(percentVal);  //显示进度为0%
                btn.html("上传中...");       //上传按钮显示上传中
            },
            uploadProgress: function (event, position, total, percentComplete) {
                var percentVal = percentComplete + '%';   //获得进度
                bar.width(percentVal);    //上传进度条宽度变宽
                percent.html(percentVal);   //显示上传进度百分比
            },
            success: function (data) {   //成功
                //获得后台返回的json数据，显示文件名，大小，以及删除按钮
                files.find("em").remove();
                files.prepend("<b>" + data.name + "(" + data.size + "k)</b>");
                delimg.html("删除图片").attr("rel",data.pic);
                delimg.css("display","inline-block");
                //显示上传后的图片
                var img = "js/files/"+data.pic+"?"+Math.random();
                showimg.html("<img src='" + img + "'>");
                btn.html("本地上传"); //上传按钮还原
            },
            error: function (xhr) {
                btn.html("上传失败");
                bar.width('0')
                files.html(xhr.responseText);   //返回失败信息
            }
        });
    });
    //
    //$(".files").click(function(){
    //    $(this).remove();
    //})
    $(".delimg").on('click',function(){
        var upBox = $(this).parents(".tab_c");
        var pic = $(this).attr("rel");
        var files = $(this).parents(".files");
        var showimg = upBox.find(".showimg");
        var progress = upBox.find(".progress");
        $.post("js/action.php?act=delimg", {imagename: pic}, function (msg) {
            if (msg == 1) {
                files.find("b").remove();
                files.find(".delimg").html("删除成功.");
                showimg.empty();   //清空图片
                progresg.hide();   //隐藏进度条
            } else {
                alert(msg);
            }
        });
    });
});