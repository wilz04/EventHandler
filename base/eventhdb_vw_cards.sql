create view eventhdb.eventhdb_vw_cards as select
	c.ix as ix,
	c.name as name,
	b.name as bank
from eventhdb.eventhdb_ecom_cards c
inner join eventhdb.eventhdb_ecom_bank b on b.ix = c.bank
