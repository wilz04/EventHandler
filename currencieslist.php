<?php 
include_once("skin/DataGrid.class.php");
include_once("skin/Document.class.php");
include_once("base/Collection.class.php");

$currencies = new Collection(DB_SCHEMA."_ecom_currency");

$dgCurrency = array();
foreach ($currencies->records as $key=>$currency) {
		$dgCurrency[] = array(
		array('innerHTML'=>"<input type=\"radio\" id=\"rgCurrencies_".$currency['ix']."\" name=\"rgCurrencies\" value=\"".$currency['ix']."\" />"),
		array('innerHTML'=>$currency['name']),
		array('innerHTML'=>$currency['symbol']),
		array('innerHTML'=>$currency['exchange_rate'])
	);
}

$footer = "<div>&nbsp;</div>";
$footer.= "<input type=\"button\" id=\"bNew\" name=\"bNew\" value=\"Crear\" onclick=\"UsersList.onNewClick();\" />&nbsp;";
$footer.= "<input type=\"button\" id=\"bEdit\" name=\"bEdit\" value=\"Editar\" onclick=\"UsersList.onEditClick();\" />&nbsp;";
$footer.= "<input type=\"button\" id=\"bDelete\" name=\"bDelete\" value=\"Eliminar\" onclick=\"UsersList.onDeleteClick();\" />";

$dgCurrencies = new Datagrid(
	"dgCurrencies",
	array(
		array('innerHTML'=>"&nbsp;"),
		array('innerHTML'=>"Moneda", 'onclick'=>"Mainform.grid.orderBy(1);"),
		array('innerHTML'=>"S&iacute;mbolo", 'onclick'=>"Mainform.grid.orderBy(2);"),
		array('innerHTML'=>"Tipo de Cambio", 'onclick'=>"Mainform.grid.orderBy(3);")
	),
	$dgCurrency,
	array(
		array('colspan'=>"7", 'align'=>"center", 'innerHTML'=>$footer)
	)
);

$dgCurrencies->setAttribute("id", "dgCurrencies");
$dgCurrencies->setAttribute("width", "60%");
$dgCurrencies->setAttribute("border", "0");
$dgCurrencies->setAttribute("cellpadding", "2");
$dgCurrencies->setAttribute("cellspacing", "2");
$dgCurrencies->setAttribute("align", "center");

$iDoc = new Document("templates/mainform.htm");
$iDoc->setVariable("e", $_GET['e']);
$iDoc->setVariable("grid", "dgCurrencies");
$iDoc->setEntity("mainarea", $dgCurrencies->toHTML());
echo $iDoc->getInnerHTML();

?>