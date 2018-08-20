# CURSOR

###### CREATE CURSOR

```sql
DECLARE CUSTCURS CURSOR FOR
SELECT * FROM Customers
WHERE cust_email IS NULL

-- open cursor
OPEN CUSTCURS

-- close cursor
CLOSE CUSTCURS
DEALLOCATE CURSOR CUSTCURS
```


###### Пример курсора

```sql
-- создаем курсор для запроса
DECLARE CUST CURSOR FOR
SELECT cust_id, cust_name, cust_adress FROM Customers WHERE cust_email IS NULL

-- открываем курсор
OPEN CUST

-- переменные
DECLARE @id INT,
        @name NVARCHAR(50),
        @address NVARCHAR(40)

FETCH NEXT FROM CUST INTO @id, @name, @address

WHILE @@FETCH_STATUS = 0
  BEGIN
    print 'номер по порядку '+ convert(nvarchar(10), @id) +
    ' адрес проживания : '+
    @address + ' имя ' + @name

  FETCH NEXT FROM CUST
END

-- закрываем курсор
CLOSE CUST
DEALLOCATE CUST
```

###### Пример курсора 2

```sql
CREATE PROCEDURE curdemo()
BEGIN
  DECLARE done INT DEFAULT 0;
  DECLARE a CHAR(16);
  DECLARE b,c INT;
  DECLARE cur1 CURSOR FOR SELECT id,data FROM test.t1;
  DECLARE cur2 CURSOR FOR SELECT i FROM test.t2;
  DECLARE CONTINUE HANDLER FOR SQLSTATE '02000' SET done = 1;

  OPEN cur1;
  OPEN cur2;

REPEAT
    FETCH cur1 INTO a, b;
    FETCH cur2 INTO c;
    IF NOT done THEN
       IF b < c THEN
          INSERT INTO test.t3 VALUES (a,b);
       ELSE
          INSERT INTO test.t3 VALUES (a,c);
       END IF;
    END IF;
UNTIL done END REPEAT;

  CLOSE cur1;
  CLOSE cur2;
END
```