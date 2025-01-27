---- Arquitectura del Sistema ----

Capa Gráfica -> skin
	- Interface Gráfica de Usuario: HTML/CSS
	- Componentes y Manejo de Eventos: Javascript
	- Interface Gráfica-Lógica: PHP
Capa Lógica ->
	- skel: PHP Esqueleto del Sistema
	- auth: PHP Módulo de Usuarios
	- ecom: PHP Módulo Financiero: Bancos, Medios de Pago y Precios
	- find: PHP Módulo Geográfico
Capa de Base de Datos -> base
	- Interface Base de Datos-Lógica: PHP
	- Vistas y Procedimientos Almacenados: MySQL
	- Esquema de Base de Datos: MySQL (joomladb, eventhdb)

Otros Directorios:
	- docs: Contenedor de la documentación.
	- images: Contenedor de las imagenes y fotos.
	- src: Contenedor de archivos fuente, de recurso y de producción no publicables.
	- templates: Contenedor de las páginas maestras (hojas de estilo y plantillas).
