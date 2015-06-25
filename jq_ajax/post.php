<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2015/6/24
 * Time: 11:04
 */
if(!empty($tid)){
    $query = "SELECT * FROM 表名 WHERE 条件=".$tid;
    $dsql->SetQuery($query);
    $dsql->Execute();
    $area = "";
    while($row = $dsql->GetArray()){
        $area .=  "<option value='".$row['id']."'>".$row['name']."</option>";
    }
    echo $area;
}
