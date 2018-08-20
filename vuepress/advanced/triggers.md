## TRIGGERS

###### Триггер с 1 коммандой

```sql
CREATE TRIGGER `ins_employees` AFTER INSERT ON `employees`
FOR EACH ROW
   INSERT INTO trigga Set text = 'insert in employees'
```

###### Триггер с 2 коммандами (Связь между двумя таблами на удаление) (после каждой комманды ставить - ;)

```sql
DELIMITER //

CREATE TRIGGER `del_emp1`BEFORE DELETE ON `employees`
FOR EACH ROW
BEGIN

INSERT INTO log Set action = 'delete in employees';
DELETE FROM kod WHERE kod.id = OLD.id;

END //
```

###### Триггер с IF clause

```sql
DELIMITER //
CREATE TRIGGER `likes_recounter` AFTER INSERT ON `likes` 
FOR EACH ROW 
BEGIN

DECLARE likes_count integer;

IF NEW.article_id <> 0 THEN BEGIN
-- INSERT INTO logs (table_name, user) VALUES(NEW.article_id, 'here');
SET @likes_count := (SELECT count(*) FROM likes WHERE article_id = NEW.article_id);
UPDATE articles SET likes = @likes_count WHERE articles.id = NEW.article_id;
 END;  END IF;

IF NEW.answer_id <> 0 THEN BEGIN
-- INSERT INTO logs (table_name, user) VALUES(NEW.article_id, 'here1');
SET @likes_count := (SELECT count(*) FROM likes WHERE answer_id = NEW.answer_id);
UPDATE answers SET likes = @likes_count WHERE answers.id = NEW.answer_id;
END; END IF;


IF NEW.question_id <> 0  THEN BEGIN
-- INSERT INTO logs (table_name, user) VALUES(NEW.article_id, 'here2');
SET @likes_count := (SELECT count(*) FROM likes WHERE question_id = NEW.question_id);
UPDATE articles SET likes = @likes_count WHERE question.id = NEW.question_id;
END; END IF;

-- INSERT INTO logs (table_name, user) VALUES(NEW.article_id, 'here3');

END
//
DELIMITER ;
```



###### Trigger on UPDATE (может не работать)

```sql
CREATE TRIGGER update_emp  -- назв. тригера
ON Employees -- на какую таблицу ставиться
FOR UPDATE -- на какое действие
AS
BEGIN

  DECLARE @FIO NVARCHAR(150),
          @DATE_IN DATETIME

  SET @DATE_IN = GETDATE()

  IF UPDATE(NAME)
   BEGIN
    INSERT INTO EMO_LOG (FIO,DATE_IN) VALUES('UPDATED', @DATE_IN)
   END
END

GO
```


###### Trigger on DELETE (может не работать)



```sql
ALTER TRIGGER updateemp2
ON Employees
FOR DELETE
AS
BEGIN
SET @DATE_IN = GETDATE()
--
BEGIN
INSERT INTO EMO_LOG (FIO,DATE_IN) VALUES('DELETED', @DATE_IN)
ROLLBACK TRAN
END
END
GO
```

###### Trigger on INSERT (может не работать)




```sql
ALTER TRIGGER updateemp
ON Employees
FOR INSERT
AS
BEGIN
DECLARE @FIO NVARCHAR(150), @DATE_IN DATETIME
SET @DATE_IN = GETDATE()
--
BEGIN
SELECT @FIO = NAME +' ' + SURNAME FROM inserted
INSERT INTO EMO_Log (FIO, date_in) VALUES (@FIO, @DATE_IN)
END
END
GO
```
