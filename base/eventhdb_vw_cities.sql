create view eventhdb.eventhdb_vw_cities as select
	cities.ix as ix,
	countries.name as country,
	provinces.name as province,
	cities.name as name
from eventhdb.eventhdb_find_regions cities
inner join eventhdb.eventhdb_find_regions provinces on provinces.ix = cities.parent
inner join eventhdb.eventhdb_find_regions countries on countries.ix = provinces.parent and countries.parent is null
