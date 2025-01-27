/**
 * @alias Form.class
 * @author WilC <wilz04@gmail.com>
 * @since 2008
 */

function Form(id) {
	
	var canvas = document.getElementById(id);
	
	this.disable = function () {
		var id;
		var tmp;
		for (var index=0; index<canvas.length; index++) {
			id = canvas.elements[index].id;
			if (id) {
				tmp = document.getElementById(id);
				if (tmp != null) {
					tmp.setAttribute("disabled", "disabled");
				}
			}
		}
	};
	
	function throwSubmitException(exception) {
		throw exception;
		return false;
	}
	
	function throwSubmitSuccess() {
		return true;
	}
	
	this.onSubmitException = function (action) {
		throwSubmitException = action;
	};
	
	this.onSubmitSuccess = function (action) {
		throwSubmitSuccess = action;
	};
	
	canvas.onsubmit = function () {
		var id;
		var tmp;
		var files = new Array();
		for (var index=0; index<this.length; index++) {
			id = this.elements[index].id;
			if (id) {
				tmp = document.getElementById(id);
				if (tmp != null) {
					switch (tmp.tagName) {
						case "INPUT":
							switch (tmp.getAttribute("type")) {
								case "radio":
									if (tmp.getAttribute("required") == "true") {
										var rg = new RadioGroup(id);
										if (!rg.isChecked()) {
											rg.setFocus();
											return throwSubmitException(new Error("Null data exception"));
										}
									}
								break;
								case "checkbox":
									if (tmp.getAttribute("required") == "true") {
										if (!tmp.checked) {
											tmp.focus();
											return throwSubmitException(new Error("Null data exception"));
										}
									}
								break;
								case "file":
									if (tmp.getAttribute("required") == "true") {
										if (tmp.value == "") {
											tmp.focus();
											return throwSubmitException(new Error("Null data exception"));
										}
									}
									files.push(tmp);
								break;
								default:
									// text
									if (tmp.getAttribute("required") == "true") {
										if (tmp.value == "") {
											tmp.focus();
											return throwSubmitException(new Error("Null data exception"));
										}
									}
									if (tmp.getAttribute("datatype") == "number") {
										if (isNaN(tmp.value)) {
											tmp.focus();
											return throwSubmitException(new Error("Incompatible types"));
										}
					  			}
									if (tmp.getAttribute("datatype") == "email") {
										if (!(new EMail(tmp.value)).isValid()) {
											tmp.focus();
											return throwSubmitException(new Error("Incompatible types"));
										}
					  			}
								break;
							}
						break;
						case "SELECT":
							if (tmp.getAttribute("required") == "true") {
								var cb = new ComboBox(id);
								if (cb.getValue() == "") {
									cb.setFocus();
									return throwSubmitException(new Error("Null data exception"));
								}
							}
						break;
						default: // TEXTAREA
							if (tmp.getAttribute("required") == "true") {
								if (tmp.value == "") {
									tmp.focus();
									return throwSubmitException(new Error("Null data exception"));
								}
							}
						break;
					}
				}
			}
		}
		var i;
		var j;
		for (i in files) {
			if (files[i].getAttribute("unique") == "true") {
		  		if (files[i].value != "") {
				  	for (j in files) {
						if (i != j) {
							if (files[j].value.split("\\").pop() == files[i].value.split("\\").pop()) {
								files[i].focus();
								return throwSubmitException(new Error("Duplicate data exception"));
							}
						}
					}
				}
			}
		}
		return throwSubmitSuccess();
	};
	
	this.onSubmit = function (action) {
		canvas.onsubmit = action;
	};
	
	this.check = function () {
		return canvas.onsubmit();
	};
	
}
