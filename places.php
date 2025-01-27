<?php
include_once("auth/FileHandler.class.php");
include_once("find/Places.class.php");
include_once("skin/Document.class.php");

$iDoc = new Document("templates/places.htm");

$user = new Places($_GET['id']);
if ($_GET['act'] == "new") {
	$title = "Nuevo Usuario";
	$iDoc->setVariable("id", "");		
	$iDoc->setEntity("firstname", "");
	$iDoc->setEntity("middlename", "");
	$iDoc->setEntity("lastname", "");
	$iDoc->setEntity("email", "");
	$iDoc->setEntity("password", "");
	$iDoc->setEntity("phone", "");
	$iDoc->setEntity("photo", "");
	$iDoc->setEntity("state", "checked=\"checked\"");
	$iDoc->setEntity("act", "user.php?act=upd");
	
} else if ($_GET['act'] == "edi") {
	$photo = "";
	if ($user->photo != "") {
		$photo = "<a id=\"aShow\" name=\"aShow\" href=\"#\" target=\"_blank\" onclick=\"return User.onShowClick('images/users/".$user->photo."');\">Ver Actual</a>";
	}
	$title = "Editar Usuario";
	$iDoc->setVariable("id", $user->id);		
	$iDoc->setEntity("firstname", $user->firstname);
	$iDoc->setEntity("middlename", $user->middlename);
	$iDoc->setEntity("lastname", $user->lastname);
	$iDoc->setEntity("email", $user->username);
	$iDoc->setEntity("password", $user->password);
	$iDoc->setEntity("phone", $user->phone);
	$iDoc->setEntity("photo", $photo);
	$iDoc->setEntity("state", $user->state==1 ? "checked=\"checked\"" : "");
	$iDoc->setEntity("act", "user.php?act=upd&id=".$user->id);
} else if ($_GET['act'] == "upd") {
	$fPhoto = new FileHandler();
	$fPhoto->setUploadedData("fPhoto", "images/users/");
	$user->role = $_POST['sRole'];
	if ($fPhoto->name != "") {
		$user->photo = $fPhoto->name;
	}
	$user->state = 0;
	if ($_POST['cbState'] != "") {
		$user->state = 1;
	}
	$user->username = $_POST['tEmail'];
	$user->password = $_POST['pPassword'];
	$user->firstname = $_POST['tFirstname'];
	$user->lastname = $_POST['tLastname'];
	$user->middlename = $_POST['tMiddlename'];
	$user->save();
	header("location: userslist.php?e=0");
	
} else if ($_GET['act'] == "del") {
	$user->remove();
	header("location: userslist.php?e=0");
}

$iDoc->setEntity("title", $title);
$roles = new Collection(DB_SCHEMA."_auth_roles");
$options = "";
foreach ($roles->records as $role) {
	$selected = "";
	if ($role['ix'] == $user->role) {
		$selected = "selected=\"selected\"";
	}
	$options.= "<option value=\"".$role['ix']."\" ".$selected.">".$role['description']."</option>";
}
$iDoc->setEntity("role", $options);
echo $iDoc->getInnerHTML();
?>
