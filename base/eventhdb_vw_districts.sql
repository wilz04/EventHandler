create view eventhdb.eventhdb_vw_districts as select
	districts.ix as ix,
	countries.name as country,
	provinces.name as province,
	cities.name as city,
	districts.name as name
from eventhdb.eventhdb_find_regions districts
inner join eventhdb.eventhdb_find_regions cities on cities.ix = districts.parent
inner join eventhdb.eventhdb_find_regions provinces on provinces.ix = cities.parent
inner join eventhdb.eventhdb_find_regions countries on countries.ix = provinces.parent and countries.parent is null
