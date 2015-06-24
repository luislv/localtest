<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/6/24
 * Time: 10:43
 */
//$data[] = 'hello';
$data = $_POST['data'];
// 演示可能出现的数据库部分 注：未连接数据库, 该部分只是演示说明
// $sql = 'SELECT * FROM `TABLE` WHERE ID = '.$data.';';
// $query = mysql_query( $sql );
// $result = mysql_fetch_row( $query );
//输出响应
echo $data;