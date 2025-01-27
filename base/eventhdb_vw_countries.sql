create view eventhdb.eventhdb_vw_countries as select
	countries.ix as ix,
	countries.name as name
from eventhdb.eventhdb_find_regions countries where countries.parent is null
