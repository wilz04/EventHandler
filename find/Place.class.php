<?php
/**
 * @alias Place.class
 * @author Manaco <amayamanu@gmail.com>
 * @since 2010
 */
include_once("base/Collection.class.php");

define("PLACE_TOWN", 5);
define("PLACE_DISTRICT", 4);
define("PLACE_CITI", 3);
define("PLACE_PROVINCE", 2);
define("PLACE_COUNTRY", 1);
define("PLACE_LOCATION", 0);

class Place {
	
	var $id;
	var $name;
	
	var $group;
	
	function User($id=NULL) {
		$this->group = new Collection(DB_SCHEMA."_find_regions");
		$this->id = $id;
		if ($this->id == NULL) {
		} else {
		}
	}
	
	function save() {
		if ($this->id == NULL) {
			return $this->group->addRecord(array());
		} else {
			return $this->group->setRecordAttributes("ix", $this->id, array());
		}
	}
	
	function remove() {
		return $this->group->removeRecordsByAttribute("ix", $this->id);
	}
	
}
?>
