/**
 * @alias Frame.class
 * @author WilC <wilz04@gmail.com>
 * @since 2007
 */

function Frame() {
	
	this.url = "about:blank";
	this.handler = null;
	this.target = "_blank";
	this.style = {
		width: 550,
		height: 400,
		resizable: 0,
		fullscreen: 0,
		titlebar: 0,
		location: 0,
		menubar: 0,
		statusbar: 0,
		toolbar: 0,
		scrollbars: 1,
		left: null,
		top: null
	};
	
	var style = {};
	
	var args = arguments[0];
	if (args) {
		this.target = args.name ? args.name : this.target;
		this.target = args.target ? args.target : this.target;
		this.url = args.url ? args.url : this.url;
		style = args.style ? args.style : style;
	}
	
	var key;
	for (key in style) {
		this.style[key] = style[key].toString();
	}
	
	this.show = function () {
		if (this.style.left == null) {
			this.style.left = Math.round((screen.width - this.style.width)/2);
		}
		if (this.style.top == null) {
			this.style.top = Math.round((screen.height - this.style.height)/2);
		}
		var args = new Array();
		var key;
		for (key in this.style) {
			args.push(key + "=" + this.style[key].toString());
		}
		this.handler = window.open(this.url, this.target, args.join(", "));
	};
	
	this.close = function () {
		if (this.handler != null) {
			this.handler.close();
		}
	};
	
}
