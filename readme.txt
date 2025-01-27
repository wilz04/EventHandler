---- Arquitectura del Sistema ----

Capa Gr�fica -> skin
	- Interface Gr�fica de Usuario: HTML/CSS
	- Componentes y Manejo de Eventos: Javascript
	- Interface Gr�fica-L�gica: PHP
Capa L�gica ->
	- skel: PHP Esqueleto del Sistema
	- auth: PHP M�dulo de Usuarios
	- ecom: PHP M�dulo Financiero: Bancos, Medios de Pago y Precios
	- find: PHP M�dulo Geogr�fico
Capa de Base de Datos -> base
	- Interface Base de Datos-L�gica: PHP
	- Vistas y Procedimientos Almacenados: MySQL
	- Esquema de Base de Datos: MySQL (joomladb, eventhdb)

Otros Directorios:
	- docs: Contenedor de la documentaci�n.
	- images: Contenedor de las imagenes y fotos.
	- src: Contenedor de archivos fuente, de recurso y de producci�n no publicables.
	- templates: Contenedor de las p�ginas maestras (hojas de estilo y plantillas).
