<?php include_once './main.php';

// xml file --------------------------------------------------------------------
$xml = new SimpleXMLElement(
        '<?xml version="1.0" encoding="UTF-8"?>'.
        '<kml '.
            'xmlns="http://www.opengis.net/kml/2.2" '.
            'xmlns:gx="http://www.google.com/kml/ext/2.2" '.
            'xmlns:kml="http://www.opengis.net/kml/2.2" '.
            'xmlns:atom="http://www.w3.org/2005/Atom">'.
        '</kml>');

// document --------------------------------------------------------------------
$document = $xml->addChild($tagDocument);
$document->addChild($tagName, "LT 230 KV Corumbá II - Anastácio (CS)");

// line ------------------------------------------------------------------------
$line = $document->addChild($tagFolder);

    $line_tag01 = $line->addChild($tagName, "Traçado");
    $line_tag02 = $line->addChild($tagPlacemark);
    
        $line_tag03 = $line_tag02->addChild($tagName, "LT");
        $line_tag04 = $line_tag02->addChild($tagLineString);
        
            $line_tag05 = $line_tag04->addChild($tagCoordinates, $path);
            
// point -----------------------------------------------------------------------
$point = $document->addChild($tagFolder);

    $point_tag01 = $point->addChild($tagName, "Torres");
    
    for ($x = 0; $x < count($data); $x++) {
    $point_tag02 = $point->addChild($tagPlacemark);
    
        $point_tag03 = $point_tag02->addChild($tagName, $data[$x][0]);
        $point_tag04 = $point_tag02->addChild($tagPoint);
        
            $point_tag05 = $point_tag04->addChild($tagCoordinates, $data[$x][1] . "," . $data[$x][2]);
            
    } // end for
            
// polygon ---------------------------------------------------------------------
$polygon = $document->addChild($tagFolder);

    $polygon_tag01 = $polygon->addChild($tagName, "Fundiário");
    
    for ($x = 0; $x < count($owners); $x++) {
    $polygon_tag02 = $polygon->addChild($tagPlacemark);
    
        $polygon_tag03 = $polygon_tag02->addChild($tagName, $owners[$x][0]);
        $polygon_tag04 = $polygon_tag02->addChild($tagPolygon);

            $polygon_tag05 = $polygon_tag04->addChild($tagOuterBoundaryIs);

                $polygon_tag06 = $polygon_tag05->addChild($tagLinearRing);

                    $polygon_tag07 = $polygon_tag06->addChild($tagCoordinates, $area[$x][1]);
                    
    } //end for
                    
// header ----------------------------------------------------------------------
header('Content-type: text/xml');

/* export kml --------------------------------------------------------------- */
//header('Content-Disposition: attachment; filename="text.kml"');

print($xml->asXML());