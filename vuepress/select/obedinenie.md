## ОБЪЕДЕНЕНИЕ (WHERE)


###### Связывает таблицы и выводит данные с 2 таблиц
```sql
SELECT vend_name, prod_name, prod_price
FROM vendors, prod
WHERE vendors.vend_id = prod.vend_id
```

###### Связывает таблицы и выводит данные с 2 таблиц
```sql
SELECT vend_name, prod_name, prod_price
FROM vendors, prod
WHERE vendors.vend_id = prod.vend_id
```

###### Связывает несколько таблицы

```sql
SELECT prod_name, vend_name, prod_price, quantity
FROM OrderItems, PROD, VENDORS
WHERE
      Prod.vend_id = Vendors.vend_id AND
      OrderItems.prod_id = Prod.prod_id
```

###### Из подзапроса в Объеденение

```sql
-- Подзапрос
SELECT CUST_NAME,cust_country FROM Customers
WHERE cust_id IN (

  SELECT cust_id FROM Orders
  WHERE order_num IN (

      SELECT order_num FROM OrderItems
      WHERE prod_id = 20098
  )

)

-- Объеденение
SELECT cust_name, cust_country FROM Customers, Orders, OrderItems
WHERE
     Customers.cust_id = Orders.cust_id AND
     OrderItems.order_num = Orders.order_num AND
     prod_id = 20098

-- Объеденение + Псевдонимы
SELECT CUST_NAME, CUST_COUNTRY
FROM
     Customers AS C,
     Orders AS O,
     OrderItems AS OI
WHERE
       C.cust_id = O.cust_id AND
       OI.order_num = O.order_num AND
       prod_id = 20098

```

###### Самообъеденение

```sql
-- Подзапросом
SELECT CUST_ID, CUST_NAME, CusT_COUNTRY
FROM
    Customers
WHERE
    cust_name = (
      SELECT cust_name FROM Customers WHERE cust_country = 'USA'
    )

-- Объеденением
SELECT C1.CUST_ID, C1.CUST_NAME, C1.CUST_COUNTRY
FROM
     Customers AS C1,
     Customers AS C2
WHERE
    C1.cust_name = C2.cust_name AND
    C2.cust_country = 'USA'
```

###### Естественное объеденение

```sql
SELECT C.*, O.ORDER_NUM, O.ORDER_DATE, OI.PROD_ID, OI.QUANTITY, OI.ITEM_PRICE
FROM Customers AS C, Orders AS O, OrderItems AS OI
WHERE
     C.cust_id = O.cust_id AND
     OI.order_num = O.order_num AND
     prod_id = 20099
```

###### Объеденение с итоговой ф-цией

```sql
SELECT
     Customers.cust_id,
     COUNT(ORDERS.order_num) AS NUM_ORDS
FROM
     Orders,
     Customers
WHERE
    Customers.cust_id = Orders.cust_id
GROUP BY
    Customers.CUST_ID

-- or inner join
SELECT
     Customers.cust_id,
     COUNT(ORDERS.order_num) AS NUM_ORDS
FROM
     Orders
INNER JOIN Customers
   ON Customers.cust_id = Orders.cust_id
GROUP BY
   Customers.CUST_ID

-- or with join left
SELECT
     Customers.cust_id,
     COUNT(ORDERS.order_num) AS NUM_ORDS
FROM
     Orders
LEFT OUTER JOIN Customers
      ON Customers.cust_id = Orders.cust_id
GROUP BY
      Customers.CUST_ID
```
