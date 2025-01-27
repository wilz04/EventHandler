<?php
/**
 * @alias User.class
 * @author Manaco <amayamanu@gmail.com>
 * @since 2010
 */
include_once("base/Collection.class.php");

class Location {
	
	var $id;
	var $scope;
	var $country;
	var $province;
	var $city; 
	var $district;
	var $town;
	var $name;
	var $parent;
	
	function Location($id=NUL, $scope=NULL) {
		$this->group = new Collection(DB_SCHEMA."_auth_location");
		$this->id = $id;
		if ($this->id == NULL) {
			$this->coutry = "";
			$this->province = "";
			$this->city = "";
			$this->district = "";
			$this->town = "";
			$this->name = "";
			$this->parent = NULL;
			$this->act = NULL;			
		} else {
			$locationdata = $this->group->getRecordByAttribute("ix", $this->id);
			$this->country = $locationdata['email'];
			$this->country = "******";
			$this->province = $locationdata['firstname'];			
			$this->lastname = $locationdata['lastname'];
			$this->middlename = $locationdata['middlename'];
			$this->phone = $locationdata['phone'];
			$this->role = $locationdata['role'];
			$this->photo = $locationdata['photo'];
			$this->state = $locationdata['state'];
		}
	}
		
	function save() {
		if (!is_numeric($this->id)) {
			return $this->group->addRecord(array(
				'firstname' => $this->firstname,
				'middlename' => $this->middlename,
				'lastname' => $this->lastname,
				'email' => $this->username,
				'role' => $this->role,
				'password' => $this->password,
				'phone' => $this->phone,
				'photo' => $this->photo,
				'state' => $this->state
			));
		} else {
			return $this->group->setRecordAttributes("ix", $this->id, array(
				'firstname' => $this->firstname,
				'middlename' => $this->middlename,
				'lastname' => $this->lastname,
				'email' => $this->username,
				'role' => $this->role,
				'phone' => $this->phone,
				'photo' => $this->photo,
				'state' => $this->state
			));
		}
	}
	
	function remove() {
		return $this->group->removeRecordsByAttribute("ix", $this->id);
	}
	
}
?>
