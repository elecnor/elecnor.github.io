<?php

$x =[
    array ('MV09-001', '-45,3779826', '-11,4461770', 'Liberado Passagem'),
    array ('MV09-001', '-45,3775392', '-11,4615335', 'Liberado Passagem'),
    array ('MV09-001', '-45,3622907', '-11,4588078', 'Liberado Passagem'),
    array ('MV09-001', '-45,3640608', '-11,4504804', 'Liberado Passagem'),
    array ('MV09-001', '-45,3678495', '-11,4439044', 'Liberado Passagem'),
    array ('MV09-001', '-45,3779826', '-11,4461770', 'Liberado Passagem'),
    array ('MV09-002', '-45,3955084', '-11,5507290', 'Embargado'),
    array ('MV09-002', '-45,3967122', '-11,5562614', 'Embargado'),
    array ('MV09-002', '-45,4004924', '-11,5593646', 'Embargado'),
    array ('MV09-002', '-45,3982837', '-11,5622980', 'Embargado'),
    array ('MV09-002', '-45,3924773', '-11,5573993', 'Embargado'),
    array ('MV09-002', '-45,3952694', '-11,5483245', 'Embargado'),
    array ('MV09-002', '-45,3955084', '-11,5507290', 'Embargado'),
    array ('MV10-001', '-45,3910982', '-11,5277914', 'Negociado'),
    array ('MV10-001', '-45,3862532', '-11,5234180', 'Negociado'),
    array ('MV10-001', '-45,3847924', '-11,5235633', 'Negociado'),
    array ('MV10-001', '-45,3823353', '-11,5141730', 'Negociado'),
    array ('MV10-001', '-45,3870112', '-11,5141363', 'Negociado'),
    array ('MV10-001', '-45,3910982', '-11,5277914', 'Negociado'),
    array ('MV13-004', '-45,3952694', '-11,5483245', 'Liberado Verbal'),
    array ('MV13-004', '-45,3903211', '-11,5490745', 'Liberado Verbal'),
    array ('MV13-004', '-45,3857337', '-11,5286832', 'Liberado Verbal'),
    array ('MV13-004', '-45,3910982', '-11,5277914', 'Liberado Verbal'),
    array ('MV13-004', '-45,3952694', '-11,5483245', 'Liberado Verbal')
    
];

for ($i = 0; $i < count($x); $i++) {
    $a[$i] = $x[$i][0];
    $b = implode(",", $a);
    $c = array_unique($a);
    
} // end for

foreach ($c as $temp) {
    $e[] = $temp;
}

$d = substr_count($b, $c[19]);

var_dump($a);

var_dump($b);

var_dump($c);

var_dump($d);

var_dump($e);

