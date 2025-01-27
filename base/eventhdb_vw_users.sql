create view eventhdb.eventhdb_vw_users as
select 
	u.ix as ix,
	concat(u.firstname, ' ', u.middlename, ' ', u.lastname) as fullname,
	u.email as email,
	r.description as role,
	u.phone as phone,
	u.photo as photo,
	u.state as state 
from eventhdb.eventhdb_auth_users u 
inner join eventhdb.eventhdb_auth_roles r on r.ix = u.role
