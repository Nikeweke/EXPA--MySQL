## CONCAT + СЛОЖЕНИЕ

###### Все значение будут в Высоком регистре

```sql
SELECT UPPER(Cust_NAME) AS NAMEUP FROM Customers
```

###### Вывод записей где год = 2011

```sql
SELECT ORDER_NUM, ID , CUST_ID FROM Orders
WHERE DATEPART(yy, order_date) = 2011
```


###### Вывод похожих по звучанию значений

```sql
SELECT CUST_NAME, CUST_CONTACT FROM CUSTOMERS
WHERE SOUNDEX(CUST_CONTACT) = SOUNDEX('MICHAEL GREEN')
```

###### Другие функции

```sql
ABS() - Модуль числа
COS() - Косинус угла
EXP() - Экспонента числа
PI() - число пи
SIN() - синус угла
SQRT() - корень числа
TAN() - тангенс угла
```
