<?php 
include_once("skin/DataGrid.class.php");
include_once("skin/Document.class.php");
include_once("base/Collection.class.php");

$allActions = new Collection(DB_SCHEMA."_auth_actions");
$myActions = new Collection(DB_SCHEMA."_vw_actions");

$userid = $_GET['id'];
$dsActions = array();
foreach ($allActions->records as $key=>$action) {
	$dsActions[] = array(
		array('innerHTML'=>"<input type=\"checkbox\" name=\"cbAction_".$action['ix']."\" id=\"cbAction_".$action['ix']."\" value=\"".$action['ix']."\" />"),
		array('innerHTML'=>$action['description'])
	);
}

$footer = "<div>&nbsp;</div>";
$footer.= "<input type=\"button\" id=\"bAssign\" name=\"bAssign\" value=\"Asignar\" onClick=\"ActionsList.onNewClick();\" />";

$dgActions = new Datagrid(
	"dgActions",
	array(
		array('innerHTML'=>"&nbsp;", 'width'=>"40"),
		array('innerHTML'=>"Acciones")		
	),
	$dsActions,
	array(
		array('colspan'=>"2", 'align'=>"center", 'innerHTML'=>$footer)
	)
);
$dgActions->setAttribute("width", "50%");
$dgActions->setAttribute("border", "0");
$dgActions->setAttribute("cellpadding", "2");
$dgActions->setAttribute("cellspacing", "2");
$dgActions->setAttribute("align", "center");

$iDoc = new Document("templates/popup.htm");
$iDoc->setEntity("mainarea", $dgActions->toHTML());
echo $iDoc->getInnerHTML();
?>
