<?php 
include_once("skin/DataGrid.class.php");
include_once("skin/Document.class.php");
include_once("base/Collection.class.php");

$roles = new Collection(DB_SCHEMA."_auth_roles");

$dsRoles = array();
foreach ($roles->records as $key=>$role) {
	$dsRoles[] = array(
		array('innerHTML'=>"<input type=\"radio\" id=\"rgRoles_".$role['ix']."\" name=\"rgRoles\" value=\"".$role['ix']."\" />"),
		array('innerHTML'=>$role['description'])
	);
}

$footer = "<div>&nbsp;</div>";
$footer.= "<input type=\"button\" id=\"bNew\" name=\"bNew\" value=\"Crear\" onclick=\"RolesList.onNewClick();\" />&nbsp;";
$footer.= "<input type=\"button\" id=\"bEdit\" name=\"bEdit\" value=\"Editar\" onclick=\"RolesList.onEditClick();\" />&nbsp;";
$footer.= "<input type=\"button\" id=\"bDelete\" name=\"bDelete\" value=\"Eliminar\" onclick=\"RolesList.onDeleteClick();\" />";

$dgRoles = new Datagrid(
	"dgRoles",
	array(
		array('innerHTML'=>"&nbsp;", 'width'=>"40"),
		array('innerHTML'=>"Rol", 'onclick'=>"Mainform.grid.orderBy(1);")		
	),
	$dsRoles,
	array(
		array('colspan'=>"6", 'align'=>"center", 'innerHTML'=>$footer)
	)
);

$dgRoles->setAttribute("id", "dgRoles");
$dgRoles->setAttribute("width", "50%");
$dgRoles->setAttribute("border", "0");
$dgRoles->setAttribute("cellpadding", "2");
$dgRoles->setAttribute("cellspacing", "2");
$dgRoles->setAttribute("align", "center");

$iDoc = new Document("templates/mainform.htm");
$iDoc->setVariable("grid", "dgRoles");
$iDoc->setVariable("e", $_GET['e']);
$iDoc->setEntity("mainarea", $dgRoles->toHTML());
echo $iDoc->getInnerHTML();

?>