create view eventhdb.eventhdb_vw_roles as select
	u.ix as ix,
	u.email as username,
	r.description as role,
	a.description as activity,
	a.display as display,
	a.new as new,
	a.modify as modify,
	a.remove as remove
from eventhdb.eventhdb_auth_users u
inner join eventhdb.eventhdb_auth_roles r on r.ix = u.role
inner join eventhdb.eventhdb_auth_roleactions ra on ra.role = r.ix
inner join eventhdb.eventhdb_auth_actions a on a.ix = ra.action
