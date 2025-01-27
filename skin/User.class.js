/**
 * @author Fabian
 */
var User = {
	
	init: function () {
		Mainform.init('');
		
		Mainform.form.onSubmitSuccess(User.onSaveClick);
	},
	
	remind: function () {
		
	},
	
	onActionsClick: function (id) {
		if (id == "") {
			return OptionPane.showMessageDialog(14);
		}
		var win = new Frame({url: "actionslist.php?id=" + id});
		win.show();
		return false;
	},
	
	onShowClick: function (src) {
		var win = new Frame({url: src});
		win.show();
		return false;
	},
	
	onSaveClick: function () {
		if (document.fMainform.pPassword.value != document.fMainform.pPasskey.value) {
			document.fMainform.pPassword.focus();
			return OptionPane.showMessageDialog(7);
		}
		return true;
	}
	
};