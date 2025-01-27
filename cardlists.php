<?php 
include_once("skin/DataGrid.class.php");
include_once("skin/Document.class.php");
include_once("base/Collection.class.php");

$cards = new Collection(DB_SCHEMA."_vw_cards");

$dsCards = array();
foreach ($cards->records as $key=>$card) {
		$dsCards[] = array(
		array('innerHTML'=>"<input type=\"radio\" id=\"rgMethods_".$card['ix']."\" name=\"rgMethods\" value=\"".$card['ix']."\" />"),
		array('innerHTML'=>$card['name']),
		array('innerHTML'=>$card['bank'])
	);
}

$footer = "<div>&nbsp;</div>";
$footer.= "<input type=\"button\" id=\"bNew\" name=\"bNew\" value=\"Crear\" onclick=\"UsersList.onNewClick();\" />&nbsp;";
$footer.= "<input type=\"button\" id=\"bEdit\" name=\"bEdit\" value=\"Editar\" onclick=\"UsersList.onEditClick();\" />&nbsp;";
$footer.= "<input type=\"button\" id=\"bDelete\" name=\"bDelete\" value=\"Eliminar\" onclick=\"UsersList.onDeleteClick();\" />";

$dgCards = new Datagrid(
	"dgCards",
	array(
		array('innerHTML'=>"&nbsp;"),
		array('innerHTML'=>"Tarjeta", 'onclick'=>"Mainform.grid.orderBy(1);"),
		array('innerHTML'=>"Banco Emisor", 'onclick'=>"Mainform.grid.orderBy(2);")
	),
	$dsCards,
	array(
		array('colspan'=>"7", 'align'=>"center", 'innerHTML'=>$footer)
	)
);

$dgCards->setAttribute("id", "dgCards");
$dgCards->setAttribute("width", "50%");
$dgCards->setAttribute("border", "0");
$dgCards->setAttribute("cellpadding", "2");
$dgCards->setAttribute("cellspacing", "2");
$dgCards->setAttribute("align", "center");

$iDoc = new Document("templates/mainform.htm");
$iDoc->setVariable("e", $_GET['e']);
$iDoc->setVariable("grid", "dgCurrencies");
$iDoc->setEntity("mainarea", $dgCards->toHTML());
echo $iDoc->getInnerHTML();

?>