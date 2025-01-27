/**
 * @alias EMail.class
 * @author WilC <wilz04@gmail.com>
 * @since 2008
 */

function EMail(value) {
	
	var username = "";
	var domain = "";
	var type = "";
	
	function init() {
		var userAndDomain = value.split("@");
		if (userAndDomain.length == 2) {
			username = userAndDomain[0];
			var domainAndType = userAndDomain[1].split(".");
			if (domainAndType.length == 2) {
				domain = domainAndType[0];
				type = domainAndType[1];
				if (domain != "") {
					domain += "." + type;
				}
			}
		}
	}
	
	this.isValid = function () {
		return username != "" && domain != "" && type != "";
	};
	
	init();
	
}
