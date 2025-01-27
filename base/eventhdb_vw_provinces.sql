create view eventhdb.eventhdb_vw_provinces as select
	provinces.ix as ix,
	countries.name as country,
	provinces.name as name
from eventhdb.eventhdb_find_regions provinces
inner join eventhdb.eventhdb_find_regions countries on countries.ix = provinces.parent and countries.parent is null
