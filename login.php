<?php
include_once("skin/Document.class.php");

$iDoc = new Document("templates/login.htm");
$iDoc->setVariable("e", $_GET['e']);

echo $iDoc->getInnerHTML();
?>
