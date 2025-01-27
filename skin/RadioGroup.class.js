/**
 * @alias RadioGroup.class
 * @author WilC <wilz04@gmail.com>
 * @since 2008
 */

function RadioGroup(id) {
	
	var canvas = document.getElementsByName(id);
	
	this.getValue = function () {
		var length = canvas.length;
		if (length) {
			for (var index=0; index<length; index++) {
				if (canvas[index].checked) {
					return canvas[index].value;
				}
			}
			return null;
		} else if (canvas.checked) {
			return canvas.value;
		}
		return null;
	};
	
	this.isChecked = function () {
		var length = canvas.length;
		if (length) {
			for (var index=0; index<length; index++) {
				if (canvas[index].checked) {
					return true;
				}
			}
			return false;
		} else {
			return canvas.checked;
		}
	};
	
	this.setFocus = function () {
		if (canvas.length) {
			canvas[0].focus();
		} else {
			canvas.focus();
		}
	};
	
	this.check = function () {
		var index = 0;
		var args = arguments[0];
		if (args) {
			index = args.index ? args.index : 0;
		}
		
		if (canvas.length) {
			canvas[index].checked = true;
		} else {
			canvas.checked = true;
		}
	};
	
}
