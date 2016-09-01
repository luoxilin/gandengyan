<?php
$action = $_GET['action'];

define('RESULT_PATH', 'result.json');
define('COLOR_TYPE', "return array(
    'green' => array(
        0 => '#779E00',
        1 => '#94B62D',
        2 => '#B7F200',
        3 => '#CBF93E',
        4 => '#D7F970',
    ),
    'red' => array(
        0 => '#A30010',
        1 => '#BC2E3C',
        2 => '#F90018',
        3 => '#FC3E50',
        4 => '#FC707D'
    )
);");

$arr['success'] = 0;
$arr['msg'] = 'Error~~';

if ($action == 'save') { //存储比赛记录
    $json_string = $_GET['jsonString'];
    file_put_contents(RESULT_PATH, $json_string."\n", FILE_APPEND);

    $arr['success'] = 1;
    $arr['msg'] = 'OK~~';

    echo json_encode($arr);
}
elseif ($action == 'read') { //读取比赛记录
    $resultList = getAllResult();

    $arr['success'] = 1;
    $arr['msg'] = 'OK~~';
    $arr['userList'] = getUserList($resultList);
    $arr['gameList'] = getGameList($resultList);

    echo json_encode($arr);
}
elseif ($action == 'searchByGame') { //根据比赛场次查询
    $game = $_GET['game'];
    if ($game) {
        $resultList = getAllResult();

        $arr['success'] = 1;
        $arr['msg'] = 'OK~~';
        $arr['chartData'] = searchByGame($resultList, $game);
    }

    echo json_encode($arr);
}
elseif ($action == 'searchByName') { //根据比赛选手查询
    $name = $_GET['name'];
    if ($name) {
        $resultList = getAllResult();

        $arr['success'] = 1;
        $arr['msg'] = 'OK~~';
        $arr['chartData'] = searchByName($resultList, $name);
    }

    echo json_encode($arr);
}

function getAllResult() {
    $results = file(RESULT_PATH);
    $resultList = array();
    foreach ($results as $result) {
        $resultList[] = json_decode($result);
    }

    return $resultList;
}

function getUserList($resultList) {
    $userList = array();
    foreach ($resultList as $result) {
        foreach ($result as $item) {
            if (is_array($item)) {
                foreach ($item as $data) {
                    $userList[] = $data->name;
                }
            }
        }
    }
    $userList = array_filter(array_unique($userList));
    $userOption = '<option value="0">请选择一个小伙伴姓名</option>';
    foreach ($userList as $item) {
        $userOption .= '<option value="'.$item.'">'.$item.'</option>';
    }

    return $userOption;
}

function getGameList($resultList) {
    $gameList = array();
    foreach ($resultList as $result) {
            $gameList[] = $result->time;
    }
    $gameList = array_filter(array_unique($gameList));
    $gameOption = '<option value="0">请选择一场比赛</option>';
    foreach ($gameList as $item) {
        $gameOption .= '<option value="'.$item.'">'.$item.'</option>';
    }

    return $gameOption;
}

function searchByGame($resultList, $game) {
    $chartList = array();
    foreach ($resultList as $result) {
       if ($game == $result->time) {
           foreach ($result as $item) {
               if (is_array($item)) {
                   foreach ($item as $data) {
                       $chartList[]= $data;
                   }
               }
           }
       }
    }

    $chartList = sortByField($chartList, 'SORT_DESC', 'total');
    $data = array();
    $series = array();
    $idx = 0;
    $COLOR_TYPE = eval(COLOR_TYPE);
    foreach ($chartList as $chart) {
        $item = array();
        $item['name'] = $chart->name;
        if ($chart->total >= 0) {
            $item['color'] = $COLOR_TYPE['green'][$idx];
        }
        else {
            $item['color'] = $COLOR_TYPE['red'][$idx];
        }
        $item['y'] = abs($chart->total);
        $item['drilldown'] = $chart->name;

        $score = explode(",", $chart->detail);

        $res['id'] = $chart->name;
        $scoreList = array();
        $gameIdx = 0;
        foreach ($score as $a) {
            if ($a) {
                $scoreList[$gameIdx] = intval($a);
                $gameIdx++;
            }
        }
        $res['data'] = $scoreList;

        $data[] = $item;
        $series[] = $res;
        $idx++;
    }

    $list['data'] = $data;
    $list['series'] = $series;
    return $list;
}

function searchByName($resultList, $name) {
    $chartList = array();
    $categoryList = array();
    $chartList['name'] = $name;
    foreach ($resultList as $result) {
        foreach ($result as $item) {
            if (is_array($item)) {
                foreach ($item as $data) {
                    if ($name == $data->name) {
                        $categoryList[] = $result->time;
                        $chartList['data'][] = intval($data->total);
                    }
                }
            }
        }
    }

    $list['series'][] = $chartList;
    $list['categories'] = $categoryList;

    return $list;
}

function sortByField($resultList, $direction, $field) {
    $sort = array(
        'direction' => $direction,   //排序顺序标志 SORT_DESC 降序；SORT_ASC 升序
        'field'     => $field,       //排序字段
    );
    $arrSort = array();
    foreach($resultList AS $uniqid => $row){
        foreach($row AS $key=>$value){
            $arrSort[$key][$uniqid] = $value;
        }
    }
    if($sort['direction']){
        array_multisort($arrSort[$sort['field']], constant($sort['direction']), $resultList);
    }

    return $resultList;
}