# PROCEDURE


###### Вызов процедуры в php
```php
query('CALL name_procedure("$parametr")')
```

###### Выполнение 1 комманд в процедуре

```sql
CREATE PROCEDURE ins_del(vall varchar(200))
INSERT INTO kod(kod) VALUES(vall)
```

###### Выполнение 2 комманд в процедуре (После каждой комманды - ;)

```sql
DELIMITER //

CREATE PROCEDURE insert_emp(var1 varchar(50),var2 varchar(50),var3 varchar(50),var4 varchar(50),var5 varchar(50))
BEGIN

INSERT INTO employees(surname, name, posada, kraina) VALUES(var1, var2, var3, var4);
INSERT INTO kod(kod) VALUES(var5);

END //
```


###### Выполнение 3 комманд в процедуре (После каждой комманды - ;)

```sql
DELIMITER //

CREATE TRIGGER `del_user_with_diaries_and_settings` BEFORE DELETE ON `foodcontrol`.`users`
FOR EACH ROW
BEGIN

INSERT INTO log(action, table_name, user) VALUES('user was deleted', 'Users', OLD.email);
DELETE FROM diaries WHERE diaries.user_id = OLD.id;
DELETE FROM user_settings WHERE user_settings.user_id = OLD.id;

END //
```

###### Процедура вставки с параметрами 1 - 4 ШТ. (После каждой комманды - ;)

```sql
DELIMITER //
CREATE PROCEDURE inserter(
   choice int,
   table_var varchar(400),
   field_1 varchar(400),
   field_2 varchar(400),
   field_3 varchar(400),
   field_4 varchar(400),
   valu_1 varchar(400),
   valu_2 varchar(400),
   valu_3 varchar(400),
   valu_4 varchar(400))

BEGIN

IF(choice = 1) THEN
INSERT INTO table_var(field_1) VALUES(valu_1) ;

ELSEIF(choice = 2) THEN
INSERT INTO table_var(field_1,field_2) VALUES(valu_1, valu_2) ;

ELSEIF(choice = 3) THEN
INSERT INTO table_var(field_1,field_2,field_3) VALUES(valu_1, valu_2, valu_3) ;

ELSEIF(choice = 4) THEN
INSERT INTO table_var(field_1, field_2, field_3, field_4) VALUES(valu_1, valu_2, valu_3, valu_4) ;

END IF;

END //
```

###### Процедура вывода с параметром (После каждой комманды - ;)

```sql
DELIMITER //
CREATE PROCEDURE selecter(choice int, var1 varchar(50), var2 varchar(50))

-- var 1 - current user
-- var 2 - another member
-- choice - selector

BEGIN

-- TODOIST
IF(choice = 1) THEN
SELECT todoist_id, todoist_article, todoist_done, date_format(todoist_time,'%b. %e, %Y, %k:%i') as time FROM todoist WHERE todoist_visible = 1 AND todoist_user = var1 ORDER BY todoist_id DESC ;

-- MESSAGES
ELSEIF(choice = 2) THEN
SELECT messages.author, date_format(time,'%T (%e-%m-%y)') as time, messages.towho, messages.message FROM messages WHERE author = var1 AND towho = var2 OR author = var2 AND towho = var1 ORDER BY messages.id ;

-- FRIENDS (1 Request: All members)
ELSEIF(choice = 3) THEN
SELECT members.id, members.nickname, members.email, images.img_name FROM members,images WHERE members.id = images.id_user AND members.id != var1 ;


-- FRIENDS (2 Request: Friendships)
ELSEIF(choice = 4) THEN
(SELECT user, friend, status, notice FROM friends WHERE user = var1 AND friend = var2 ORDER BY id DESC LIMIT 2)
 UNION
 (SELECT user, friend, status, notice FROM friends WHERE user = var2 AND friend = var1 ORDER BY id DESC LIMIT 2);


-- MEMBERS (1 Request: All members)
ELSEIF(choice = 5) THEN
SELECT members.id, members.nickname, members.email, images.img_name FROM members,images WHERE members.id = images.id_user AND members.id != var1 ;


-- MEMBERS (2 Request: Current user's requests for frienship)
ELSEIF(choice = 6) THEN
SELECT user,friend FROM friends WHERE user = var1 AND friend = var2 ;


-- MEMBERS (3 Request: Friendships)
ELSEIF(choice = 7) THEN
(SELECT user, friend, status, notice FROM friends WHERE user = var1 AND friend = var2 ORDER BY id DESC LIMIT 2)
 UNION
(SELECT user, friend, status, notice FROM friends WHERE user = var2 AND friend = var1 ORDER BY id DESC LIMIT 2) ;

END IF;

END //


!!! USING : $query = $db->query("CALL selecter(1,$current_user,0)");
        бЕЗ КАВЫЧЕК
```









###### Подсчет клиентов которые имеют почту (может не работать)

```sql
CREATE PROCEDURE Mailing_List_Count
AS
DECLARE @cnt INT -- переменная

-- запрос
SELECT @cnt = COUNT(*) FROM Customers
WHERE NOT cust_email IS NULL

RETURN @cnt
```

```sql
-- использование процедуры
DECLARE @ReturnValue INT
EXEC @ReturnValue = Mailing_List_Count
SELECt @ReturnValue AS quan
```

###### Процедура добавляет новый заказ в таблицу "Orders" (может не работать)

принимает аргумент в виде: id-клиента, которые сделал заказ

```sql
CREATE PROCEDURE NewOrder @cust_id char(10)
AS
-- Переменная для номера заказа
DECLARE @order_num INT

-- получение записи где найбольшое число заказа
SELECT @order_num = MAX(order_num) FROM Orders

-- Определние след. номера заказа
SELECT @order_num = @order_num + 1

-- Добавление нового заказа
INSERT INTO Orders(order_num, order_date, cust_id) VALUES (@order_num, GETDATE(), @cust_id)

-- Вернуть номер заказа
RETURN @order_num

-- ================== OR

CREATE PROCEDURE NewOrder1 @cust_id char(10)
AS
-- Добавление нового заказа
INSERT INTO Orders(cust_id) VALUES (@cust_id)

-- Вернуть номер заказа
SELECT order_num = @@IDENTITY
```