/**
 * @alias RolesList.class
 * @author Wil C <wilz04@gmail.com>
 * @since 2008.
 */
var RolesList = {
	
	rgRoles: null,
	
	onNewClick: function () {
		document.fMainform.action = "role.php?act=new";
		document.fMainform.submit();
	},
	
	onEditClick: function () {
		RolesList.rgRoles = new RadioGroup("rgRoles");
		var roleid = RolesList.rgRoles.getValue();
		if (roleid == null) {
			return OptionPane.showMessageDialog(3);
		}
		document.fMainform.action =  "role.php?act=edi&id=" + roleid;
		document.fMainform.submit();
	},
	
	onDeleteClick: function () {
		if (!OptionPane.showConfirmDialog(6)) {
			return;
		}
		RolesList.rgRoles = new RadioGroup("rgRoles");
		var roleid = RolesList.rgRoles.getValue();
		if (roleid == null) {
			return OptionPane.showMessageDialog(3);
		}
		document.fMainform.action = "role.php?act=del&id=" + roleid;
		document.fMainform.submit();
	}
	
};
