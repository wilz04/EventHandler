/**
 * @alias menubar.lib
 * @author WilC <wilz04@gmail.com>
 * @since 2008.
 */

var menubar = {
/* ---------------------------------------------------------------- */
	Style: {
		backgroundColor: "#F0F0F0",
		borderWidth: "1px",
		borderStyle: "solid",
		borderTopColor: "#FFFFFF",
		borderRightColor: "#C8C8C8",
		borderBottomColor: "#C8C8C8",
		borderLeftColor: "#FFFFFF",
		color: "#000000",
		fontFamily: "Verdana, Arial, Helvetica, sans-serif",
		fontSize: "10px"
	},
/* ---------------------------------------------------------------- */
	MenuBar: function () {
		
		var bar = document.createElement("div");
		var childs = new Array();
		var style = {};
		
		var args = arguments[1];
		if (args) {
			style = args.style ? args.style : style;
		}
		var expression;
		var key;
		for (key in style) {
			expression = "menubar.Style." + key + " = '" + style[key] + "';";
			eval(expression);
		}
		for (key in menubar.Style) {
			expression = "bar.style." + key + " = '" + menubar.Style[key] + "';";
			eval(expression);
		}
		
		this.getParent = function () {
			return null;
		};
		
		this.getChilds = function () {
			return childs;
		};
		
		this.add = function (menu) {
			menu.setParent(this);
			childs.push(menu);
			
			var button = menu.getBody();
			button.style.backgroundColor = menubar.Style.backgroundColor;
			button.style.borderWidth = menubar.Style.borderWidth;
			button.style.borderStyle = menubar.Style.borderStyle;
			button.style.borderColor = menubar.Style.backgroundColor;
			button.style.fontFamily = menubar.Style.fontFamily;
			button.style.fontSize = menubar.Style.fontSize;
			
			button.onmouseover = function () {
				this.style.borderTopColor = menubar.Style.borderTopColor;
				this.style.borderRightColor = menubar.Style.borderRightColor;
				this.style.borderBottomColor = menubar.Style.borderBottomColor;
				this.style.borderLeftColor = menubar.Style.borderLeftColor;
			};
			
			button.onmousedown = function () {
				this.style.borderTopColor = menubar.Style.borderBottomColor;
				this.style.borderRightColor = menubar.Style.borderLeftColor;
				this.style.borderBottomColor = menubar.Style.borderTopColor;
				this.style.borderLeftColor = menubar.Style.borderRightColor;
			};
			
			button.onmouseout = function () {
				this.style.borderColor = menubar.Style.backgroundColor;
			};
			
			bar.appendChild(button);
		};
		
		this.addInto = function (id) {
			document.body.style.margin = "0px";
			document.getElementById(id).appendChild(bar);
		};
		
	},
/* ---------------------------------------------------------------- */
	Menu: function (value) {
		
		var parent = null;
		var childs = new Array();
		var active = false;
		var button = document.createElement("input");
		var popup = document.createElement("div");
		var style = {};
		
		button.setAttribute("type", "button");
		button.setAttribute("value", value);
		
		var args = arguments[1];
		if (args) {
			style = args.style ? args.style : {};
		}
		var expression;
		var key;
		for (key in style) {
			expression = "button.style." + key + " = '" + style[key] + "';";
			eval(expression);
		}
		for (key in menubar.Style) {
			expression = "popup.style." + key + " = '" + menubar.Style[key] + "';";
			eval(expression);
		}
		
		this.setParent = function (component) {
			parent = component;
		};
		
		this.getParent = function () {
			return parent;
		};
		
		this.getBody = function () {
			return button;
		};
		
		this.isActive = function () {
			return active;
		};
		/*
		function hasChildActive() {
			var i;
			for (i in childs) {
				if (childs[i].isActive()) {
					return true;
				}
			}
			return false;
		}
		*/
		function getX() {
			var x = 0;
			var obj = button;
			do {
				x += obj.offsetLeft;
			} while (obj = obj.offsetParent);
			return x;
		}
		
		function getY() {
			var y = 0;
			var obj = button;
			do {
				y += obj.offsetTop;
			} while (obj = obj.offsetParent);
			return y;
		}
		
		this.add = function (item) {
			item.setParent(this);
			childs.push(item);
			popup.appendChild(item.getBody());
		};
		
		this.addSeparator = function () {
			var sep = document.createElement("hr");
			
			var style = {};
		
			var args = arguments[0];
			if (args) {
				style = args.style ? args.style : style;
			}
			var expression;
			var key;
			for (key in style) {
				expression = "sep.style." + key + " = '" + style[key] + "';";
				eval(expression);
			}
			
			popup.appendChild(sep);
		};
		
		this.show = function () {
			if (!active) {
				active = true;
				var childs = parent.getChilds();
				var i;
				for (i in childs) {
					//if (childs[i] instanceof menubar.Menu) {
					if (childs[i].getBody() != button) {
						childs[i].hide();
					}
					//}
				}
				
				if (popup.style.position == "") {
					popup.style.position = "absolute";
					popup.style.left = getX().toString() + "px";
					popup.style.top = (getY() + button.offsetHeight).toString() + "px";
					document.body.appendChild(popup);
				} else {
					popup.style.visibility = "";
				}
		  }
		};
		
		this.hide = function () {
			if (active) {
				active = false;
				popup.style.visibility = "hidden";
			}
		};
		
		this.onClick = function (action) {
			button.onclick = action;
		};
		
		button.onclick = this.show;
		popup.onmouseover = this.show;
		popup.onmouseout = this.hide;
		
	},
/* ---------------------------------------------------------------- */
	MenuItem: function (value) {
		
		var parent = null;
		var active = false;
		var label = document.createElement("div");
		var hilightBgColor;
		var hilightTxColor;
		
		label.innerHTML = value;
		
		if (!document.all) {
			label.style.MozUserSelect = "none";
		} else {
			label.onselectstart = function () {
				return false;
			};
		}
		
		var style_deflt = {
			cursor: "pointer",
			paddingTop: "2px",
			paddingLeft: "2px",
			paddingRight: "40px",
			paddingBottom: "2px",
			hilightBgColor: "#B171B1",
			hilightTxColor: "#FFFFFF"
		};
		var style_param = {};
		
		var action = null;
		
		var args = arguments[1];
		if (args) {
			style_param = args.style ? args.style : style_param;
			action = args.onClick ? args.onClick : null;
		}
		var expression;
		var key;
		for (key in style_deflt) {
			if (key != "hilightBgColor" && key != "hilightTxColor") {
				expression = "label.style." + key + " = '" + style_deflt[key] + "';";
				eval(expression);
			} else {
				expression = key + " = '" + style_deflt[key] + "';";
				eval(expression);
			}
		}
		for (key in style_param) {
			if (key != "hilightBgColor" && key != "hilightTxColor") {
				expression = "label.style." + key + " = '" + style_param[key] + "';";
				eval(expression);
			} else {
				expression = key + " = '" + style_param[key] + "';";
				eval(expression);
			}
		}
		
		if (action != null) {
			label.onclick = action;
		}
		
		this.setParent = function (component) {
			parent = component;
		};
		
		this.getParent = function () {
			return parent;
		};
		
		this.getBody = function () {
			return label;
		};
		
		this.isActive = function () {
			return active;
		};
		
		label.onmouseover = function () {
			active = true;
			this.style.backgroundColor = hilightBgColor;
			this.style.color = hilightTxColor;
		};
		
		label.onmouseout = function () {
			active = false;
			this.style.backgroundColor = menubar.Style.backgroundColor;
			this.style.color = menubar.Style.color;
		};
		
		this.onClick = function (action) {
			label.onclick = action;
		};
		
	}
/* ---------------------------------------------------------------- */
};
