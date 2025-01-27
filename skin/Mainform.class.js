/**
 * @author Fabian
 */
var Mainform = {
	
	dgid: "",
	form: null,
	grid: null,
	
	init: function (msg) {	
		var bar = new menubar.MenuBar();
		
		var menus = new Array();
		menus['mUser'] = new menubar.Menu("Usuarios");
		menus['mLocation'] = new menubar.Menu("Ubicaci\xF3n");
		menus['mEvent'] = new menubar.Menu("Eventos");
		menus['mPOS'] = new menubar.Menu("Puntos de Venta");
		menus['mFinance'] = new menubar.Menu("Financiero");
		menus['mReport'] = new menubar.Menu("Reportes");
		menus['mHelp'] = new menubar.Menu("Ayuda");
		menus['mOut'] = new menubar.Menu("Salir");
				
		var items = new Array();
		
			/** Subitems Usuarios */
		items['iUserAdmin'] = new menubar.MenuItem("Administraci\xF3n de Usuarios");
		items['iRolAdmin'] = new menubar.MenuItem("Administraci\xF3n de Roles");
		
		/** Subitems Ubicacion */
		items['iCountry'] = new menubar.MenuItem("Pa\xEDs");
		items['iProvince'] = new menubar.MenuItem("Provincia");
		items['iCity'] = new menubar.MenuItem("Cant\xF3n");
		items['iDistrict'] = new menubar.MenuItem("Distrito");
		items['iScenary'] = new menubar.MenuItem("Escenarios");
		items['iPlace'] = new menubar.MenuItem("Lugares");
		
		/** Subitems Eventos */
		items['iEventHandler'] = new menubar.MenuItem("Mantenimiento de Eventos");
		items['iManager'] = new menubar.MenuItem("Asignar usuarios a Eventos");
		
	/** Subitems Financiero */
		items['iMoney'] = new menubar.MenuItem("Monedas");
		items['iExchange'] = new menubar.MenuItem("Medios de Pago");
		items['iBank'] = new menubar.MenuItem("Bancos Emisores");
		items['iCard'] = new menubar.MenuItem("Tarjetas");
		items['iDelivery'] = new menubar.MenuItem("Entregas a Domicilio");
		items['iDiscount'] = new menubar.MenuItem("Descuentos");
		items['iInsurance'] = new menubar.MenuItem("Recargos");
	
		/** Subitems Ayuda */
		items['iHelp'] = new menubar.MenuItem("Ayuda");
		items['iAbout'] = new menubar.MenuItem("A cerca de..");
		
		menus['mOut'].onClick(Mainform.onOutClick);
		items['iUserAdmin'].onClick(Mainform.onUserAdminClick);
		items['iRolAdmin'].onClick(Mainform.onRolAdminClick);
		items['iCountry'].onClick(Mainform.onCountryClick);
		items['iProvince'].onClick(Mainform.onProvinceClick);
		items['iCity'].onClick(Mainform.onCityClick);
		items['iDistrict'].onClick(Mainform.onDistrictClick);
		items['iScenary'].onClick(Mainform.onScenaryClick);
		items['iPlace'].onClick(Mainform.onPlaceClick);
		items['iAbout'].onClick(Mainform.onAboutClick);
		
		menus['mUser'].add(items['iUserAdmin']);
		menus['mUser'].add(items['iRolAdmin']);
		menus['mLocation'].add(items['iCountry']);
		menus['mLocation'].add(items['iProvince']);
		menus['mLocation'].add(items['iCity']);
		menus['mLocation'].add(items['iDistrict']);
		menus['mLocation'].add(items['iScenary']);
		menus['mLocation'].add(items['iPlace']);
		menus['mEvent'].add(items['iEventHandler']);
		menus['mEvent'].add(items['iManager']);
		menus['mFinance'].add(items['iMoney']);
		menus['mFinance'].add(items['iExchange']);
		menus['mFinance'].add(items['iBank']);
		menus['mFinance'].add(items['iCard']);
		menus['mFinance'].add(items['iDelivery']);
		menus['mFinance'].add(items['iDiscount']);
		menus['mFinance'].add(items['iInsurance']);
		menus['mHelp'].add(items['iHelp']);
		menus['mHelp'].add(items['iAbout']);
				
		bar.add(menus['mUser']);
		bar.add(menus['mLocation']);
		bar.add(menus['mEvent']);
		bar.add(menus['mPOS']);
		bar.add(menus['mFinance']);
		bar.add(menus['mReport']);
		bar.add(menus['mHelp']);
		bar.add(menus['mOut']);
		
		bar.addInto("bar");
		
		Mainform.form = new Form("fMainform");
		Mainform.form.onSubmitException(Mainform.onSubmitException);
		
		if (Mainform.dgid != "") {
			Mainform.grid = new DataGrid(Mainform.dgid);
		}
		
		if (msg != "") {
			OptionPane.showMessageDialog(parseInt(msg));
		}
	},
	
	setDataGrid: function (id) {
		Mainform.dgid = id;
	},

	/** Usuarios - Administracion de Usuarios -> ver lista de Usuarios */
	onUserAdminClick: function () {
		window.location.href = "userslist.php";
	},
	
	/** Usuarios - Administracion de Roles -> ver lista de Roles */
	onRolAdminClick: function () {
		window.location.href = "roleslist.php";
	},
	
	/** Ubicacion - Paises -> Listado de Paises Disponibles */
	onCountryClick: function () {
		window.location.href = "placeslist.php?view=" + Place.COUNTRY;
	},
	
	/** Ubicacion - Provincias -> Listado de Provincias Disponibles */
	onProvinceClick: function () {
		window.location.href = "placeslist.php?view=" + Place.PROVINCE;
	},
	
	/** Ubicacion - Cantones -> Listado de Cantones Disponibles */
	onCityClick: function () {
		window.location.href = "placeslist.php?view=" + Place.CITI;
	},

	/** Ubicacion - Distritos -> Listado de Distritos Disponibles */
	onDistrictClick: function () {
		window.location.href = "placeslist.php?view=" + Place.DISTRICT;
	},
	
	/** Ubicacion - Escenarios -> Listado de Escenarios Disponibles */
	onScenaryClick: function () {
		window.location.href = "placeslist.php?view=" + Place.LOCATION;
	},
		
	/** Ubicacion - Pueblos -> Listado de Pueblos Disponibles */
	onPlaceClick: function () {
		window.location.href = "placeslist.php?view=" + Place.TOWN;
	},
	
	/** Ayuda - Acerca de -> Informacion de Sistema */
	onAboutClick: function () {
		OptionPane.showMessageDialog(13);
	},
	
	/** Salir -> Cerrar Sesion */
	onOutClick: function () {
		window.location.href = "logout.php";
	},
	
	onSubmitException: function (e) {
		switch (e.message) {
			case "Null data exception": OptionPane.showMessageDialog(2);
			case "Incompatible types": OptionPane.showMessageDialog(12);
		}
		return false;
	}
	
};

