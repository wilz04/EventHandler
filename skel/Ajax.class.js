/**
 * @alias Ajax.class
 * @see Request.class
 * @author WilC <wilz04@gmail.com>
 * @since 2007
 */

var Ajax = {
	
	getInstance: function () {
		var request;
		var headers = new Array();
		
		var args = arguments[0];
		if (args) {
			headers = args.headers ? args.headers : headers;
		}
		
		try {
			/* Mozilla, Netscape, Konqueror, Opera, Safari, .. */
			request = new XMLHttpRequest();
			if (request.overrideMimeType) {
				request.overrideMimeType("text/html");
			}
		} catch (e) {
			/* Internet Explorer */
			try {
				request = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				request = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}
		
		var name;
		for (name in headers) {
			request.setRequestHeader(name, headers[name]);
		}
		return request;
	},
	
	getURL: function (url) {
		var target = null;
		var method = "get";
		var header = new Array();
		var httpVars = null;
		
		function onLoading(request) {}
		
		function onSubmitSuccess(request) {
			return true;
		}
		
		function onSubmitException(request) {
			var message = "Ajax exception:\n";
			message += "Request type: " + request.toString() + "\n";
			message += "Response text: " + request.responseText + "\n";
			message += "Ready state" + request.readyState.toString() + "\n";
			message += "Status" + request.status.toString() + "\n";
			throw new Error(message);
		}
		
		var args = arguments[1];
		if (args) {
			target = args.target ? args.target : target;
			method = args.method ? args.method : method;
			header = args.header ? args.header : header;
			httpVars = args.httpVars ? args.httpVars : httpVars;
			onLoading = args.onLoading ? args.onLoading : onLoading;
			onSubmitSuccess = args.onSubmitSuccess ? args.onSubmitSuccess : onSubmitSuccess;
			onSubmitException = args.onSubmitException ? args.onSubmitException : onSubmitException;
		}
		
		var request = Ajax.getInstance({headers: header});
		request.onreadystatechange = function () {
			var response = "";
			if (request.readyState == 4) {
				if (request.status == 200) {
					response = request.responseText;
				}
				
				if (response == "") {
					return onSubmitException(request);
				}
				
				if (target != null) {
					document.getElementById(target).innerHTML = response;
				}
				
				return onSubmitSuccess(request);
			} else {
				onLoading(request);
			}
		};
		request.open(method, url, true);
		if (method == "post") {
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		}
		var httpVals = new Array();
		var name;
		for (name in httpVars) {
			httpVals.push(name + "=" + encodeURIComponent(httpVars[name]));
		}
		request.send(httpVals.join("&"));
	},
	
	loadVars: function (url, action) {
		Ajax.getURL(url, {onSubmitSuccess: function (request) {
			action(new Request(request.responseText));
		}});
	}

}
