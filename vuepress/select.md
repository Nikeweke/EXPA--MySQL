## SELECT

###### Вывод только поля "ID" с табл. EMPLOYEES
```SQL
SELECT ID FROM EMPLOYEES
```
###### Вывод только поля "ID","SURNAME" с табл. EMPLOYEES
```SQL
SELECT ID, SURNAME FROM EMPLOYEES
```

###### Вывод все поля  с табл. EMPLOYEES
```SQL
SELECT * FROM EMPLOYEES
```

###### Вывод уникальных записей с табл. EMPLOYEES
```SQL
SELECT DISTINCT * FROM EMPLOYEES
```

###### ВЫвод 2 первыз записей
```SQL
SELECT TOP 2 NAME FROM EMPLOYEES
```

###### Вывод по сравнению
```SQL
SELECT NS FROM TEACHER
WHERE EXISTS (SELECT NS FROM SPECIALITY
WHERE SPECIALITY.NS = TEACHER.NS)
```