<?php
/**
 * @alias User.class
 * @author Manaco <amayamanu@gmail.com>
 * @since 2010
 */
include_once("base/Collection.class.php");

define("USER_NEW", 0);
define("USER_ENABLED", 1);

class User {
	
	var $id;
	var $username;
	var $password;
	var $firstname;
	var $lastname;
	var $middlename;
	var $phone;
	var $role;
	var $photo;
	var $state;
	
	var $group;
	
	function User($id=NULL) {
		$this->group = new Collection(DB_SCHEMA."_auth_users");
		$this->id = $id;
		if ($this->id == NULL) {
			$this->username = "";
			$this->password = "";
			$this->firstname = "";
			$this->lastname = "";
			$this->middlename = "";
			$this->phone = "";
			$this->role = NULL;
			$this->photo = NULL;
			$this->state = USER_NEW;
		} else {
			$userdata = $this->group->getRecordByAttribute("ix", $this->id);
			$this->username = $userdata['email'];
			$this->password = "******";
			$this->firstname = $userdata['firstname'];			
			$this->lastname = $userdata['lastname'];
			$this->middlename = $userdata['middlename'];
			$this->phone = $userdata['phone'];
			$this->role = $userdata['role'];
			$this->photo = $userdata['photo'];
			$this->state = $userdata['state'];
		}
	}
	
	function login($username, $password) {
		$group = new Collection(DB_SCHEMA."_auth_users");
		$userdata = $group->getRecordByAttribute("email", $username);
		if ($userdata['password'] == $password) {		  	
		  return $userdata['ix'];
		}
		return -1;
	}
	
	function getAccess() {
		$access = new Collection(DB_SCHEMA."_vw_actions");
		$accesskey = $access->getRecordByAttribute("username", $this->username);
		return $accesskey;
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
