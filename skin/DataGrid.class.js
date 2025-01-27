/**
 * @alias DataGrid.class
 * @author WilC <wilz04@gmail.com>
 * @since 2008
 */

function DataGrid(id) {
	
	var table = document.getElementById(id);
	this.order = DataGrid.DESC;
	
	var args = arguments[1];
	
	var colors = {
		rows: [new Hex({value:0xE2E2E2}), new Hex({value:0xF9F9F9})],
		hilight: new Hex({value:0xB171B1}),
		overcol: new Hex({value:0xB171B1})
	};
	
	function init() {
		if (args) {
			if (args.colors) {
				colors.rows = args.colors.rows ? args.colors.rows : colors.rows;
				colors.hilight = args.colors.hilight ? args.colors.hilight : colors.hilight;
				colors.overcol = args.colors.overcol ? args.colors.overcol : colors.overcol;
			}
		}
		activeHeaderHandCursor();
		activeOverColor();
	}
	
	function onHeaderSelectStart() {
		return false;
	}
	
	function activeHeaderHandCursor() {
		if (table.tHead) {
			var header = table.tHead.rows[0];
			var j = header.cells.length;
			for (var i=0; i<j; i++) {
				header.cells[i].style.cursor = "pointer";
				if (!document.all) {
					header.cells[i].style.MozUserSelect = "none";
				} else {
					header.cells[i].onselectstart = onHeaderSelectStart;
				}
			}
		}
	}
	
	function onRowMouseOver() {
		var j = this.cells.length;
		for (var i=0; i<j; i++) {
			var oldcol = this.cells[i].style.backgroundColor;
			this.cells[i].setAttribute("oldbgcolor", oldcol);
			this.cells[i].style.backgroundColor = "#" + colors.overcol.toString();
		}
	}
	
	function onRowMouseOut() {
		var j = this.cells.length;
		for (var i=0; i<j; i++) {
			var oldcol = this.cells[i].getAttribute("oldbgcolor");
			this.cells[i].style.backgroundColor = oldcol;
		}
	}
	
	function activeOverColor() {
		if (table.tBodies[0]) {
			var rows = table.tBodies[0].rows;
			var j = rows.length;
			for (var i=0; i<j; i++) {
				rows[i].onmouseover = onRowMouseOver;
				rows[i].onmouseout = onRowMouseOut;
			}
		}
	}
	
	this.toEmpty = function () {
		var j = table.tBodies[0].rows.length;
		for (var i=0; i<j; i++) {
			table.tBodies[0].removeChild(table.tBodies[0].rows[i]);
		}
	};
	
	this.paint = function (col) {
		var dif = 0xFF - Math.max(colors.hilight.red, colors.hilight.green, colors.hilight.blue);
		var tmp;
		var j = table.tBodies[0].rows.length;
		var k;
		var l;
		for (var i=0; i<j; i++) {
			k = table.tBodies[0].rows[i].cells.length;
			for (l=0; l<k; l++) {
				if (l == col) {
					tmp = Math.round((dif/(j+1))*(i+1));
					tmp = this.order==DataGrid.DESC ? dif-tmp : tmp;
					tmp = (colors.hilight.red+tmp)*0x10000 + (colors.hilight.green+tmp)*0x100 + colors.hilight.blue+tmp;
					table.tBodies[0].rows[i].cells[l].style.backgroundColor = "#" + tmp.toString(16);
				} else {
					table.tBodies[0].rows[i].cells[l].style.backgroundColor = "#" + colors.rows[i%2].toString();
				}
			}
		}
	};
	
	this.orderBy = function (index) {
		var rows = table.tBodies[0].rows;
		var col = new Array();
		var j = rows.length;
		for (var i=0; i<j; i++) {
			col.push(rows[i].cells[index].innerHTML);
		}
		col.sort();
		if (this.order == DataGrid.DESC) {
			col.reverse();
			this.order = DataGrid.ASC;
		} else {
			this.order = DataGrid.DESC;
		}
		
		var newRows = new Array();
		var tmp;
		var k;
		for (i in col) {
			for (k=0; k<j; k++) {
				tmp = rows[k].cells[index].innerHTML;
				if (tmp != "<!-- indexed -->") {
					if (tmp == col[i]) {
						newRows.push(rows[k]);
						rows[k].cells[index].innerHTML = "<!-- indexed -->";
						break;
					}
				}
			}
		}
		for (i=0; i<j; i++) {
			newRows[i].cells[index].innerHTML = col[i];
		}
		for (i=0; i<j; i++) {
			table.tBodies[0].appendChild(newRows.shift());
		}
		
		this.paint(index);
	};
	
	init();
	
}

DataGrid.ASC = "DataGrid_ASC";
DataGrid.DESC = "DataGrid_DESC";
