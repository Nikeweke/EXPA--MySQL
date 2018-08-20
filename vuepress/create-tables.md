# Example of creating tables

```sql
--------------------------------------------------
// Таблица "Просмотренные страницы"

CREATE TABLE viewed_pages(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
user VARCHAR( 255 ) ,
page int,
time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) DEFAULT CHARACTER SET utf8 ENGINE = MYISAM
--------------------------------------------------

--------------------------------------------------
// Таблица "Список дел"

CREATE TABLE todoist (
todoist_id  INT NOT NULL AUTO_INCREMENT,
todoist_user INT NOT NULL ,
todoist_article varchar(70),

todoist_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    todoist_done int DEFAULT 0,
todoist_visible INT DEFAULT 1,
PRIMARY KEY(todoist_id)
) DEFAULT CHARACTER SET utf8 ENGINE = MYISAM
--------------------------------------------------



--------------------------------------------------
// Таблица "Комментарии"

CREATE TABLE coments (
id  INT NOT NULL,
id_u INT NOT NULL ,
id_page INT NOT NULL,
text VARCHAR(255) NOT NULL,
time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
publish INT DEFAULT 0,
PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8 ENGINE = MYISAM
--------------------------------------------------


--------------------------------------------------
// Таблица "Картинки"(хранит пути к картинкам)

CREATE TABLE images (
id_user INT NOT NULL ,
img_name VARCHAR(100) NOT NULL,
type VARCHAR(30) NOT NULL,
size INT NOT NULL,
PRIMARY KEY(id_user)
) DEFAULT CHARACTER SET utf8 ENGINE = MYISAM
--------------------------------------------------


--------------------------------------------------
// Таблица "Картинки"(хранит картинки, а не пути к ним)

CREATE TABLE images (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
type VARCHAR(30) NOT NULL,
size INT NOT NULL,
content MEDIUMBLOB NOT NULL,
PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8 ENGINE = MYISAM
--------------------------------------------------

--------------------------------------------------
// Таблица "Статьи"

CREATE TABLE stati(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
article VARCHAR( 255 ) ,
body LONGTEXT,
sfera INT NOT NULL,
ptime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
s_img   VARCHAR( 255 )

) DEFAULT CHARACTER SET utf8 ENGINE = MYISAM
--------------------------------------------------

--------------------------------------------------
// Таблица "Пользователи"

CREATE TABLE users(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
login VARCHAR( 50 ) ,
pass VARCHAR( 50 ),
time_reg TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

) DEFAULT CHARACTER SET utf8 ENGINE = MYISAM
--------------------------------------------------
```