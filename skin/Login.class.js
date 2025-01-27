/**
 * @author Fabian
 */
var Login = {
	
	form: null,
	
	init: function (msg) {
		Login.form = new Form("fLogin");
		Login.form.onSubmitException(Login.onSubmitException);
		
		if (msg != "") {
			OptionPane.showMessageDialog(parseInt(msg));
		}
	},
	
	onForgetClick: function () {	
		var email = OptionPane.showInputDialog(12);
		if (email != null) {
			if (email != "") {
	  			User.remind(email);
	  			OptionPane.showMessageDialog(11);
	  		} else {
				Login.onForgetClick();
			}		
		}
		return false;
	},
	
	onSubmitException: function () {
		return OptionPane.showMessageDialog(2);
	}
	
};
