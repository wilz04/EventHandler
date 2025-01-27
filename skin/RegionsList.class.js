/**
 * @alias UsersList.class
 * @author Wil C <wilz04@gmail.com>
 * @since 2008.
 */
var RegionsList = {
	
	rgRegions: null,
	
	onNewClick: function () {
		document.fMainform.action = "user.php?act=new";
		document.fMainform.submit();
	},
	
	onEditClick: function () {
		RegionsList.rgRegions = new RadioGroup("rgRegions");
		var regionid = RegionsList.rgRegions.getValue();
		if (regionid == null) {
			return OptionPane.showMessageDialog(3);
		}
		document.fMainform.action = "user.php?act=edi&id=" + regionid;
		document.fMainform.submit();
	},
	
	onDeleteClick: function () {
		if (!OptionPane.showConfirmDialog(6)) {
			return;
		}
		RegionsList.rgRegions = new RadioGroup("rgRegions");
		var regionid = RegionsList.rgRegions.getValue();
		if (regionid == null) {
			return OptionPane.showMessageDialog(3);
		}
		document.fMainform.action = "user.php?act=del&id=" + regionid;
		document.fMainform.submit();
	}
	
};
