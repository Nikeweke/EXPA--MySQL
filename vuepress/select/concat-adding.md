## CONCAT + СЛОЖЕНИЕ

###### Конкантенация значений взятых из таблицы и создание новой колонки

```sql
SELECT NAME + '( ' + country + ' ) ' AS PROD_TITLE FROM PROD ORDER BY PRICE
```

###### Конкантенация значений взятых из таблицы

```sql
SELECT NAME + '( ' + country + ' ) ' FROM PROD ORDER BY PRICE
```


###### Конкантенация значений взятых из таблицы + RTRIM - отброс пробелов справа указ. знач.

```sql
SELECT RTRIM(NAME) + '( ' + RTRIM(country) + ' ) ' FROM PROD ORDER BY PRICE
```

###### Умножение значений и вывод их

```sql
SELECT ID, QUAN, PRICE, QUAN*PRICE AS qpew FROM PRODS
```
