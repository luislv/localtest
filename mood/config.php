<?php
$host="localhost";
$db_user="root";
$db_pass="root";
$db_name="demo";
$timezone="Asia/Shanghai";

$link=mysql_connect($host,$db_user,$db_pass);
mysql_select_db($db_name,$link);
mysql_query("SET names UTF8");

header("Content-Type: text/html; charset=utf-8");

//心情说明，用半角逗号隔开
$moodname='震惊,不解,愤怒,杯具,无聊,高兴,支持,超赞';

//心情图标文件，用半角逗号隔开(images/目录)
$moodpic='a1.gif,a2.gif,a3.gif,a4.gif,a5.gif,a6.gif,a7.gif,a8.gif';

//统计心情柱图标最大高度
$moodpicheight=80;
?>