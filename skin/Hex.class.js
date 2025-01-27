/**
 * @alias Hex.class
 * @author WilC <wilz04@gmail.com>
 * @since 2008
 */

function Hex() {
	
	this.red = 0;
	this.green = 0;
	this.blue = 0;
	
	var args = arguments[0];
	
	if (args) {
		if (args.rgb) {
			this.red = args.rgb[0] ? args.rgb[0] : this.red;
			this.green = args.rgb[1] ? args.rgb[1] : this.green;
			this.blue = args.rgb[2] ? args.rgb[2] : this.blue;
		}
		if (args.value) {
			this.red = Math.floor(args.value/0x10000);
			this.green = Math.floor((args.value - this.red*0x10000)/0x100);
			this.blue = args.value - this.red*0x10000 - this.green*0x100;
		}
	}
	
	this.getValue = function () {
		var value = this.red*0x10000 + this.green*0x100 + this.blue;
		return value;
	};
	
	this.toString = function () {
		return this.getValue().toString(16).toUpperCase();
	};
	
	this.toRGBString = function () {
		return "rgb(" + this.red.toString() + ", " + this.green.toString() + ", " + this.blue.toString() + ")";
	};
	
}
