<?php

header('Content-type: application/json; charset=utf-8');

$name = 'Muhammad Nail Mumtaza';
$address = 'Jalan Palagan Tentara Pelajar KM 10 Gg Gunandi no 2 Rejodani Sariharjo Ngaglik Sleman';

$hobies =  array('Bermain piano','Futsal', 'browsing', 'membaca berita aktual berkaitan dengan teknologi dan bisnis');

class schoolObj {
    function highSchool(){
        return 'MA Muallimin Muhammadiyah';
    }
    function university(){
        return 'Universitas Gadjah Mada';
    }
}
$school = new schoolObj;

$skillArr = array('0'=>'Java, C++, Python, PHP');
$skill = new ArrayObject($skillArr);
function biodataku($strName, $strAddress, $strHobies, $strMarried, $strSchool, $strSkill){
    $json = array(
        'Name' => $strName,
        'Address' => $strAddress,
        'Hobies' => $strHobies,
        'is_Married' => ($strMarried =FALSE)? 'Menikah': 'Belum menikah',
        'List_School' => $strSchool,
        'Skills' => $strSkill,
        'interest_in_coding' => ($strInterest = TRUE)? 'Interest' : 'Not Interest',
    );
    return json_encode($json);
}

echo biodataku($name, $address, $hobies, FALSE, $school->university(), $skill[0]);
