## ORDER BY

###### сорт по полю "NAME"
```SQL
SELECT NAME FROM EMPLOYEES ORDER BY NAME
```

###### сорт по полю "NAME" в обратном порядке
```SQL
SELECT ID , NAME , SURNAME FROM EMPLOYEES ORDER BY Name DESC
```


###### сорт по полю "NAME"
```SQL
-- сорт по полю "NAME", "SURNAME" в обратном порядке
SELECT ID , NAME , SURNAME FROM EMPLOYEES ORDER BY NAME, SURNAME DESC
```

