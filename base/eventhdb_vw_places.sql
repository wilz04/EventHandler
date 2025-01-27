create view eventhdb.eventhdb_vw_places as
select 
	u.ix as ix,
	u.place as pais,
	u.place as provincia,
	u.place as distrito 
from eventhdb.eventhdb_find_places u 
inner join eventhdb.eventhdb_find_roles r on u.ix = u.ixe
