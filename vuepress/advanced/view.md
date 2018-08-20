
# VIEW

VIEW - шаблон виртуальной таблицы на основе существующих

###### Вывод связанных таблиц как в  виртуальной таблице
```sql
CREATE VIEW ProdCustomers
AS
SELECT cust_name, cust_country, prod_id
FROM Customers, Orders, OrderItems
WHERE Customers.cust_id = Orders.cust_id
AND
OrderItems.order_num = Orders.order_num

-- Использование
SELECT cust_name, cust_country
FROM ProdCustomers
WHERE PROD_ID = 20099
```

###### Вывод : Поставщик (страна)
```sql
CREATE VIEW VendorLocations
AS
SELECT RTRIM(vend_name) + ' (' + RTRIM(vend_country) + ')'
AS vend_title
FROM Vendors
```

###### Вывод: покупатели которые имеют почту

```sql
CREATE VIEW CustomerEMailList
AS
SELECT cust_id, cust_name, cust_email
FROM Customers
WHERE cust_email IS NOT NULL
```

###### Вывод: инфо про продукт

```sql
CREATE VIEW ProdNameDesc
AS
SELECT prod_name, prod_price, order_date, quantity
FROM OrderItems, Orders , Prod
WHERE Orders.order_num = OrderItems.order_num AND
OrderItems.prod_id = Prod.prod_id AND

```
