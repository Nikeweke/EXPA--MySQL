## ПОДЗАПРОСЫ

```
Связь между таблами :
Customers(cust_id) -> (cust_id) Orders (order_num) -> (order_num) OrderItems
```

#### ЗАДАЧА 1
Вывести инфу про клиентов у которых в заказе числиться товар с id = 20098

###### собираем подзапрос пошагово
```sql
-- 1 запрос
-- Находим заказы в которых указан продукт с id
-- Результат: 11, 12 № заказов
SELECT ORDER_NUM FROM OrderItems WHERE prod_id = 20098

-- 2 запрос
-- По номеру заказов ищем ID покупателя по таблице заказов, ищем в диапазоне
SELECT CUST_ID FROM Orders WHERE order_num IN (11,12)
```

```sql
-- Строим подзапрос
-- 2 запрос
SELECT CUST_ID FROM Orders WHERE order_num IN (
  -- 1 запрос
  SELECT ORDER_NUM FROM OrderItems WHERE prod_id = 20098
)

```

###### Больше подзапросa (добавляем инфу про клинета, нет только его ID)
```sql
-- 3 запрос
SELECT CUST_NAME, cust_adress FROM Customers
WHERE CUST_ID IN (

   -- 2 запрос
   SELECT CUST_ID FROM Orders
    WHERE order_num IN (

      -- 1 запрос
      SELECT order_num FROM OrderItems WHERE prod_id = 20098

    )

 )

```


#### ЗАДАЧА 2
* Вывод списка клиентов
* Подсчитать кол-во их заказов

###### собираем подзапрос пошагово
```sql
-- 1 запрос
-- Выбор всех клиентов
-- Результат: клиенты
SELECT * FROM Customers

-- 2 запрос
-- Подсчет записей где ID клиента = 2121 (это примерно для того чтобы создать схему) 
SELECT COUNT(*) AS ORDERS
FROM Orders
WHERE cust_id = 2121
```


```sql
-- Строим подзапрос
SELECT CUST_NAME, CUST_COUNTRY, -- 1 запрос

-- 2 запрос идет как столбик подсчета
(SELECT COUNT(*)FROM Orders WHERE ORDERS.cust_id = CUSTOMERS.cust_id ) AS ORDERS

FROM Customers ORDER BY CUST_NAME

```
