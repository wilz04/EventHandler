<?php
session_start();
include_once("auth/User.class.php");
include_once("skin/Document.class.php");

$username = $_POST['tEmail'];
$password = $_POST['pPassword'];

$userid = User::login($username, $password);

if ($userid == -1) {
	header("location: login.php?e=7");
}
$user = new User($userid);
$user->getAccess();
					
$iDoc = new Document("templates/mainform.htm");
$iDoc->setVariable("e", "");
$iDoc->setEntity("mainarea", "");
$iDoc->setEntity("logarea",  $_SESSION['ix']);
echo $iDoc->getInnerHTML();
?>
