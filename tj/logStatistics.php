<?php
include("connect.php");//连接数据库文件

//PHP写进数据库   $_GET['ip'] ：获取从前台传过来的ip地址  以get传参数
mysql_query("INSERT INTO Persons (browser,operateSystem ,currentUrl,previoustUrl,currentTime,ip,vlstatStayTime)
VALUES ({$_GET['browser']},{$_GET['operateSystem']},{$_GET['currentUrl']},{$_GET['previoustUrl']},{$_GET['currentTime']},{$_GET['ip']},{$_GET['vlstatStayTime']})");

//PHP写进数据库   $_POST['ip'] ：获取从前台传过来的ip地址  以post传参数
mysql_query("INSERT INTO Persons (browser,operateSystem ,currentUrl,previoustUrl,currentTime,ip)
VALUES ({$_POST['browser']},{$_POST['operateSystem']},{$_POST['currentUrl']},{$_POST['previoustUrl']},{$_POST['currentTime']},{$_POST['ip']},{$_GET['vlstatStayTime']})");

?>