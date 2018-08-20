## MATH FNS

###### MATH FNS

```sql
ABS() - модуль числа
COS() - косинус угла
EXP() - экспонента числа
PI() - получить число пи
SIN() - синус угла
SQRT() - корень числа
TAN() - тангенс угла
```

### AVG()

###### Вывод среднего значения по столбику

```sql
SELECT AVG(PROD_PRICE) AS AVG_PRICE FROM PROD
```

###### Вывод среднего значения по столбику с учетом уникальных цен

```sql
SELECT AVG(DISTINCT PROD_PRICE) AS AVG_PRICE FROM PROD
```

### COUNT()
###### Вывод числа строк

```sql
SELECT COUNT(*) AS NUM_CUST FROM CUSTOMERS
```

###### Вывод числа строк в столбике где есть значение ( != NULL )

```sql
SELECT COUNT(CUST_EMAIL) AS NUM_CUST FROM CUSTOMERS
```

### MAX() & MIN()
###### Вывод макс. значения

```sql
SELECT MAX(PROD_PRICE) AS MAX_PRICE FROM PROD
```
###### Вывод мин. значения

```sql
SELECT MIN(PROD_PRICE) AS MIN_PRICE FROM PROD
```

### SUM()

###### Вывод суммы значений

```sql
SELECT SUM(QUAN) AS ITEM_ORDERED FROM ORDERITEMS WHERE ORDER_ITEM = 20005
```

###### Сумма + умножение

```sql
SELECT SUM(ITEM_PRICE*QUANTITY) AS TOTAL_PR FROM OrderItems WHERE order_item = 2345
```

### All together

```sql
SELECT COUNT(*) AS NUM_ITEMS,
MIN(PROD_PRICE) AS PRICE_MIN,
MAX(PROD_PRICE) AS PRICE_MAX,
AVG(PROD_PRICE) AS PRICE_AVG,
FROM PROD
```



