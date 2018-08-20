# Update

### Обновить поле "cust_email" где cust_id = 20098
```SQL
UPDATE Customers SET cust_email = 'gradi@gmail.com' WHERE cust_id = '20098'
```
<br>

### Обновить поля "cust_email", "cust_country" где cust_id = 20098
```SQL
UPDATE Customers SET cust_email = 'gradi@gmail.com', cust_country = 'Albenia' 
WHERE cust_id = '20098'
```
<br>

### Обновить поле "cust_email" где cust_id = 20098
```SQL
UPDATE Customers SET cust_email = NULL WHERE cust_id = 20098
```