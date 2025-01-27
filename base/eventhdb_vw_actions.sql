create view eventhdb.eventhdb_vw_actions as select
	u.ix as ix,
	u.email as username,
	a.description as activity,
	a.display as display,
	a.new as new,
	a.modify as modify,
	a.remove as remove
from eventhdb.eventhdb_auth_users u
inner join eventhdb.eventhdb_auth_useractions ua on ua.user = u.ix
inner join eventhdb.eventhdb_auth_actions a on a.ix = ua.action
