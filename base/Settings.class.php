<?php

/**
 * @alias Settings.class
 * @see Database.class
 * @author WilC <wilz04@gmail.com>
 * @since 2007
 */
include_once("Database.class.php");

define("DB_HOST", "localhost");
define("DB_SCHEMA", "eventhdb");
define("DB_USR", "root");
define("DB_PWD", "");

class Settings {
	
	function getConnection() {
		return new Database(DB_HOST, DB_SCHEMA, DB_USR, DB_PWD);
	}
	
	function getTableHeaders($table) {	
		$cnx = Settings::getConnection();
		$rs = $cnx->executeQuery("show columns from $table");
		$cols = array();
		foreach ($rs as $key=>$value) {
				$cols[$key] = $value['Field'];
		}
		return $cols;
	}
	
}
?>
