# INSERT

#### FIRST EXAMPLE

```SQL
INSERT INTO EMPLOYEES VALUES (0, 'James', 'Hatfild')
INSERT INTO EMPLOYEES VALUES (1, 'Kirk', 'Hammet')
INSERT INTO EMPLOYEES VALUES (2, 'Lars', 'Ulrich')
INSERT INTO EMPLOYEES VALUES (1, 'Rob', 'Trihulijo')
INSERT INTO EMPLOYEES VALUES (3, 'Bob', 'Rock')
```

#### SECOND EXAMPLE

```SQL
INSERT INTO EMPLOYEES (ID, Name, Surname) VALUES (0, 'James', 'Hatfild')
INSERT INTO EMPLOYEES (ID, Name, Surname) VALUES (1, 'Kirk', 'Hammet')
INSERT INTO EMPLOYEES (ID, Name, Surname) VALUES (2, 'Lars', 'Ulrich')
INSERT INTO EMPLOYEES (ID, Name, Surname) VALUES (1, 'Rob', 'Trihulijo')
INSERT INTO EMPLOYEES (ID, Name, Surname) VALUES (3, 'Bob', 'Rock')
```

#### THIRD EXAMPLE

```SQL
INSERT OrderItems(order_num, order_item, prod_id, quantity, item_price) VALUES (14,
1111, 20074, 3, 11.56)

INSERT INTO Orders(order_num, order_date, cust_id) VALUES (14, '01.09.14',1239 )

INSERT INTO Customers(cust_id,
CUST_NAME,
cust_adress,
cust_country,
cust_email) VALUES (2121, 'Jons', 'st.Blitza', 'Germany',
'nazi@gmail.com' )
```