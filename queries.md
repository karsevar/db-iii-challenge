# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select ProductName, CategoryName from 
Products as P 
join Categories as C 
on P.CategoryId = C.CategoryId;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

 SELECT OrderID, ShipperName FROM Orders LEFT JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID WHERE Orders.OrderDate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity, OrderID FROM OrderDetails JOIN Products ON OrderDetails.ProductID = Products.ProductID WHERE OrderDetails.OrderID = 10251 ORDER BY Products.ProductName;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT OrderID, CustomerName, LastName FROM Orders JOIN Customers ON Orders.CustomerID = Customers.CustomerID JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

