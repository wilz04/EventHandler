<?php
include_once("Settings.class.php");

/**
 * @alias Collection.class
 * @author WilC <wilz04@gmail.com>
 * @since 2008
 */
class Collection {
	
	var $name;
	var $records;
	var $headers;
	var $orderby;
	var $connection;
	
	function Collection($name, $orderby=NULL) {
		$this->name = $name;
		$this->connection = Settings::getConnection();
		$this->headers = Settings::getTableHeaders($name);
		$this->orderby = $orderby;
		$this->load();
	}
	
	function load() {
		$query = "select ".implode(", ", $this->headers)." from ".$this->name;
		if ($this->orderby != NULL) {
			$query.= " order by ".$this->orderby;
		}
		$this->records = $this->connection->executeQuery($query);
	}
	
	function addRecord($element) {
		$query = "insert into ".$this->name." (";
		$query.= implode(", ", array_keys($element));
		$query.= ") values (";
		$query.= "'".implode("', '", $element)."'";
		$query.= ")";
		$result = $this->connection->execute($query);
		$this->load();
		if ($result) {
			return $this->connection->getLastID();
		}
		return $result;
	}
	
	function getRecordByAttribute($key, $val) {
		foreach ($this->records as $tmpkey=>$tmpval) {
			if ($tmpval[$key] == $val) {
				return $tmpval;
			}
		}
		return NULL;
	}
	
	function getRecordsByAttribute($key, $val) {
		$records = array();
		foreach ($this->records as $tmpkey=>$tmpval) {
			if ($tmpval[$key] == $val) {
				$records[] = $tmpval;
			}
		}
		return $records;
	}
	
	function setRecordAttributes($idkey, $idval, $attributes) {
		$sets = array();
		foreach ($attributes as $key=>$val) {
			$sets[] = "$key = '$val'";
		}
		$query = "update ".$this->name." set ";
		$query.= implode(", ", $sets)." ";
		$query.= "where $idkey = '$idval'";
		$result = $this->connection->execute($query);
		$this->load();
		return $result;
	}
	
	function getLength() {
		return count($this->records);
	}
	
	function removeRecordsByAttribute($key, $val) {
		$query = "delete from ".$this->name." ";
		$query.= "where $key = '$val'";
		$result = $this->connection->execute($query);
		$this->load();
		return $result;
	}
	
	function execute($command) {
		$result = $this->connection->execute($command);
		$this->load();
		return $result;
	}
	
	function executeQuery($query) {
		return $this->connection->executeQuery($query);
	}
	
	function truncateText($text, $limit) {
		if ($text != NULL) {
			$oldmsg = explode(" ", $text);
			$newmsg = array();
			$len = 0;
			foreach ($oldmsg as $key=>$val) {
				$len += strlen($val) + 1;
				if ($len+3 >= $limit) {
					$newmsg[count($newmsg)-1].= "...";
					break;
				} else {
					$newmsg[] = $val;
				}
			}
			return implode(" ", $newmsg);
		}
		return NULL;
	}
	
}
?>
