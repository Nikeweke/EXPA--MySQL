## JOIN

Here are the different types of the JOINs in SQL:

* **INNER JOIN**: Возвращает записи, имеющие соответствующие значения в обеих таблицах
* **LEFT (OUTER) JOIN**: Верните все записи из левой таблицы и соответствующие записи из правой таблицы
* **RIGHT (OUTER) JOIN**: Верните все записи из правой таблицы и соответствующие записи из левой таблицы
* **FULL OUTER JOIN**: Возвращать все записи, когда есть совпадение в левой или правой таблице

![](/assets/img_innerjoin.gif)![](/assets/img_leftjoin.gif)![](/assets/img_rightjoin.gif)![](/assets/img_fulljoin.gif)

#### (INNER) JOIN

```sql
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;

-- a few joins
SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
FROM ((Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);
```

#### LEFT (OUTER) JOIN

```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;
```


#### RIGHT (OUTER) JOIN

```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
RIGHT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;
```

#### FULL (OUTER) JOIN

```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID
ORDER BY Customers.CustomerName;
```









