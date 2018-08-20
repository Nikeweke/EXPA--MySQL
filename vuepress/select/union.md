## UNION

* UNION - объеденяет 2 и больше запросов, которые выводит одинаковые столбики.
* При UNION - если найдуться 2 одинаковые записи будет выведена только одна


#### UNION (ALL)
UNION (ALL) - выводит запросы с одинаковыми записями, иначе не выводит

```sql
SELECT CUST_NAME, CUST_ID, CUST_ADRESS,cust_country
FROM Customers WHERE cust_country in ('Israel', 'Germany')

UNION (ALL)

SELECT CUST_NAME, CUST_ID, CUST_ADRESS, cust_country 
FROM Customers WHERE cust_name = 'Debby'
```

#### UNION + ORDER BY

```sql
SELECT CUST_NAME, CUST_ID, CUST_ADRESS, cust_country 
FROM Customers WHERE cust_country in ('Israel', 'Germany')

UNION (ALL)

SELECT CUST_NAME, CUST_ID, CUST_ADRESS, cust_country 
FROM Customers WHERE cust_name = 'Debby' ORDER BY CUST_NAME, CUST_ADRESS
```
