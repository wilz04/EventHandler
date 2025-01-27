<?php 
include_once("skin/DataGrid.class.php");
include_once("skin/Document.class.php");
include_once("base/Collection.class.php");

$methods = new Collection(DB_SCHEMA."_ecom_paymentmethods");

$dsMethods = array();
foreach ($methods->records as $key=>$method) {
		$dsMethods[] = array(
		array('innerHTML'=>"<input type=\"radio\" id=\"rgMethods_".$method['ix']."\" name=\"rgMethods\" value=\"".$method['ix']."\" />"),
		array('innerHTML'=>$method['name'])
	);
}

$footer = "<div>&nbsp;</div>";
$footer.= "<input type=\"button\" id=\"bNew\" name=\"bNew\" value=\"Crear\" onclick=\"UsersList.onNewClick();\" />&nbsp;";
$footer.= "<input type=\"button\" id=\"bEdit\" name=\"bEdit\" value=\"Editar\" onclick=\"UsersList.onEditClick();\" />&nbsp;";
$footer.= "<input type=\"button\" id=\"bDelete\" name=\"bDelete\" value=\"Eliminar\" onclick=\"UsersList.onDeleteClick();\" />";

$dgMethods = new Datagrid(
	"dgMethods",
	array(
		array('innerHTML'=>"&nbsp;"),
		array('innerHTML'=>"M&eacute;todo de Pago", 'onclick'=>"Mainform.grid.orderBy(1);")
	),
	$dsMethods,
	array(
		array('colspan'=>"7", 'align'=>"center", 'innerHTML'=>$footer)
	)
);

$dgMethods->setAttribute("id", "dgMethods");
$dgMethods->setAttribute("width", "40%");
$dgMethods->setAttribute("border", "0");
$dgMethods->setAttribute("cellpadding", "2");
$dgMethods->setAttribute("cellspacing", "2");
$dgMethods->setAttribute("align", "center");

$iDoc = new Document("templates/mainform.htm");
$iDoc->setVariable("e", $_GET['e']);
$iDoc->setVariable("grid", "dgMethods");
$iDoc->setEntity("mainarea", $dgMethods->toHTML());
echo $iDoc->getInnerHTML();

?>