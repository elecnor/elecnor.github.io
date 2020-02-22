<?php

// tags ------------------------------------------------------------------------
$tagCoordinates     = 'coordinates';
$tagDocument        = 'Document';
$tagFolder          = 'Folder';
$tagLineString      = 'LineString';
$tagLinearRing      = 'LinearRing';
$tagName            = 'name';
$tagOuterBoundaryIs = 'outerBoundaryIs';
$tagPlacemark       = 'Placemark';
$tagPoint           = 'Point';
$tagPolygon         = 'Polygon';

// data  -----------------------------------------------------------------------
$data = [
    array("SE Corumbá II", "-45.37101767633774", "-11.45267213545023", "A"),
    array("0/1",           "-45.38347193158391", "-11.50633966895036", "A"),
    array("0/2",           "-45.39471780660606", "-11.55693102531901", "B"),
    array("1/1",           "-45.42145972583288", "-11.57444868045307", "C")
    
]; // end data

// path ------------------------------------------------------------------------
for ($a = 0; $a < count($data); $a++) {
    $temp1[] = implode(",", array_slice($data[$a], 1, 2)) . " ";                // array_slice — Extract a slice of the array
    
} // end for

$path = implode("", $temp1);                                                    // implode — Join array elements with a string

// owners ----------------------------------------------------------------------
$owners = [
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

]; // end owners

for ($b = 0; $b < count($owners); $b++) {
    $temp2[] = implode(",", array_slice($owners[$b], 1, 50)) . " ";
} // end for

$area = $owners;