/**
 * @alias UsersList.class
 * @author Wil C <wilz04@gmail.com>
 * @since 2008.
 */
var UsersList = {
	
	rgUsers: null,
	
	onNewClick: function () {
		document.fMainform.action = "user.php?act=new";
		document.fMainform.submit();
	},
	
	onEditClick: function () {
		UsersList.rgUsers = new RadioGroup("rgUsers");
		var userid = UsersList.rgUsers.getValue();
		if (userid == null) {
			return OptionPane.showMessageDialog(3);
		}
		document.fMainform.action = "user.php?act=edi&id=" + userid;
		document.fMainform.submit();
	},
	
	onDeleteClick: function () {
		if (!OptionPane.showConfirmDialog(6)) {
			return;
		}
		UsersList.rgUsers = new RadioGroup("rgUsers");
		var userid = UsersList.rgUsers.getValue();
		if (userid == null) {
			return OptionPane.showMessageDialog(3);
		}
		document.fMainform.action = "user.php?act=del&id=" + userid;
		document.fMainform.submit();
	}
	
};
