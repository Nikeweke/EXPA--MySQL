## CONSOLE COMMANDS
* `mysql -u root -p '2222'` - Вход в Mysql
* `USE my_DB;` - Выбрать БД
* `SELECT * FROM TABLE` - Показать записи из таблицы
* `SOURCE /home/database/file.sql` - Импорт данных из файла
* `SHOW VARIABLES LIKE 'char%';` -  Показать кодировки системы Mysql
* `SHOW WARNINGS;` -  Показать уведомления
* `SHOW VARIABLES LIKE "collation_datbase"; ` - Показать кодировку
* `SHOW VARIABLES LIKE "character_set_database"; ` - Показать кодировку
* `SHOW FULL COLUMNS FROM table ` - Показать полностью структуру по таблице
* `SET NAMES "utf8" COLLATE "utf8_general_ci"` - Установить кодировку