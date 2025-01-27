<?php 
include_once("skin/DataGrid.class.php");
include_once("skin/Document.class.php");
include_once("base/Collection.class.php");
include_once("find/Place.class.php");

$view = $_GET['view'];

$places = NULL;

$head = array(
	array('innerHTML'=>"&nbsp;", 'width'=>"40"),
	array('innerHTML'=>"Pa&iacute;s", 'width'=>"200", 'onclick'=>"Mainform.grid.orderBy(1);")
);

if ($view == PLACE_LOCATION || $view >= PLACE_PROVINCE) {
	$head[] = array('innerHTML'=>"Provincia", 'width'=>"200", 'onclick'=>"Mainform.grid.orderBy(2);");
}

if ($view == PLACE_LOCATION || $view >= PLACE_CITI) {
	$head[] = array('innerHTML'=>"Cant&oacute;n", 'width'=>"200", 'onclick'=>"Mainform.grid.orderBy(3);");
}

if ($view == PLACE_LOCATION || $view >= PLACE_DISTRICT) {
	$head[] = array('innerHTML'=>"Distrito", 'width'=>"200", 'onclick'=>"Mainform.grid.orderBy(4);");
}

if ($view == PLACE_LOCATION || $view >= PLACE_TOWN) {
	$head[] = array('innerHTML'=>"Pueblo", 'width'=>"200", 'onclick'=>"Mainform.grid.orderBy(5);");
}

if ($view == PLACE_LOCATION) {
	$head[] = array('innerHTML'=>"Escenario", 'width'=>"200", 'onclick'=>"Mainform.grid.orderBy(6);");
}

$body = array();

switch ($view) {
case PLACE_COUNTRY: // Ver Paises
	$places = new Collection(DB_SCHEMA."_vw_countries");
	break;
case PLACE_PROVINCE: // Ver Provincias
	$places = new Collection(DB_SCHEMA."_vw_provinces");
	break;
case PLACE_CITI: // Ver Cantones
	$places = new Collection(DB_SCHEMA."_vw_cities");
	break;
case PLACE_DISTRICT: // Ver Distritos
	$places = new Collection(DB_SCHEMA."_vw_districts");
	break;
case PLACE_TOWN: // Ver Lugares
	$places = new Collection(DB_SCHEMA."_vw_towns");
	break;
case PLACE_LOCATION: // Ver Locales
	$places = new Collection(DB_SCHEMA."_vw_locations");
}

foreach ($places->records as $key=>$place) {
	$row = array();
	$row[] = array('innerHTML'=>"<input type=\"radio\" id=\"rgPlaces_".$place['ix']."\" name=\"rgPlaces\" value=\"".$place['ix']."\" />");
	if ($view == PLACE_LOCATION || $view >= PLACE_PROVINCE) {
		$row[] = array('innerHTML'=>$place['country']);
	}
	if ($view == PLACE_LOCATION || $view >= PLACE_CITI) {
		$row[] = array('innerHTML'=>$place['province']);
	}
	if ($view == PLACE_LOCATION || $view >= PLACE_DISTRICT) {
		$row[] = array('innerHTML'=>$place['city']);
	}
	if ($view == PLACE_LOCATION || $view >= PLACE_TOWN) {
		$row[] = array('innerHTML'=>$place['district']);
	}
	if ($view == PLACE_LOCATION) {
		$row[] = array('innerHTML'=>$place['town']);
	}
	$row[] = array('innerHTML'=>$place['name']);
	$body[] = $row;
}

$controlbar = "<div>&nbsp;</div>";
$controlbar.= "<input type=\"button\" id=\"bNew\" name=\"bNew\" value=\"Crear\" onclick=\"RegionsList.onNewClick();\" />&nbsp;";
$controlbar.= "<input type=\"button\" id=\"bEdit\" name=\"bEdit\" value=\"Editar\" onclick=\"RegionsList.onEditClick();\" />&nbsp;";
$controlbar.= "<input type=\"button\" id=\"bDelete\" name=\"bDelete\" value=\"Eliminar\" onclick=\"RegionsList.onDeleteClick();\" />";

$foot = array(
	array('colspan'=>"7", 'align'=>"center", 'innerHTML'=>$controlbar)
);

$dgPlaces = new Datagrid("dgPlaces", $head, $body, $foot);
$dgPlaces->setAttribute("id", $dgPlaces->getId());
$dgPlaces->setAttribute("border", "0");
$dgPlaces->setAttribute("cellpadding", "2");
$dgPlaces->setAttribute("cellspacing", "2");
$dgPlaces->setAttribute("align", "center");

$iDoc = new Document("templates/mainform.htm");
$iDoc->setVariable("e", $_GET['e']);
$iDoc->setVariable("grid", "dgPlaces");
$iDoc->setEntity("mainarea", $dgPlaces->toHTML());
echo $iDoc->getInnerHTML();
?>
