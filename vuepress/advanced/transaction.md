## TRANSACTION

###### Удаление записей

```sql
BEGIN TRANSACTION -- начать транзакцию

-- действия в транзакции
DELETE OrderItems WHERE order_num = 33
DELETE Orders WHERE order_num = 33

COMMIT TRANSACTION -- подтв. транзакцию
```


###### Пример транзакции

```sql
BEGIN TRANSACTION -- начать транзакцию

INSERT INTO Customers (cust_id, cust_name) VALUES (1928, 'Gerdino')

SAVE TRANSACTION StartOrder -- сохранили точку

INSERT INTO Orders (order_num, order_date, cust_id) VALUES (33, '05.25.2020',2126)

-- если ошибка не равно 0, то откатиться то точки сохранения "StartOrder"
IF @@ERROR <> 0 ROLLBACK TRANSACTION StartOrder

INSERT INTO OrderItems (order_num, order_item, prod_id,quantity,item_price) VALUES (33,
3232, 20100,32, 44.12)

-- если ошибка не равно 0, то откатиться то точки сохранения "StartOrder"
IF @@ERROR <> 0 ROLLBACK TRANSACTION StartOrder

INSERT INTO OrderItems (order_num, order_item, prod_id,quantity,item_price) VALUES (34,
3264, 20101, 3, 11.12)

-- если ошибка не равно 0, то откатиться то точки сохранения "StartOrder"
IF @@ERROR <> 0 ROLLBACK TRANSACTION StartOrder

COMMIT TRANSACTION -- подтв. транзакцию
```

###### Транзакция между банками

```sql
BEGIN TRANSACTION transfer

INSERT INTO b1(id, sum) VALUES(4,0)
INSERT INTO b2(id,sum)  VALUES(54, 100)

-- если ошибка не равно 0, то откатиться то точки сохранения "transfer", В НАЧАЛО
-- иначе подвтердить транзакцию
IF @@ERROR <> 0 rollback transaction transfer
ELSE COMMIT TRANSACTION transfer

SELECT * FROM b1
SELECT * FROM b2
```