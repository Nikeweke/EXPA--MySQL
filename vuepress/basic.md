# Basic

## CREATE DB

```sql
CREATE DATABASE db_name
```

## USE DB

```sql
USE db_name
```

## CREATE TABLE

```sql
CREATE TABLE EMPLOYEES (
  ID int,
  Surname nvarchar(100),
  Name nvarchar(100)
)

CREATE TABLE PRODUCTS (
  id int primary key identity(1,1),
  name_prod nvarchar(100),
  price_prod float
 )

 CREATE TABLE PROD (
 prod_id char(10) not null,
 vend_id char(10) not null,
 prod_name char(254) not null,
 prod_price decimal(8,2) not null,
 prod_desc varchar(1000) null
)
 /* not null -> не может быть значение NULL */
 /* decimal(8,2) -> 8 цифр перед запятой, 2 после */
 -----------------------
 ```

## DEL COLUMN

```sql
ALTER TABLE alfa DROP COLUMN gr_phone
```

## ADD NEW COL

```sql
ALTER TABLE alfa ADD gr_phone char(20)
```

## DROP DB & TABLE

```sql
DROP DATABASE LATRELL
DROP TABLE PRODUCTS
```
