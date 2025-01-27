<?php
include_once("auth/FileHandler.class.php");
include_once("auth/Role.class.php");
include_once("skin/Document.class.php");

$iDoc = new Document("templates/role.htm");

$role = new Role($_GET['id']);
if ($_GET['act'] == "new") {
	$title = "Nuevo Rol";
	$iDoc->setVariable("id", "");		
	$iDoc->setEntity("name", "");
	$iDoc->setEntity("disabled", "disabled=\"disabled\"");
	$iDoc->setEntity("act", "role.php?act=upd");
	
} else if ($_GET['act'] == "edi") {
	$title = "Editar Rol";
	$iDoc->setVariable("id", $role->id);		
	$iDoc->setEntity("name", $role->name);
	$iDoc->setEntity("disabled", "");
	$iDoc->setEntity("act", "role.php?act=upd&id=".$role->id);
	
} else if ($_GET['act'] == "upd") {
	$role->name = $_POST['tName'];
	$role->save();
	header("location: roleslist.php?e=0");
	
} else if ($_GET['act'] == "del") {
	$role->remove();
	header("location: roleslist.php?e=0");
}

$iDoc->setEntity("title", $title);
echo $iDoc->getInnerHTML();
?>
