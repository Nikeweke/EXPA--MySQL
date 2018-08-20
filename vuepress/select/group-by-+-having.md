#### GROUP BY + HAVING

###### Группировка товаров по одинаковому полю "PROD_ID" + вывод их количества

```SQL
SELECT PROD_ID, COUNT(*) AS SHIT FROM OrderItems GROUP BY PROD_ID
```

###### Группирование клиентов с одинаковым "cust_id" + вывод записей где больше 2 записей групируеться

```SQL
SELECT cust_id , COUNT(*) as orders
FROM Orders GROUP BY cust_id
HAVING COUNT(*) >= 2
```

