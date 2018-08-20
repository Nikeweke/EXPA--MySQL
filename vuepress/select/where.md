#### WHERE

###### Вывод записей только где ID = 3
```SQL
SELECT ID, NAME FROM PRODUCTS WHERE ID = 3
```

###### Вывод записей только где ID меньше 4
```SQL
SELECT ID, NAME FROM PRODUCTS WHERE ID < 4
```

###### Вывод записей только где ID не равно 4
```SQL
SELECT ID , NAME FROM PRODUCTS WHERE ID != 4
SELECT ID , NAME FROM PRODUCTS WHERE ID <> 4
```

###### Вывод записей где ID между 5 и 7
```SQL
SELECT NAME, ID FROM PRODUCTS WHERE ID BETWEEN 5 AND 7
```

###### Вывод записей где ID = NULL
```SQL
SELECT NAME FROM PRODUCTS WHERE ID IS NULL
```

###### Вывод записей где цена меньше 10 или где ID меньше 5
```SQL
SELECT ID, PRICE, NAME FROM Products WHERE PRICE < 10 OR ID < 5
```

###### Вывод записей где ID равно или 3 или 7 и цена меньше или равно 10
```SQL
SELECT ID, NAME , PRICE FROM Products WHERE (ID = 3 OR ID = 7) AND price >= 10
```

###### Вывод записей где ID = 3 или 7 или 6 + сорт по цене
```SQL
SELECT ID, NAME, PRICE FROM Products WHERE ID IN (3,7,6) ORDER BY PRICE
```

###### Вывод все записей, кроме записей где ID = 4 + сорт по цене в порядке убывания
```SQL
SELECT ID, NAME, PRICE FROM Products WHERE NOT ID = 4 ORDER BY price DESC
```

