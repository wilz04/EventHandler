/**
 * @alias OptionPane.class
 * @author WilC <wilz04@gmail.com>
 * @since 2008
 */

var OptionPane = {
	
	message: {
		0: "Los cambios han sido aplicados correctamente!",
		1: "Por favor, rellene el campo!",
		2: "Por favor, rellene los campos marcados con un *!",
		3: "Por favor, seleccione alguna opci\xF3n!",
		4: "Por favor, digite un valor num\xE9rico!",
		5: "Por favor, el valor debe ser \xDAnico!",
		6: "Est\xE1 seguro de que desea eliminar el registro?",
		7: "Error, los datos no coinciden!",
		8: "Error, the data already exist!",
		9: "Error updating data!",
		10: "Error, another record is associated to this record!",
		11: "El mensaje ha sido enviado con \xE9xito!",
		12: "Digite su E-mail",
		13: "Desarrollado por Poligon Teknologies.",
		14: "Antes de realizar esta acci\xF3n debe guardar los datos!"
	},
	
	showMessageDialog: function (index) {
		alert(OptionPane.message[index]);
		return false;
	},
	
	showConfirmDialog: function (index) {
		return confirm(OptionPane.message[index]);
	},
	
	showInputDialog: function (index) {
		var args = arguments[1];
		var value = "";
		if (args) {
			value = args.value ? args.value : value;
		}
		return prompt(OptionPane.message[index], value);
	}
	
};
