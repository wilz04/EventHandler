<?php
/**
 * @alias Role.class
 * @author Manaco <amayamanu@gmail.com>
 * @since 2010
 */
include_once("base/Collection.class.php");

define("ROLE_ADMINISTRATOR", 5);
define("ROLE_MANAGER", 4);
define("ROLE_SELLER", 3);
define("ROLE_OPERATOR", 2);
define("ROLE_CLIENT", 1);

class Role {
	
	var $id;
	var $name;
	
	function Role($id=NULL) {
		$this->group = new Collection(DB_SCHEMA."_auth_roles");
		$this->id = $id;
		if ($this->id == NULL) {
			$this->name = "";
		} else {
			$roledata = $this->group->getRecordByAttribute("ix", $this->id);
			$this->name = $roledata['description'];
		}
	}

	function save() {
		if ($this->id == NULL) {
			return $this->group->addRecord(array(
				'description' => $this->name
			));
		} else {
			return $this->group->setRecordAttributes("ix", $this->id, array(
				'description' => $this->name
			));
		}
	}
	
	function remove() {
		return $this->group->removeRecordsByAttribute("ix", $this->id);
	}
	
}	
?>