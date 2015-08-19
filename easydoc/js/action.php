<?php
error_reporting(0);
$action = $_GET['act'];
if($action=='delimg'){//删除图片
	$filename = $_POST['imagename'];
	if(!empty($filename)){
		unlink('files/'.$filename);
		echo '1';
	}else{
		echo '删除失败.';
	}
}else{//上传图片
	$picname = $_FILES['mypic']['name'];
	$picsize = $_FILES['mypic']['size'];
	if ($picname != "") {
		if ($picsize > 1024000) {
			echo '图片大小不能超过1M';//限制上传大小
			exit;
		}
		$type = strstr($picname, '.');//限制上传格式
		if ($type != ".gif" && $type != ".jpg") {
			echo '图片格式不对！';
			exit;
		}
		$rand = rand(100, 999);
		$pics = date("YmdHis") . $rand . $type;//命名图片名称
		//上传路径
		$pic_path = "files/". $pics;
		move_uploaded_file($_FILES['mypic']['tmp_name'], $pic_path);
	}
	$size = round($picsize/1024,2);//转换成kb
	$arr = array(
		'name'=>$picname,
		'pic'=>$pics,
		'size'=>$size
	);
	echo json_encode($arr);//输出json数据
}
?>