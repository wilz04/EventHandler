<?php 
include_once("skin/DataGrid.class.php");
include_once("skin/Document.class.php");
include_once("base/Collection.class.php");

$users = new Collection(DB_SCHEMA."_vw_users");

$dsUsers = array();
foreach ($users->records as $key=>$user) {
	$photo = "&nbsp;";
	if ($user['photo'] != "") {
		$photo = "<a id=\"aShow\" name=\"aShow\" href=\"#\" target=\"_blank\" onclick=\"return User.onShowClick('images/users/".$user['photo']."');\">Ver Foto</a>";
	}
	$state = "";
	if ($user['state'] == 1) {
		$state = "checked=\"checked\"";
	}
	$dsUsers[] = array(
		array('innerHTML'=>"<input type=\"radio\" id=\"rgUsers_".$user['ix']."\" name=\"rgUsers\" value=\"".$user['ix']."\" />"),
		array('innerHTML'=>$user['fullname']),
		array('innerHTML'=>$user['email']),
		array('innerHTML'=>$user['role']),
		array('innerHTML'=>$user['phone']),
		array('innerHTML'=>"<input type=\"checkbox\" disabled=\"disabled\" ".$state." />", 'align'=>"center"),
		array('innerHTML'=>$photo)
	);
}

$footer = "<div>&nbsp;</div>";
$footer.= "<input type=\"button\" id=\"bNew\" name=\"bNew\" value=\"Crear\" onclick=\"UsersList.onNewClick();\" />&nbsp;";
$footer.= "<input type=\"button\" id=\"bEdit\" name=\"bEdit\" value=\"Editar\" onclick=\"UsersList.onEditClick();\" />&nbsp;";
$footer.= "<input type=\"button\" id=\"bDelete\" name=\"bDelete\" value=\"Eliminar\" onclick=\"UsersList.onDeleteClick();\" />";

$dgUsers = new Datagrid(
	"dgUsers",
	array(
		array('innerHTML'=>"&nbsp;"),
		array('innerHTML'=>"Nombre", 'onclick'=>"Mainform.grid.orderBy(1);"),
		array('innerHTML'=>"E-mail", 'onclick'=>"Mainform.grid.orderBy(2);"),
		array('innerHTML'=>"Rol", 'onclick'=>"Mainform.grid.orderBy(3);"),
		array('innerHTML'=>"Tel&eacute;fono", 'onclick'=>"Mainform.grid.orderBy(4);"),
		array('innerHTML'=>"Estado"),
		array('innerHTML'=>"Foto")
	),
	$dsUsers,
	array(
		array('colspan'=>"7", 'align'=>"center", 'innerHTML'=>$footer)
	)
);

$dgUsers->setAttribute("id", "dgUsers");
$dgUsers->setAttribute("width", "75%");
$dgUsers->setAttribute("border", "0");
$dgUsers->setAttribute("cellpadding", "2");
$dgUsers->setAttribute("cellspacing", "2");
$dgUsers->setAttribute("align", "center");

$iDoc = new Document("templates/mainform.htm");
$iDoc->setVariable("e", $_GET['e']);
$iDoc->setVariable("grid", "dgUsers");
$iDoc->setEntity("mainarea", $dgUsers->toHTML());
$iDoc->setEntity("logarea", $_SESSION['sessiondata']);
echo $iDoc->getInnerHTML();

?>